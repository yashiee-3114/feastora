import './Approach.css';

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We start by understanding your goals, audience, and vision — whether it\'s a corporate milestone or a personal celebration.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'A clear timeline, budget framework, and logistics plan take shape, with you involved at every decision point.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Concepts, layouts, and creative direction come together into a cohesive experience tailored to your event.',
  },
  {
    number: '04',
    title: 'Execute',
    description:
      'On the day, coordinated execution and attentive problem-solving keep everything running as planned.',
  },
];

function Approach() {
  return (
    <section id="approach" className="approach">
      <div className="approach__header">
        <span className="approach__eyebrow">Our process</span>
        <h2 className="approach__title">How we get there.</h2>
      </div>

      <ol className="approach__list">
        {STEPS.map((step) => (
          <li key={step.number} className="approach__step">
            <span className="approach__step-number">{step.number}</span>
            <div className="approach__step-body">
              <h3 className="approach__step-title">{step.title}</h3>
              <p className="approach__step-description">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Approach;