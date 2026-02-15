import { motion, type Variants } from 'framer-motion';

interface SpiderCharacter {
  id: number;
  name: string;
  alias: string;
  description: string;
  color: string;
}

const characters: SpiderCharacter[] = [
  {
    id: 1,
    name: 'Peter Parker',
    alias: 'Spider-Man',
    description: 'The original Spider-Man. A brilliant student bitten by a radioactive spider who gains incredible powers. With great power comes great responsibility.',
    color: '#E63946',
  },
  {
    id: 2,
    name: 'Miles Morales',
    alias: 'Spider-Man',
    description: 'The new Spider-Man of Brooklyn. bitten by a genetically-altered spider, Miles possesses unique powers including venom strike and invisibility.',
    color: '#00B4D8',
  },
  {
    id: 3,
    name: 'Gwen Stacy',
    alias: 'Spider-Woman',
    description: 'Spider-Woman of Earth-65. A dimension-hopping hero with incredible musical talent and lightning-fast reflexes. Leader of the Spider-Society.',
    color: '#FF69B4',
  },
  {
    id: 4,
    name: 'Miguel O\'Hara',
    alias: 'Spider-Man 2099',
    description: 'The Spider-Man of the year 2099. A brilliant geneticist from a dystopian future with retractable fangs and enhanced strength.',
    color: '#FFD700',
  },
  {
    id: 5,
    name: 'Penelope Parker',
    alias: 'Spider-Ham',
    description: 'A pig from an alternate universe who was bitten by a radioactive pig. Don\'t let his cute appearance fool you - he\'s a fierce warrior.',
    color: '#FF6B6B',
  },
  {
    id: 6,
    name: 'Mayday Parker',
    alias: 'Spider-Girl',
    description: 'The daughter of Peter Parker and Mary Jane from an alternate future. The most powerful Spider-Hero with all traditional powers plus telepathy.',
    color: '#9B59B6',
  },
];

export const Characters = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
    hover: {
      y: -15,
      scale: 1.02,
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="characters">
      <div className="characters-bg-pattern" />
      
      <div className="container">
        <motion.div
          className="characters-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gradient-red">
            Spider-Verse Heroes
          </h2>
          <p>
            Meet the amazing Spider-People from across the multiverse
          </p>
        </motion.div>

        <motion.div
          className="characters-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {characters.map((character) => (
            <motion.div
              key={character.id}
              className="character-card"
              variants={cardVariants}
              whileHover="hover"
              style={{ '--accent-color': character.color } as React.CSSProperties}
            >
              <motion.div
                className="character-image"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              >
                <div 
                  className="character-bg"
                  style={{ 
                    background: `linear-gradient(135deg, ${character.color}22 0%, ${character.color}44 100%)`,
                  }}
                />
                <div className="character-icon">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M50 10L60 35L85 35L65 50L72 75L50 60L28 75L35 50L15 35L40 35L50 10Z" 
                      fill={character.color}
                      opacity="0.9"
                    />
                    <circle cx="50" cy="45" r="8" fill={character.color} />
                    <path 
                      d="M30 55C35 45 45 40 50 40C55 40 65 45 70 55" 
                      stroke={character.color} 
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="card-glow" style={{ background: character.color }} />
              </motion.div>

              <div className="character-content">
                <motion.h3
                  className="character-alias"
                  style={{ color: character.color }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {character.alias}
                </motion.h3>

                <motion.h4
                  className="character-name"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {character.name}
                </motion.h4>

                <motion.p
                  className="character-description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {character.description}
                </motion.p>

                <motion.button
                  className="btn-character"
                  style={{ 
                    background: `linear-gradient(135deg, ${character.color} 0%, ${character.color}99 100%)`,
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover Story
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .characters {
          position: relative;
          padding: var(--space-5xl) 0;
          background: var(--marvel-black);
          overflow: hidden;
        }

        .characters-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(230, 57, 70, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(0, 180, 216, 0.08) 0%, transparent 50%),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 100px,
              rgba(255, 255, 255, 0.01) 100px,
              rgba(255, 255, 255, 0.01) 101px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 100px,
              rgba(255, 255, 255, 0.01) 100px,
              rgba(255, 255, 255, 0.01) 101px
            );
          pointer-events: none;
        }

        .characters-header {
          text-align: center;
          margin-bottom: var(--space-4xl);
        }

        .characters-header h2 {
          margin-bottom: var(--space-md);
        }

        .characters-header p {
          color: var(--marvel-gray);
          font-size: clamp(1rem, 2vw, 1.25rem);
          max-width: 600px;
          margin: 0 auto;
        }

        .characters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        .character-card {
          background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
        }

        .character-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent-color, #E63946);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .character-card:hover::before {
          opacity: 1;
        }

        .character-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
        }

        .character-image {
          width: 100%;
          height: 280px;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .character-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transition: transform 0.4s ease;
        }

        .character-card:hover .character-bg {
          transform: scale(1.1);
        }

        .character-icon {
          width: 180px;
          height: 180px;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5));
          transition: transform 0.4s ease;
        }

        .character-card:hover .character-icon {
          transform: scale(1.1) translateY(-5px);
        }

        .card-glow {
          position: absolute;
          bottom: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 200%;
          height: 100%;
          opacity: 0.15;
          filter: blur(60px);
          transition: opacity 0.4s ease;
        }

        .character-card:hover .card-glow {
          opacity: 0.3;
        }

        .character-content {
          padding: 28px;
          position: relative;
          z-index: 2;
        }

        .character-alias {
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .character-name {
          font-size: 1.6rem;
          margin-bottom: 16px;
          color: var(--marvel-white);
          font-family: var(--font-display);
          letter-spacing: 1px;
        }

        .character-description {
          color: #999;
          margin-bottom: 24px;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .btn-character {
          width: 100%;
          padding: 14px 24px;
          color: white;
          border: none;
          border-radius: 10px;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-character::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }

        .btn-character:hover::before {
          left: 100%;
        }

        .btn-character:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .characters-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .character-image {
            height: 220px;
          }

          .character-icon {
            width: 140px;
            height: 140px;
          }

          .character-content {
            padding: 20px;
          }

          .character-name {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
};
