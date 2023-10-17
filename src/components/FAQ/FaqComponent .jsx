import React, { useState } from "react";
import "./faq.css";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How the training will be Conducted?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true
    },
    {
      question: "Do we need any software or hardware for the sessions?",
      answer: "You! The viewer!",
      open: false
    },
    {
      question:
        "What are the prerequisites of the program?",
      answer: "This many!",
      open: false
    },
    {
      question: "Do we need any software or hardware for the sessions?",
      answer: "You! The viewer!",
      open: false
    },
    {
      question: "Which month can I start the program?",
      answer: "You! The viewer!",
      open: false
    },
    {
      question: "After enrolling can I change the month for my program due to any reasons?",
      answer: "You! The viewer!",
      open: false
    }
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <section id='feature' className='section_gap'>
      <div className='container'>
        <div className="main_title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>Replenish man have thing gathering lights yielding shall you</p>
        </div>
      </div>

      <div className="App">
        <div className="faqs">
          {faqs.map((faq, index) => (
            <div
              className={"faq " + (faq.open ? "open" : "")}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{faq.question}</div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
