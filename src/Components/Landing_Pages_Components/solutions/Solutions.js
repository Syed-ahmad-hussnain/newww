import React from "react";
import iconLead from "../../../assets/Icons/icon-lead.png";
import iconMarketing from "../../../assets/Icons/icon-marketing.png";
import iconSales from "../../../assets/Icons/icon-sales.png";
import iconRecruitment from "../../../assets/Icons/icon-recruiters.png";
import iconarrow from "../../../assets/Icons/icon-arrow-left.png";

const SolutionCard = ({ imageUrl, title, description }) => (
  <div className="relative right-[30px] ">
    <div className="flex flex-col h-[540px] w-[calc(100%+25px)] p-8 bg-white rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
      <div className="flex flex-col items-center flex-grow">
        <img src={imageUrl} alt={title} className="w-40 h-40 mb-10" />
        <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>
        <p className="text-lg text-gray-600 mb-8 text-center">{description}</p>
      </div>
      <div className="self-end">
        <a
          href="#"
          className="flex text-gradient items-center text-xl font-[600] hover:underline"
        >
          Learn More
          <img src={iconarrow} alt="arrow" className="w-10 h-10" />
        </a>
      </div>
    </div>
  </div>
);

const Solutions = () => {
  const solutions = [
    {
      imageUrl: iconLead,
      title: "Lead Generation Firms",
      description:
        "Unlock Your Lead Gen Agency's Potential with the Best Cold Email Outreach Tool.",
    },
    {
      imageUrl: iconMarketing,
      title: "Marketing Consultants",
      description:
        "Empowering Marketing Agencies to Achieve Success through Multi-Channel Outreach.",
    },
    {
      imageUrl: iconSales,
      title: "Sales Managers",
      description:
        "Primary Inbox AI enables sales leaders to boost conversion rates and turn prospects into loyal customers.",
    },
    {
      imageUrl: iconRecruitment,
      title: "Recruitment Experts",
      description:
        "Primary Inbox enables recruiters to maximize cold email lead generation with streamlined communication.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-20">
        <span className="text-purple-600">Comprehensive Solutions </span>
        for a Wide
        <br />
        Range of Industries and Roles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
        {solutions.map((solution, index) => (
          <SolutionCard key={index} {...solution} />
        ))}
      </div>
    </div>
  );
};

export default Solutions;
