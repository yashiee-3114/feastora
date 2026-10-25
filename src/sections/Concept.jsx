import './Concept.css';

function Concept() {
  return (
    <section className="concept">
      <div className="concept__header">
        <span className="concept__eyebrow">Design concepts</span>
        <h2 className="concept__title">A glimpse of our creative range.</h2>
        <p className="concept__disclaimer">
          These are original design concepts illustrating our visual
          approach — not photography from completed client events.
        </p>
      </div>

      <div className="concept__grid">
        <div className="concept__tile concept__tile--cobalt">
          <span className="concept__tile-label">Stage &amp; lighting</span>
          <div className="concept__tile-graphic concept__tile-graphic--beams" aria-hidden="true">
            <span className="concept__beam" />
            <span className="concept__beam" />
            <span className="concept__beam" />
          </div>
        </div>

        <div className="concept__tile concept__tile--coral">
          <span className="concept__tile-label">Invitation &amp; print</span>
          <div className="concept__tile-graphic concept__tile-graphic--fold" aria-hidden="true">
            <span className="concept__fold-line" />
            <span className="concept__fold-line" />
          </div>
        </div>

        <div className="concept__tile concept__tile--butter">
          <span className="concept__tile-label">Table &amp; layout</span>
          <div className="concept__tile-graphic concept__tile-graphic--grid" aria-hidden="true">
            <span className="concept__grid-dot" />
            <span className="concept__grid-dot" />
            <span className="concept__grid-dot" />
            <span className="concept__grid-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Concept;