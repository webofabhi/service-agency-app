import React from "react";
import { FAQ_DESCRIPTION, FAQS } from "../constants";

const Faq = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }
  return (
    <section className="mt-20" id="faq">
        <div className="container mx-auto  flex flex-col gap-12 p-8 lg:flex-row">
         <div className="lg:w-1/3">
         <h2 className="mb-8 text-4xl font-semibold tracking-tighter">
            FAQ?
        </h2>
        <p className="mb-12 text-lg">{FAQ_DESCRIPTION}</p>
         </div>
       <div className="lg:w-2/3">
        {FAQS.map((faq, index) => (
            <div key={index} className="mb-4 border-b pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-2xl font-semibold">{faq.question}</h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <p className="text-lg">{faq.answer}</p>
            )}
          </div>
        ))}
       </div>
        </div>

    </section>
  )

}

export default Faq;
