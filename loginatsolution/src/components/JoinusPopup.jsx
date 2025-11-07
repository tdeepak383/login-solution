import React, { useEffect } from "react";
import JoinUsForm from "./JoinUsForm";

function JoinusPopup({ onClose }) {
  // prevent background scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") onClose();
  };

  return (
    <div
      id="overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity duration-300"
    >
      <div
        className="relative bg-white rounded-xl shadow-2xl w-[95%] md:w-[80%] lg:w-[60%] max-h-[90vh] overflow-y-auto transform scale-100 animate-fadeIn"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-5xl text-gray-500 hover:text-[var(--purple)]"
        >
          ×
        </button>

        <div className="p-6 md:p-10">

          <JoinUsForm />
        </div>
      </div>
    </div>
  );
}

export default JoinusPopup;
