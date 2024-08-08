import React, { useState, useEffect, useCallback } from "react";
import ArrowRightIcon from "../../../assets/Icons/icon-arrow-left.png";
import ArrowLeftIcon from "../../../assets/Icons/icon-arrow-right.png"; // Assuming you have this icon

const Slideshow = ({ slides = [], interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;

    const timer = setInterval(nextSlide, interval);

    return () => clearInterval(timer);
  }, [nextSlide, interval, slides.length, isPaused]);

  if (slides.length === 0) {
    return <div className="text-center p-4">No slides to display</div>;
  }

  return (
    <div
      className="relative w-full max-w-[86vw] mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex h-[50vh]">
          <div className="w-1/2">
            <div className="w-[80%] h-[90%] flex justify-center items-center top-[20px] relative left-[30px] bg-gray-100">
              <img
                src={`/api/placeholder/800/600?text=Slide+${
                  currentSlide + 1
                }&fontsize=32&bg=${slides[currentSlide].bgColor}`}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-gray-600 mb-6">
                {slides[currentSlide].description}
              </p>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors self-start">
              {slides[currentSlide].buttonText}
            </button>
          </div>
        </div>
      </div>
      {slides.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentSlide ? "bg-purple-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
          >
            <img src={ArrowLeftIcon} alt="Previous" className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 p-2  rounded-full shadow-md"
          >
            <img src={ArrowRightIcon} alt="Next" className="w-8 h-8" />
          </button>
        </>
      )}
    </div>
  );
};

const slides = [
  {
    title:
      "Scale Your Outreach Endlessly With Unlimited Accounts And Reach New Heights Effortlessly.",
    description:
      "With a single subscription, you can connect unlimited email accounts and send thousands of emails daily without risking your sender reputation. Set up your campaigns, integrate your sending accounts, and watch your leads transform into customers!",
    buttonText: "Start your free trial",
    bgColor: "4338ca", // Indigo
  },
  {
    title: "Automate Your Marketing Campaigns",
    description:
      "With a single subscription, you can connect unlimited email accounts and send thousands of emails daily without risking your sender reputation. Set up your campaigns, integrate your sending accounts, and watch your leads transform into customers!",
    buttonText: "Learn more",
    bgColor: "059669", // Emerald
  },
  {
    title: "Personalize at Scale",
    description:
      "With a single subscription, you can connect unlimited email accounts and send thousands of emails daily without risking your sender reputation. Set up your campaigns, integrate your sending accounts, and watch your leads transform into customers!",
    buttonText: "See how it works",
    bgColor: "b91c1c", // Red
  },
  {
    title: "Comprehensive Analytics",
    description:
      "With a single subscription, you can connect unlimited email accounts and send thousands of emails daily without risking your sender reputation. Set up your campaigns, integrate your sending accounts, and watch your leads transform into customers!",
    buttonText: "Explore analytics",
    bgColor: "c026d3", // Fuchsia
  },
];

const App = () => (
  <div className="p-4">
    <Slideshow slides={slides} interval={5000} />
  </div>
);

export default App;