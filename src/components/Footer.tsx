import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'YouTube', icon: '▶️', url: '#' },
  ];

  const footerLinks = [
    {
      title: 'Spider-Man',
      links: [
        { text: 'Peter Parker', url: '#' },
        { text: 'Miles Morales', url: '#' },
        { text: 'Spider-Verse', url: '#' },
        { text: 'Villains', url: '#' },
      ],
    },
    {
      title: 'Media',
      links: [
        { text: 'Movies', url: '#' },
        { text: 'TV Series', url: '#' },
        { text: 'Games', url: '#' },
        { text: 'Comics', url: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Fan Art', url: '#' },
        { text: 'Discussions', url: '#' },
        { text: 'Events', url: '#' },
        { text: 'Merchandise', url: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'FAQ', url: '#' },
        { text: 'Contact', url: '#' },
        { text: 'Privacy', url: '#' },
        { text: 'Terms', url: '#' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="footer-logo">
              <span className="text-gradient-red">SPIDER-MAN</span>
            </h2>
            <p className="footer-tagline">
              With great power comes great responsibility
            </p>
          </motion.div>

          <div className="footer-links">
            {footerLinks.map((column, colIndex) => (
              <motion.div
                key={colIndex}
                className="footer-link-column"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + colIndex * 0.1, duration: 0.5 }}
              >
                <h3 className="footer-link-title">{column.title}</h3>
                <ul className="footer-link-list">
                  {column.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      className="footer-link-item"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a href={link.url}>{link.text}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="footer-social"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="footer-social-title">Follow Us</h3>
            <div className="footer-social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="footer-social-link"
                  aria-label={social.name}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    backgroundColor: 'var(--marvel-red)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="footer-copyright">
            <p>
              © {currentYear} Spider-Man. All rights reserved.
            </p>
            <p className="footer-disclaimer">
              This is a fan-made demo website for educational purposes only.
            </p>
          </div>

          <motion.div
            className="footer-marvel-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span className="text-gradient-red">SPIDER-MAN</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .footer {
          background: var(--marvel-black);
          border-top: 2px solid var(--marvel-red-dark);
          padding: var(--space-2xl) 0 var(--space-lg);
          position: relative;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(
            90deg,
            var(--marvel-red) 0%,
            var(--marvel-red-dark) 50%,
            var(--marvel-red) 100%
          );
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-xl);
        }

        .footer-brand {
          text-align: left;
        }

        .footer-logo {
          font-size: 1.8rem;
          margin-bottom: var(--space-xs);
        }

        .footer-tagline {
          color: var(--marvel-gray);
          font-size: 0.85rem;
          line-height: 1.6;
        }

        .footer-links {
          display: flex;
          gap: var(--space-xl);
          flex-wrap: wrap;
        }

        .footer-link-column {
          display: flex;
          flex-direction: column;
        }

        .footer-link-title {
          font-size: 0.9rem;
          margin-bottom: var(--space-sm);
          color: var(--marvel-white);
        }

        .footer-link-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .footer-link-item a {
          color: var(--marvel-gray);
          font-size: 0.8rem;
          transition: color var(--transition-fast);
        }

        .footer-link-item a:hover {
          color: var(--marvel-red);
        }

        .footer-social {
          text-align: right;
        }

        .footer-social-title {
          font-size: 0.9rem;
          margin-bottom: var(--space-sm);
          color: var(--marvel-white);
        }

        .footer-social-links {
          display: flex;
          gap: var(--space-sm);
          justify-content: flex-end;
        }

        .footer-social-link {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          transition: all var(--transition-normal);
        }

        .footer-social-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(236, 29, 36, 0.5);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--space-xl);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-copyright {
          color: var(--marvel-gray);
          font-size: 0.9rem;
        }

        .footer-disclaimer {
          margin-top: var(--space-sm);
          font-size: 0.85rem;
          color: var(--marvel-gray-dark);
        }

        .footer-marvel-logo {
          font-size: 2rem;
          font-family: var(--font-hero);
          font-weight: 900;
        }

        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-social {
            text-align: left;
          }

          .footer-social-links {
            justify-content: flex-start;
          }

          .footer-bottom {
            flex-direction: column;
            gap: var(--space-lg);
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: var(--space-3xl) 0 var(--space-xl);
          }

          .footer-links {
            grid-template-columns: 1fr;
          }

          .footer-logo {
            font-size: 2rem;
          }

          .footer-social-links {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </footer>
  );
};
