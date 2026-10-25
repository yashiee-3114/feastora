import corporateImage from '../assets/images/corporate.jpg';
import socialImage from '../assets/images/social.jpg';
import './Services.css';

const CORPORATE_ITEMS = [
  'Conferences & summits',
  'Product launches',
  'Brand activations',
  'Corporate gatherings',
];

const SOCIAL_ITEMS = [
  'Weddings',
  'Birthdays',
  'Anniversaries',
  'Private celebrations',
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="services__header">
        <span className="services__eyebrow">What we plan</span>
        <h2 className="services__title">Two worlds. One standard of care.</h2>
        <p className="services__intro">
          Whether it's a product launch or a wedding, every event gets the
          same disciplined planning and creative attention.
        </p>
      </div>

      <div className="services__grid">
        <article className="services__card services__card--corporate">
          <div className="services__card-image-wrap">
            <img
              src={corporateImage}
              alt="Corporate conference stage"
              className="services__card-image"
            />
          </div>
          <div className="services__card-body">
            <span className="services__card-label">Corporate</span>
            <h3 className="services__card-title">
              Events that move
              <br />
              business forward.
            </h3>
            <ul className="services__list">
              {CORPORATE_ITEMS.map((item) => (
                <li key={item} className="services__list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="services__card services__card--social">
          <div className="services__card-image-wrap">
            <img
              src={socialImage}
              alt="Elegant wedding reception with gold decor"
              className="services__card-image"
            />
          </div>
          <div className="services__card-body">
            <span className="services__card-label">Social</span>
            <h3 className="services__card-title">
              Celebrations worth
              <br />
              remembering.
            </h3>
            <ul className="services__list">
              {SOCIAL_ITEMS.map((item) => (
                <li key={item} className="services__list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>

      <p className="services__note">
        Proposed service categories — availability confirmed during your
        initial consultation.
      </p>
    </section>
  );
}

export default Services;