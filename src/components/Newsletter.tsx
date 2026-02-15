import { motion } from 'framer-motion';
import { useState } from 'react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="newsletter">
      <motion.div
        className="newsletter-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="container">
        <motion.div
          className="newsletter-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="newsletter-icon"
            initial={{ opacity: 0, rotate: -180 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            📧
          </motion.div>

          <h2 className="newsletter-title">
            <span className="text-gradient-red">Stay Updated</span>
            <br />
            <span className="text-gradient">With Spider-Man</span>
          </h2>

          <p className="newsletter-description">
            Subscribe to get the latest updates on Spider-Man movies, games, series, and exclusive
            content from the Spider-Verse.
          </p>

          {!isSubmitted ? (
            <motion.form
              className="newsletter-form"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              onSubmit={handleSubmit}
            >
              <motion.input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
                whileFocus={{
                  scale: 1.02,
                  borderColor: 'var(--marvel-red)',
                  boxShadow: '0 0 20px rgba(236, 29, 36, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              />

              <motion.button
                type="submit"
                className="newsletter-button"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(236, 29, 36, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                disabled={!email}
              >
                Subscribe
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              className="newsletter-success"
              variants={successVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="success-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 10,
                  delay: 0.2,
                }}
              >
                ✓
              </motion.div>
              <p className="success-message">
                Thank you for subscribing!
              </p>
              <motion.button
                className="newsletter-secondary"
                onClick={() => setIsSubmitted(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe another email
              </motion.button>
            </motion.div>
          )}

          <motion.div
            className="newsletter-features"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {[
              { icon: '🎬', text: 'Movie Releases' },
              { icon: '📚', text: 'Comic Updates' },
              { icon: '🎭', text: 'Series News' },
              { icon: '🎁', text: 'Exclusive Content' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="newsletter-feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <span className="feature-icon">{feature.icon}</span>
                <span className="feature-text">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .newsletter {
          position: relative;
          padding: var(--space-5xl) 0;
          background: linear-gradient(
            180deg,
            var(--marvel-black) 0%,
            var(--marvel-black-light) 100%
          );
          overflow: hidden;
        }

        .newsletter-background {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(236, 29, 36, 0.1) 0%,
            transparent 70%
          );
        }

        .newsletter-content {
          position: relative;
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
          padding: var(--space-4xl);
          background: rgba(10, 10, 10, 0.8);
          border: 2px solid rgba(236, 29, 36, 0.3);
          border-radius: var(--radius-xl);
          backdrop-filter: blur(10px);
        }

        .newsletter-icon {
          font-size: 4rem;
          margin-bottom: var(--space-lg);
        }

        .newsletter-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          margin-bottom: var(--space-lg);
          line-height: 1.2;
        }

        .newsletter-description {
          color: var(--marvel-gray);
          font-size: clamp(1rem, 2vw, 1.25rem);
          margin-bottom: var(--space-2xl);
          line-height: 1.6;
        }

        .newsletter-form {
          display: flex;
          gap: var(--space-md);
          margin-bottom: var(--space-3xl);
          flex-wrap: wrap;
        }

        .newsletter-input {
          flex: 1;
          min-width: 250px;
          padding: var(--space-md) var(--space-lg);
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          color: var(--marvel-white);
          font-size: 1rem;
          font-family: var(--font-body);
          transition: all var(--transition-normal);
        }

        .newsletter-input::placeholder {
          color: var(--marvel-gray);
        }

        .newsletter-input:focus {
          outline: none;
        }

        .newsletter-button {
          padding: var(--space-md) var(--space-2xl);
          background: var(--marvel-red);
          color: var(--marvel-white);
          border: none;
          border-radius: var(--radius-md);
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .newsletter-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .newsletter-button:not(:disabled):hover {
          background: var(--marvel-red-dark);
        }

        .newsletter-success {
          text-align: center;
          padding: var(--space-xl);
        }

        .success-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto var(--space-lg);
          background: var(--marvel-red);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: var(--marvel-white);
        }

        .success-message {
          font-size: 1.5rem;
          color: var(--marvel-white);
          margin-bottom: var(--space-xl);
        }

        .newsletter-secondary {
          padding: var(--space-md) var(--space-xl);
          background: transparent;
          color: var(--marvel-white);
          border: 2px solid var(--marvel-red);
          border-radius: var(--radius-md);
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .newsletter-secondary:hover {
          background: var(--marvel-red);
        }

        .newsletter-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-md);
        }

        .newsletter-feature {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-md);
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-md);
        }

        .feature-icon {
          font-size: 1.5rem;
        }

        .feature-text {
          color: var(--marvel-gray);
          font-size: 0.9rem;
          font-family: var(--font-display);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .newsletter-content {
            padding: var(--space-2xl);
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-input {
            min-width: auto;
          }

          .newsletter-button {
            width: 100%;
          }

          .newsletter-features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
