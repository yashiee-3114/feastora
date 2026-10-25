import './WhyFeastora.css';

const VALUES = [
  {
    title: 'Thoughtful planning',
    description:
      'Every detail is considered in advance — timelines, logistics, and contingencies — so nothing is left to chance.',
  },
  {
    title: 'Personalized experiences',
    description:
      'No two events are the same. We shape each plan around your specific goals, audience, and vision.',
  },
  {
    title: 'Organized execution',
    description:
      'Clear ownership and coordination on the day mean your event runs the way it was designed to.',
  },
  {
    title: 'Clear communication',
    description:
      'You stay informed at every stage — no surprises, no guesswork about where things stand.',
  },
];

function WhyFeastora() {
  return (
    <section className="why">
      <div className="why__header">
        <span className="why__eyebrow">Why Feastora</span>
        <h2 className="why__title">What you can expect from us.</h2>
      </div>

      <div className="why__grid">
        {VALUES.map((value) => (
          <div key={value.title} className="why__item">
            <h3 className="why__item-title">{value.title}</h3>
            <p className="why__item-description">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyFeastora;