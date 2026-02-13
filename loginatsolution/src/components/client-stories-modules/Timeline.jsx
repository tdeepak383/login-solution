import React, { useState } from "react";

const journeyData = {
  employee: [
    "Awareness of Programs",
    "Campaign Engagement",
    "Event Participation",
    "Learning & Development",
    "Culture & Inclusion",
    "Onboarding Experience",
  ],
  client: [
    "Client Visit Experience",
    "Capability Storytelling",
    "Experiential Zones",
    "Leadership Presentations",
    "Bid Presentations",
    "Deal Conversion",
  ],
};

export default function Timeline() {
  const [activeTab, setActiveTab] = useState("employee");
  const [activeStep, setActiveStep] = useState(0);

  const currentSteps = journeyData[activeTab];

  return (
    <div className="w-full max-w-6xl mx-auto py-16">
      
      {/* Tabs */}
      <div className="flex justify-center gap-10 mb-8">
        <button
          onClick={() => {
            setActiveTab("employee");
            setActiveStep(0);
          }}
          className={`px-6 py-3 font-semibold transition ${
            activeTab === "employee"
              ? "bg-[var(--purple)] text-white rounded-xl"
              : "text-gray-500 hover:text-[var(--purple)] border-b"
          }`}
        >
          Employee Journey Flow
        </button>

        <button
          onClick={() => {
            setActiveTab("client");
            setActiveStep(0);
          }}
          className={`px-6 py-3 font-semibold transition ${
            activeTab === "client"
              ? "bg-[var(--purple)] text-white rounded-xl"
              : "text-gray-500 hover:text-[var(--purple)] border-b"
          }`}
        >
          Client Journey Flow
        </button>
      </div>

      <div className="relative mt-20">
        {/* Line */}
        <div className="absolute top-5 left-0 w-full h-1 bg-gray-200"></div>

        <div className="flex justify-between items-center relative">
          {currentSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:-mt-2 transition-all duration-200 min-w-[150px] cursor-pointer"
              onClick={() => setActiveStep(index)}
            >
              {/* Circle */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border z-10 transition
                 bg-white border-[var(--purple)] text-[var(--purple)] font-semibold`}
              >
                {index + 1}
              </div>

              {/* Label */}
              <p className={`mt-3 text-sm text-center text-[var(--purple)] font-semibold`}>
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
