import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I find the right lawyer on AdvocateAssam?",
      answer:
        "You can browse lawyers by speciality, experience, and consultation fees. Open a lawyer's profile to view their professional details and choose a suitable appointment slot.",
    },
    {
      question: "Are the lawyers verified?",
      answer:
        "Yes. Lawyers registered on AdvocateAssam go through a verification process where their professional and supporting documents are reviewed before approval.",
    },
    {
      question: "How do I book a consultation?",
      answer:
        "Select a lawyer, view their profile and available slots, choose a convenient date and time, and complete the booking process.",
    },
    {
      question: "Can I book a consultation online?",
      answer:
        "Yes. AdvocateAssam allows users to book consultations online through the available appointment slots.",
    },
    {
      question: "How much does a lawyer consultation cost?",
      answer:
        "Consultation fees vary depending on the lawyer. You can view the applicable consultation fee on the lawyer's profile before booking.",
    },
    {
      question: "Can I cancel my appointment?",
      answer:
        "Yes. Appointments can be cancelled according to the platform's appointment and cancellation policy.",
    },
    {
      question: "Is online payment secure?",
      answer:
        "Yes. Online payments are processed through a secure payment gateway, helping protect your payment information during the transaction.",
    },
    {
      question: "How can I become a lawyer on AdvocateAssam?",
      answer:
        "Legal professionals can apply through the 'Apply as a Lawyer' option. You will need to provide your professional details and required verification documents. After review and approval, your lawyer profile can be activated.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-[#FAFBFF] overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#D4A017]/5 rounded-full blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F1F5FF] border border-[#DCE5FF]">
            <span className="text-[#D4A017] font-bold">
              ?
            </span>

            <span className="text-xs font-semibold uppercase tracking-widest text-[#0b2149]">
              Help Center
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b2149] mt-5">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-7">
            Everything you need to know about finding lawyers, booking
            consultations, payments, and using AdvocateAssam.
          </p>

        </div>


        {/* FAQ List */}
        <div className="space-y-4">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  bg-white
                  rounded-2xl
                  border
                  transition-all
                  duration-300
                  overflow-hidden
                  ${
                    isOpen
                      ? "border-[#D4A017]/40 shadow-lg shadow-[#0b2149]/5"
                      : "border-gray-100 shadow-sm hover:shadow-md"
                  }
                `}
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-5 text-left px-6 py-5 sm:px-7 sm:py-6"
                >

                  <div className="flex items-center gap-4">

                    {/* Number */}
                    <span
                      className={`
                        hidden sm:flex
                        w-9
                        h-9
                        rounded-xl
                        items-center
                        justify-center
                        text-xs
                        font-bold
                        flex-shrink-0
                        transition-all
                        ${
                          isOpen
                            ? "bg-[#0b2149] text-[#D4A017]"
                            : "bg-[#F1F5FF] text-[#0b2149]"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`
                        font-semibold
                        text-sm
                        sm:text-base
                        ${
                          isOpen
                            ? "text-[#0b2149]"
                            : "text-gray-800"
                        }
                      `}
                    >
                      {faq.question}
                    </span>

                  </div>


                  {/* Plus / Minus */}
                  <span
                    className={`
                      flex-shrink-0
                      w-9
                      h-9
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-xl
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "bg-[#0b2149] text-[#D4A017] rotate-180"
                          : "bg-[#F5F7FB] text-[#0b2149]"
                      }
                    `}
                  >
                    {isOpen ? "−" : "+"}
                  </span>

                </button>


                {/* Answer */}
                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >

                  <div className="overflow-hidden">

                    <div className="px-6 sm:px-7 pb-6 pl-6 sm:pl-[4.8rem]">

                      <div className="h-px bg-gray-100 mb-5" />

                      <p className="text-sm text-gray-500 leading-7 max-w-3xl">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>


        {/* Bottom CTA */}
        <div className="text-center mt-12">

          <p className="text-sm text-gray-500">
            Still have questions?
          </p>

          <button
            onClick={() => window.scrollTo(0, 0)}
            className="
              mt-3
              inline-flex
              items-center
              gap-2
              text-[#0b2149]
              font-semibold
              text-sm
              hover:text-[#D4A017]
              transition-colors
            "
          >
            Explore AdvocateAssam
            <span>→</span>
          </button>

        </div>

      </div>

    </section>
  );
};

export default FAQ;