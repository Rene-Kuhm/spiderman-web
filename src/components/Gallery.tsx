import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface GalleryImage {
  id: number;
  title: string;
  category: 'movie' | 'game' | 'comic' | 'art';
  src: string;
  thumbnail: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: 'Spider-Man No Way Home',
    category: 'movie',
    src: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&q=80',
  },
  {
    id: 2,
    title: 'Miles Morales - Spider-Man',
    category: 'game',
    src: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&q=80',
  },
  {
    id: 3,
    title: 'Spider-Man Into the Spider-Verse',
    category: 'movie',
    src: 'https://images.unsplash.com/photo-1624542913669-41180d7fc2e1?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1624542913669-41180d7fc2e1?w=400&q=80',
  },
  {
    id: 4,
    title: 'Spider-Man 2099',
    category: 'comic',
    src: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&q=80',
  },
  {
    id: 5,
    title: 'Black Suit Spider-Man',
    category: 'art',
    src: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3?w=400&q=80',
  },
  {
    id: 6,
    title: 'Spider-Man PS4',
    category: 'game',
    src: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=400&q=80',
  },
  {
    id: 7,
    title: 'Spider-Woman Gwen Stacy',
    category: 'art',
    src: 'https://images.unsplash.com/photo-1614726365723-49fa695f5039?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1614726365723-49fa695f5039?w=400&q=80',
  },
  {
    id: 8,
    title: 'Classic Spider-Man',
    category: 'comic',
    src: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=400&q=80',
  },
  {
    id: 9,
    title: 'Iron Spider - Avengers',
    category: 'movie',
    src: 'https://images.unsplash.com/photo-1618962882571-437a3cc840c5?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1618962882571-437a3cc840c5?w=400&q=80',
  },
  {
    id: 10,
    title: 'Amazing Spider-Man',
    category: 'movie',
    src: 'https://images.unsplash.com/photo-1585307590546-6c6dfd852706?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1585307590546-6c6dfd852706?w=400&q=80',
  },
  {
    id: 11,
    title: 'Spider-Man Cartoon',
    category: 'art',
    src: 'https://images.unsplash.com/photo-1560932669-5e3254e85a18?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1560932669-5e3254e85a18?w=400&q=80',
  },
  {
    id: 12,
    title: 'Spider-Verse Multiverse',
    category: 'movie',
    src: 'https://images.unsplash.com/photo-1621360841013-c7689e079637?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1621360841013-c7689e079637?w=400&q=80',
  },
];

const categoryColors: Record<GalleryImage['category'], string> = {
  movie: '#E63946',
  game: '#00B4D8',
  comic: '#FFD700',
  art: '#FF69B4',
};

const categoryIcons: Record<GalleryImage['category'], string> = {
  movie: '🎬',
  game: '🎮',
  comic: '📖',
  art: '🎨',
};

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section className="gallery" ref={ref}>
      <div className="gallery-bg" />
      
      <div className="container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gradient-red">
            Spider-Man Gallery
          </h2>
          <p>
            Stunning artwork and moments from the Spider-Verse
          </p>
        </motion.div>

        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                y: -5,
              }}
              onClick={() => openLightbox(index)}
              style={{ '--category-color': categoryColors[image.category] } as React.CSSProperties}
            >
              <div className="gallery-image-wrapper">
                <img 
                  src={image.thumbnail} 
                  alt={image.title}
                  className="gallery-thumbnail"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="gallery-zoom-icon">🔍</span>
                </div>
              </div>
              
              <div className="gallery-info">
                <span 
                  className="gallery-category"
                  style={{ color: categoryColors[image.category] }}
                >
                  {categoryIcons[image.category]} {image.category}
                </span>
                <h3 className="gallery-title">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={galleryImages.map(img => ({
          src: img.src,
          title: img.title,
        }))}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
        }}
        carousel={{ preload: 2 }}
        animation={{ fade: 300, swipe: 300 }}
        controller={{ closeOnBackdropClick: true }}
      />

      <style>{`
        .gallery {
          position: relative;
          padding: var(--space-5xl) 0;
          background: var(--marvel-black);
          overflow: hidden;
        }

        .gallery-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(230, 57, 70, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(0, 180, 216, 0.08) 0%, transparent 40%);
          pointer-events: none;
        }

        .gallery-header {
          text-align: center;
          margin-bottom: var(--space-4xl);
        }

        .gallery-header h2 {
          margin-bottom: var(--space-md);
        }

        .gallery-header p {
          color: var(--marvel-gray);
          font-size: clamp(1rem, 2vw, 1.25rem);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .gallery-item {
          background: #0d0d0d;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .gallery-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--category-color, #E63946);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover::before {
          opacity: 1;
        }

        .gallery-item:hover {
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }

        .gallery-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .gallery-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-item:hover .gallery-thumbnail {
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-zoom-icon {
          font-size: 2.5rem;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
        }

        .gallery-info {
          padding: 16px;
        }

        .gallery-category {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .gallery-title {
          font-size: 1.1rem;
          color: white;
          margin-top: 6px;
          font-family: var(--font-display);
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .gallery-image-wrapper {
            height: 150px;
          }

          .gallery-title {
            font-size: 0.95rem;
          }

          .gallery-info {
            padding: 12px;
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .gallery-image-wrapper {
            height: 130px;
          }
        }
      `}</style>
    </section>
  );
};
