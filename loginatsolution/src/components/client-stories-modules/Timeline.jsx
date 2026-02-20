import React, { useState } from "react";
import icon1 from '../../assets/client-stories/icons/awareness.svg';
import icon2 from '../../assets/client-stories/icons/Campaign.svg';
import icon3 from '../../assets/client-stories/icons/event.svg';
import icon4 from '../../assets/client-stories/icons/learning.svg';
import icon5 from '../../assets/client-stories/icons/culture.svg';
import icon6 from '../../assets/client-stories/icons/onboarding.svg';
import icon7 from '../../assets/client-stories/icons/experience.svg';
import icon8 from '../../assets/client-stories/icons/storytelling.svg';
import icon9 from '../../assets/client-stories/icons/experiential.svg';
import icon10 from '../../assets/client-stories/icons/presentation.svg';
import icon11 from '../../assets/client-stories/icons/bid-presentation.svg';
import icon12 from '../../assets/client-stories/icons/deal_conv.svg';

const journeyData = {
  employee: [
    {"title": "Awareness of Programs", "icon": icon1},
    {"title": "Campaign Engagement", "icon": icon2},
    {"title": "Event Participation", "icon": icon3},
    {"title": "Learning & Development", "icon": icon4},
    {"title": "Culture & Inclusion", "icon": icon5},
    {"title": "Onboarding Experience", "icon": icon6},
  ],
  client: [
    {"title": "Client Visit Experience", "icon": icon7},
    {"title": "Capability Storytelling", "icon": icon8},
    {"title": "Experiential Zones", "icon": icon9},
    {"title": "Leadership Presentations", "icon": icon10},
    {"title": "Bid Presentations", "icon": icon11},
    {"title": "Deal Conversion", "icon": icon12},
  ],
};

export default function Timeline() {
  const [activeTab, setActiveTab] = useState("employee");
  const [activeStep, setActiveStep] = useState(0);

  const currentSteps = journeyData[activeTab];

  return (
    <div className="w-full max-w-6xl mx-auto py-16">
      
      {/* Tabs */}
      <div className="flex justify-center lg:w-[46%] mx-auto bg-[var(--purple)] p-1 rounded-full gap-10 mb-8">
        <button
          onClick={() => {
            setActiveTab("employee");
            setActiveStep(0);
          }}
          className={`px-6 py-3 max-sm:text-sm font-semibold ${
            activeTab === "employee"
              ? "text-[var(--purple)] bg-white border border-[var(--purple)] rounded-full"
              : "text-white "
          }`}
        >
          Employee Journey Flow
        </button>

        <button
          onClick={() => {
            setActiveTab("client");
            setActiveStep(0);
          }}
          className={`px-6 py-3 max-sm:text-sm font-semibold ${
            activeTab === "client"
              ? "text-[var(--purple)] bg-white border border-[var(--purple)] rounded-full"
              : "text-white"
          }`}
        >
          Client Journey Flow
        </button>
      </div>

      <div className="relative mt-20">
        {/* Line */}
        <div className="absolute top-9 hidden lg:block left-20 w-[85%] mx-auto h-[2px] bg-gray-200"></div>

        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-5 relative">
          {currentSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:-mt-2 transition-all duration-200 min-w-[150px] cursor-pointer"
              onClick={() => setActiveStep(index)}
            >
              {/* Circle */}
              <div className="relative">
                <div
                className={`w-20 h-20 p-4 flex items-center justify-center rounded-full z-10 transition
                 bg-[var(--purple)]`}
                >
                  <img
                  src={step.icon}
                  alt={step.title}
                  className="invert"
                />
                </div>
                <div className="w-8 h-8 absolute border border-[var(--purple)] -right-4 top-6 rounded-full bg-white z-10 flex items-center justify-center">
                  {index+1}
                </div>
              </div>
              
              {/* Label */}
              <p className={`mt-3 text-lg text-center font-semibold`}>
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
