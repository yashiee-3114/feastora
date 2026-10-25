import { useState, useEffect, useCallback } from 'react';
import gallery1 from '../assets/images/gallery/gallery-1.jpg';
import gallery2 from '../assets/images/gallery/gallery-2.jpg';
import gallery3 from '../assets/images/gallery/gallery-3.jpg';
import gallery4 from '../assets/images/gallery/gallery-4.jpg';
import gallery5 from '../assets/images/gallery/gallery-5.jpg';
import gallery6 from '../assets/images/gallery/gallery-6.jpg';
import './Gallery.css';

const CATEGORIES = ['All', 'Corporate', 'Weddings', 'Celebrations', 'Design Details'];

const IMAGES = [
  { id: 1, src: gallery1, category: 'Corporate', caption: 'Stage & lighting concept' },
  { id: 2, src: gallery2, category: 'Corporate', caption: 'Product launch staging' },
  { id: 3, src: gallery3, category: 'Weddings', caption: 'Reception styling' },
  { id: 4, src: gallery4, category: 'Weddings', caption: 'Table setting detail' },
  { id: 5, src: gallery5, category: 'Celebrations', caption: 'Private celebration setup' },
  { id: 6, src: gallery6, category: 'Design Details', caption: 'Decor detail' },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? IMAGES
      : IMAGES.filter((img) => img.category === activeCategory);

  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  useEffect(() => {
    if (!lightboxImage) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') closeLightbox();
    }

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxImage, closeLightbox]);

  return (
    <section className="gallery">
      <div className="gallery__header">
        <span className="gallery__eyebrow">Design concepts</span>
        <h2 className="gallery__title">A glimpse of our creative range.</h2>
        <p className="gallery__disclaimer">
          These are original design concepts illustrating our visual
          approach — not photography from completed client events.
        </p>
      </div>

      <div className="gallery__filters" role="group" aria-label="Filter gallery by category">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            className={`gallery__filter ${activeCategory === category ? 'gallery__filter--active' : ''}`}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery__grid">
        {filtered.map((img) => (
          <button
            key={img.id}
            className="gallery__item"
            onClick={() => setLightboxImage(img)}
            aria-label={`View larger image: ${img.caption}`}
          >
            <img src={img.src} alt={img.caption} className="gallery__image" loading="lazy" />
            <span className="gallery__item-caption">{img.caption}</span>
          </button>
        ))}
      </div>

      {lightboxImage && (
        <div
          className="gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.caption}
          onClick={closeLightbox}
        >
          <button
            className="gallery__lightbox-close"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            &times;
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.caption}
            className="gallery__lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="gallery__lightbox-caption">{lightboxImage.caption}</p>
        </div>
      )}
    </section>
  );
}

export default Gallery;