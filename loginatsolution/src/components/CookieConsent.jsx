import React, { useEffect, useState, useRef } from "react";
// If you use framer-motion elsewhere, keep this. If not, remove it and the motion tags.
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "site_cookie_consent_v1";
const DEFAULT_EXP_DAYS = 1;

// Helper: save consent obj to localStorage with expiry
function saveConsent(consentObj, days = DEFAULT_EXP_DAYS) {
  const expiresAt = Date.now() + days * 24 * 60 * 60 * 1000;
  const payload = { consent: consentObj, expiresAt };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

// Helper: read consent, validate expiry
function readConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const { consent, expiresAt } = JSON.parse(raw);
    if (!expiresAt || Date.now() > expiresAt) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return consent;
  } catch (err) {
    console.warn("Failed to read cookie consent", err);
    return null;
  }
}

// Default consent object (essential always true)
const defaultConsent = {
  essential: true,
  analytics: false,
  marketing: false,
};

export default function CookieConsent({
  position = "bottom", // "bottom" | "top"
  expiryDays = DEFAULT_EXP_DAYS,
  analyticsCallback = (enabled) => {},
  marketingCallback = (enabled) => {},
}) {
  const [consent, setConsent] = useState(null); // null = not decided
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  // load consent on mount
  useEffect(() => {
    const existing = readConsent();
    if (existing) {
      setConsent(existing);
      setShowBanner(false);
      // callbacks so app can enable/disable scripts
      analyticsCallback(existing.analytics);
      marketingCallback(existing.marketing);
    } else {
      // show banner if no consent
      setShowBanner(true);
    }
  }, []);

  // close modal if clicked outside
  useEffect(() => {
    function onDocClick(e) {
      if (showModal && modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    }
    if (showModal) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [showModal]);

  // Accept all (essential always true)
  const acceptAll = () => {
    const newConsent = { ...defaultConsent, analytics: true, marketing: true };
    setConsent(newConsent);
    saveConsent(newConsent, expiryDays);
    analyticsCallback(true);
    marketingCallback(true);
    setShowBanner(false);
    setShowModal(false);
  };

  // Reject all non-essential (only essential = true)
  const rejectAll = () => {
    const newConsent = { ...defaultConsent, analytics: false, marketing: false };
    setConsent(newConsent);
    saveConsent(newConsent, expiryDays);
    analyticsCallback(false);
    marketingCallback(false);
    setShowBanner(false);
    setShowModal(false);
  };

  // Save from manage modal
  const saveFromModal = (state) => {
    const newConsent = { ...defaultConsent, analytics: !!state.analytics, marketing: !!state.marketing };
    setConsent(newConsent);
    saveConsent(newConsent, expiryDays);
    analyticsCallback(newConsent.analytics);
    marketingCallback(newConsent.marketing);
    setShowBanner(false);
    setShowModal(false);
  };

  // If consent already decided, don't show banner
  if (!showBanner) return null;

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: position === "bottom" ? 40 : -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: position === "bottom" ? 40 : -40, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div
              className={`fixed ${position === "bottom" ? "bottom-6" : "top-6"} left-1/2 transform -translate-x-1/2 z-50 max-w-3xl w-full`}
              role="dialog"
              aria-modal="true"
              aria-label="Cookie consent"
            >
              <div className="bg-white rounded-xl shadow-xl p-5 md:p-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="flex-shrink-0">
                  {/* simple cookie icon */}
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">🍪</div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold">We use cookies</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    We use essential cookies to make this site work. We’d like to use analytics and marketing cookies to
                    improve the experience. You can accept all or manage your preferences.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-sm">
                    <a href="/privacy-policy" className="underline hover:text-blue-600">Privacy Policy</a>
                    <span className="text-gray-400">•</span>
                    <button
                      onClick={() => setShowModal(true)}
                      className="underline hover:text-blue-600"
                    >
                      Manage cookies
                    </button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 md:items-center md:ml-4">
                  <button
                    onClick={rejectAll}
                    className="px-4 py-2 rounded-md border text-sm bg-white hover:bg-gray-50"
                    aria-label="Reject non essential cookies"
                  >
                    Reject
                  </button>

                  <button
                    onClick={acceptAll}
                    className="px-4 py-2 rounded-md text-sm bg-gradient-to-r from-[var(--pink)] to-[var(--blue)] text-white shadow-md"
                    aria-label="Accept all cookies"
                  >
                    Accept all
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Manage modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            aria-hidden={!showModal}
          >
            <div className="absolute inset-0 bg-black/40" />

            <div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              className="relative z-10 bg-white rounded-lg shadow-2xl max-w-xl w-full p-6"
            >
              <h3 className="text-xl font-semibold">Manage cookie preferences</h3>
              <p className="text-sm text-gray-600 mt-1">Toggle which cookies you allow on this site.</p>

              <CookieToggleList onSave={saveFromModal} onCancel={() => setShowModal(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Small inner component: toggles
function CookieToggleList({ onSave, onCancel }) {
  const stored = readConsent() || defaultConsent;
  const [state, setState] = useState({
    analytics: stored.analytics || false,
    marketing: stored.marketing || false,
  });

  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Essential cookies</h4>
              <p className="text-sm text-gray-600">Required for site functionality (always on)</p>
            </div>
            <div className="text-sm text-gray-500">Always on</div>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Analytics cookies</h4>
              <p className="text-sm text-gray-600">Help us understand site usage.</p>
            </div>
            <label className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                checked={state.analytics}
                onChange={(e) => setState((s) => ({ ...s, analytics: e.target.checked }))}
                className="w-4 h-4"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Marketing cookies</h4>
              <p className="text-sm text-gray-600">Used to show relevant ads and offers.</p>
            </div>
            <label className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                checked={state.marketing}
                onChange={(e) => setState((s) => ({ ...s, marketing: e.target.checked }))}
                className="w-4 h-4"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button onClick={() => onCancel()} className="px-4 py-2 rounded-md border bg-white">
          Cancel
        </button>
        <button
          onClick={() => onSave(state)}
          className="px-4 py-2 rounded-md bg-gradient-to-r from-[var(--pink)] to-[var(--blue)] text-white"
        >
          Save preferences
        </button>
      </div>
    </div>
  );
}
