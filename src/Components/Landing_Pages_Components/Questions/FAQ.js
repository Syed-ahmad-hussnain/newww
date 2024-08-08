import React, { useState } from 'react';
import iconup from '../../../assets/Icons/icon-chevron.png';
import icondown from '../../../assets/Icons/icon-arrow.png';

const QAAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const qaData = [
    {
      question: "What is Voltic's email outreach software?",
      answer: "Voltic's email outreach tool helps businesses manage and automate their email campaigns. With features like unlimited mailboxes, automated email warm-ups, and a user-friendly dashboard, it simplifies the process of running and optimizing email outreach."
    },
    {
        question: "How can Voltic improve my email campaigns?",
        answer: "Voltic enhances your email campaigns by offering automation for email sequences, personalization features, and comprehensive analytics to track performance and optimize strategies."
      },
      {
        question: "What benefits do unlimited mailboxes provide?",
        answer: "Unlimited mailboxes allow you to manage multiple email accounts simultaneously without extra costs, making it easier to scale your outreach efforts."
      },
      {
        question: "How does Voltic automate email processes?",
        answer: "Voltic automates email processes with features like email scheduling, automatic follow-ups, and dynamic personalization fields, ensuring consistent and efficient outreach."
      },
      {
        question: "What is meant by a user-friendly dashboard?",
        answer: "Voltic's dashboard provides an intuitive interface where you can easily manage all your email campaigns, monitor performance, and make adjustments as needed."
      },
      {
        question: "How does Voltic help avoid spam folders?",
        answer: "Voltic employs advanced deliverability tools including spam word checks, email authentication protocols like DKIM, SPF, and DMARC, and ongoing monitoring to keep your emails out of spam folders."
      },

  ];

  return (
    <div className="w-full max-w-[1550px] mx-auto p-4 space-y-4">
      {qaData.map((item, index) => (
        <div 
          key={index} 
          className="relative rounded-2xl overflow-hidden"
          style={{
            boxShadow: '0px 4px 4px -4px rgba(184, 113, 254, 0.05), 0px 16px 32px -4px rgba(104, 79, 255, 0.1)'
          }}
        >
          <div className="absolute inset-0 bg-violet-500"></div>
          <div className="relative m-[2px] bg-white rounded-xl overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-medium focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-xl">{item.question}</span>
              <img 
                src={openIndex === index ? icondown : iconup}
                alt={openIndex === index ? "Collapse" : "Expand"}
                className="w-14 h-14"
              />
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50">
                <p className="text-lg text-gray-600">{item.answer}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QAAccordion;