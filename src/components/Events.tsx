import { motion } from 'framer-motion';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  type: 'movie' | 'comic' | 'series';
}

const events: Event[] = [
  {
    id: 1,
    title: 'Spider-Man: Across the Spider-Verse',
    date: 'Streaming Now',
    location: 'Netflix / Max',
    description: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.',
    type: 'movie',
  },
  {
    id: 2,
    title: 'Spider-Man: Miles Morales',
    date: 'Available Now',
    location: 'PlayStation 5 / PS4',
    description: 'Experience the rise of Miles Morales as he masters new powers to become his own Spider-Man.',
    type: 'movie',
  },
  {
    id: 3,
    title: 'Spider-Man 2',
    date: 'Available Now',
    location: 'PlayStation 5',
    description: 'Swing through New York with Peter Parker and Miles Morales in the most ambitious Spider-Man game yet.',
    type: 'movie',
  },
  {
    id: 4,
    title: 'Your Friendly Neighborhood Spider-Man',
    date: '2025',
    location: 'Disney+',
    description: 'A new animated series following a younger Peter Parker as he learns to be Spider-Man in the MCU.',
    type: 'series',
  },
];

export const Events = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const eventVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
    hover: {
      x: 10,
      backgroundColor: 'rgba(236, 29, 36, 0.1)',
      borderColor: 'var(--marvel-red)',
      transition: {
        duration: 0.3,
      },
    },
  };

  const getTypeColor = (type: Event['type']) => {
    switch (type) {
      case 'movie':
        return '#FFD700';
      case 'series':
        return '#4169E1';
      case 'comic':
        return '#32CD32';
      default:
        return '#808080';
    }
  };

  const getTypeLabel = (type: Event['type']) => {
    switch (type) {
      case 'movie':
        return 'Movie';
      case 'series':
        return 'Series';
      case 'comic':
        return 'Comic';
      default:
        return 'Event';
    }
  };

  return (
    <section className="events">
      <div className="container">
        <motion.div
          className="events-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gradient-red">
            Latest Spider-Man
          </h2>
          <p>
            Movies, games, and series featuring your favorite Web-Slinger
          </p>
        </motion.div>

        <motion.div
          className="events-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="event-item"
              variants={eventVariants}
              whileHover="hover"
              style={{ borderLeftColor: getTypeColor(event.type) }}
            >
              <motion.div
                className="event-number"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.div>

              <div className="event-content">
                <div className="event-meta">
                  <span
                    className="event-type"
                    style={{ backgroundColor: getTypeColor(event.type) }}
                  >
                    {getTypeLabel(event.type)}
                  </span>
                  <span className="event-date">{event.date}</span>
                </div>

                <h3 className="event-title">{event.title}</h3>

                <p className="event-description">{event.description}</p>

                <div className="event-location">
                  <span className="location-icon">📍</span>
                  {event.location}
                </div>
              </div>

              <motion.button
                className="event-action"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="events-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button className="btn-primary">
            View Full Schedule
          </button>
        </motion.div>
      </div>

      <style>{`
        .events {
          position: relative;
          padding: var(--space-5xl) 0;
          background: var(--marvel-black);
        }

        .events-header {
          text-align: center;
          margin-bottom: var(--space-4xl);
        }

        .events-header h2 {
          margin-bottom: var(--space-md);
        }

        .events-header p {
          color: var(--marvel-gray);
          font-size: clamp(1rem, 2vw, 1.25rem);
        }

        .events-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
          margin-bottom: var(--space-4xl);
        }

        .event-item {
          position: relative;
          display: flex;
          align-items: stretch;
          background: var(--marvel-black-light);
          border-left: 4px solid var(--marvel-red);
          border-radius: var(--radius-lg);
          overflow: hidden;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .event-number {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 80px;
          padding: var(--space-xl);
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--marvel-red);
          background: rgba(236, 29, 36, 0.1);
          font-family: var(--font-hero);
        }

        .event-content {
          flex: 1;
          padding: var(--space-xl);
        }

        .event-meta {
          display: flex;
          gap: var(--space-md);
          align-items: center;
          margin-bottom: var(--space-md);
          flex-wrap: wrap;
        }

        .event-type {
          padding: var(--space-xs) var(--space-md);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--marvel-black);
        }

        .event-date {
          color: var(--marvel-gray);
          font-size: 0.9rem;
          font-family: var(--font-display);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .event-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: var(--space-md);
          color: var(--marvel-white);
        }

        .event-description {
          color: var(--marvel-gray);
          margin-bottom: var(--space-md);
          font-size: 1rem;
          line-height: 1.6;
        }

        .event-location {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          color: var(--marvel-gray);
          font-size: 0.9rem;
        }

        .location-icon {
          font-size: 1.2rem;
        }

        .event-action {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 60px;
          font-size: 1.5rem;
          background: var(--marvel-red);
          color: var(--marvel-white);
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .event-action:hover {
          background: var(--marvel-red-dark);
        }

        .events-cta {
          text-align: center;
        }

        @media (max-width: 768px) {
          .event-item {
            flex-direction: column;
          }

          .event-number {
            min-width: auto;
            padding: var(--space-md);
            font-size: 1.5rem;
          }

          .event-content {
            padding: var(--space-lg);
          }

          .event-title {
            font-size: 1.25rem;
          }

          .event-action {
            min-width: auto;
            padding: var(--space-md);
          }
        }

        @media (max-width: 480px) {
          .events-list {
            gap: var(--space-md);
          }

          .event-item {
            border-left-width: 3px;
          }

          .event-number {
            padding: var(--space-sm);
            font-size: 1.3rem;
            min-width: 50px;
          }

          .event-content {
            padding: var(--space-md);
          }

          .event-meta {
            gap: 6px;
            flex-wrap: wrap;
          }

          .event-type {
            padding: 4px 10px;
            font-size: 0.7rem;
          }

          .event-date {
            font-size: 0.8rem;
          }

          .event-title {
            font-size: 1.1rem;
          }

          .event-description {
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .event-action {
            min-width: 44px;
            padding: var(--space-sm);
            font-size: 1.3rem;
          }

          .event-location {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};
