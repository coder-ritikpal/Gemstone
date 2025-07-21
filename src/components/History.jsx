import React, { useState } from "react";

const faqs = [
  {
    title: "What are Gemstones?",
    content:
      "Gemstones are naturally occurring minerals or organic materials that are cut and polished to be used in jewelry and other decorative applications. They are valued for their rarity, beauty, and durability.",
  },
  {
    title: "What is the history of gemstones?",
    content:
      "Gemstones have dazzling brilliance and unique shape. They were found and unearthed by early human beings. It is believed that gemstones possess healing powers and were used to protect from ghosts and evil. They are classified as precious or semi-precious based on rarity and value.",
  },
  {
    title: "Why should you wear gemstones?",
    content:
      "Many believe gemstones hold spiritual or healing powers based on your zodiac sign or birth month. They are also used in astrology and traditional medicine, apart from their use in fashion and status symbol.",
  },
  {
    title: "Why is buying gemstones online feasible?",
    content:
      "Online platforms offer a wide range of certified gemstones with transparent pricing and return policies. It saves time, offers variety, and often comes with quality guarantees.",
  },
];

const History = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-black text-white min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 pb-4">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left flex justify-between items-center focus:outline-none"
            >
              <h2 className="text-lg md:text-xl font-semibold text-yellow-400">
                {faq.title}
              </h2>
              <span className="text-yellow-400 text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`transition-all duration-500 overflow-hidden ${
                activeIndex === index ? "max-h-[500px] mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                {faq.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
