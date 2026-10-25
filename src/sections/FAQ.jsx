import './FAQ.css';

const FAQS = [
  {
    question: 'How do I get started?',
    answer:
      'Fill out the inquiry form below with your event details. We\'ll follow up to schedule an initial consultation to discuss your vision and requirements.',
  },
  {
    question: 'What information should I share upfront?',
    answer:
      'Your event type, approximate date, location, and guest count help us the most. A budget range is optional but speeds up the planning conversation.',
  },
  {
    question: 'How far in advance should I plan?',
    answer:
      'This depends on the scale of your event — larger corporate events and weddings generally benefit from longer lead times. We\'ll advise on realistic timelines during consultation.',
  },
  {
    question: 'How do I get a quotation?',
    answer:
      'Quotations are prepared after an initial consultation, based on your specific event scope. We don\'t publish fixed pricing since every event differs significantly.',
  },
];

function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="faq__header">
        <span className="faq__eyebrow">FAQ</span>
        <h2 className="faq__title">Common questions.</h2>
      </div>

      <div className="faq__list">
        {FAQS.map((item) => (
          <details key={item.question} className="faq__item">
            <summary className="faq__question">
              {item.question}
              <span className="faq__icon" aria-hidden="true">+</span>
            </summary>
            <p className="faq__answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;