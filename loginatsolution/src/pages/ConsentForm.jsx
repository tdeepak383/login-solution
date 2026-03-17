import { useState } from "react";

const ConsentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.phone.trim() || !/^[\d\s\+\-\(\)]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
    setApiError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setApiError("");

    try {
      const response = await fetch("http://localhost:5000/api/consentform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      if (!response.ok) throw new Error("Something went wrong. Please try again.");

      setIsSuccess(true);
    } catch (err) {
      setApiError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", phone: "", email: "" });
    setErrors({});
    setApiError("");
    setIsSuccess(false);
  };

  const inputClass = (field) =>
    `w-full h-[38px] px-3 text-sm rounded-lg bg-gray-50 outline-none border ${
      errors[field] ? "border-red-500" : "border-gray-300"
    }`;

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="bg-white border rounded-xl p-6 text-center">

          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="text-green-600" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h3 className="text-lg font-medium mb-2">Request submitted!</h3>

          <p className="text-sm text-gray-600">
            Thanks for reaching out. We'll contact you soon.
          </p>

          <button
            onClick={handleReset}
            className="mt-5 px-6 py-2 bg-[var(--purple)] text-white rounded-lg hover:opacity-90"
          >
            Submit another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <div className="bg-white border rounded-xl p-6">

        <h2 className="text-lg font-medium mb-1">Get in touch with us</h2>
        <p className="text-sm text-gray-600 mb-5">
          Fill in your details and we’ll reach out shortly.
        </p>

        <form onSubmit={handleSubmit} noValidate>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className={inputClass("name")}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={inputClass("phone")}
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email <span className="text-xs text-gray-400">(optional)</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className={inputClass("email")}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-5">
            <p className="text-xs text-gray-500 mb-3">By submitting this form, you agree to be contacted:</p>
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 flex-shrink-0 rounded cursor-pointer"
                style={{ accentColor: "var(--purple)" }}
              />
              <span className="text-xs text-gray-700 leading-relaxed">
                I agree to be contacted via phone, SMS, or email by{" "}
                <strong>Your Company</strong> regarding my inquiry. I understand I can opt out at any time.
              </span>
            </label>
            {errors.consent && <p className="text-xs text-red-500 mt-2">{errors.consent}</p>}
          </div>

          {/* API Error */}
          {apiError && (
            <p className="text-sm text-red-500 mb-3">{apiError}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-10 bg-[var(--purple)] text-white rounded-lg hover:opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Request a call"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default ConsentForm;