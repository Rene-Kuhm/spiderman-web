import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="bg-loader"
            initial={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <svg className="loader-logo" viewBox="0 0 96 96" fill="none">
              <motion.path
                d="M50.4431 44.6386L50.703 44.1559C53.3391 45.6906 59.4431 49.3762 62.7698 51.8416C62.745 53.9208 62.5247 59.401 61.8416 64.6881C61.5322 67.3243 60.2599 73.8589 57.646 78.9084C59.1435 76.9158 62.4876 71.3713 63.8836 65.1337C64.3663 63.3639 65.4653 58.0495 66 50.9505C63.1534 49.3045 56.1683 45.5223 51 43.5619L51.3713 42.7822C55.1955 43.8342 64.1287 46.5025 69.2673 48.7599C69.1559 51.4332 68.495 58.4505 66.7426 65.1337C65.8371 68.5866 63.3416 77.4752 56.2723 86C56.3697 85.8994 56.4882 85.78 56.6273 85.6398C58.1308 84.1248 62.0302 80.1956 67.5223 71.6312C70.2698 66.5446 72.0891 60.6782 74.3911 46.7178C68.9703 44.9728 61.5817 43.0421 51.594 42.0025L51.8911 41.4084C55.6039 41.2104 64.2772 41.0743 69.2673 42.1139C69.8366 38.3144 69.6312 29.4975 65.146 24.6262C66.1361 27.3366 67.9827 34.0569 66.5569 39.255C62.9307 39.2302 54.9431 39.3812 52.0025 40.1832L51.5198 39.552C53.698 38.2525 58.6708 35.5421 61.1361 35.0965C61.1442 35.0372 61.1523 34.9774 61.1605 34.9172C61.8684 29.7099 62.9799 21.5342 55.4554 11C57.2747 14.75 60.2153 23.802 58.3143 33.2772L50.9257 38.6609L50.3688 37.8812L52.6336 35.5421C52.2252 34.8738 51.0074 33.3812 49.4035 32.7574C50.1708 33.6733 51.2079 35.698 49.2178 36.4703H46.2846C45.4307 36.2475 44.198 35.1931 46.099 32.7574C45.3193 33.1163 43.604 34.1757 42.9802 35.5421L44.6881 37.5842L44.3168 38.3267L37.1881 33.3144C36.3465 29.6881 35.6584 20.1559 39.6386 11.0371C39.3184 11.6268 39.0101 12.189 38.7142 12.7287C34.6868 20.0738 32.9356 23.2677 34.1807 35.0965C35.5792 35.3936 39.3639 36.6856 43.3144 39.4777L43.0916 39.9604C39.7005 39.6386 32.0941 39.0619 28.797 39.3292C28.2277 36.6807 27.7054 30.0322 30.1708 24.6262C26.2723 30.1213 25.4926 34.1312 26.1609 42.2252C28.9703 41.6807 36.2896 40.755 43.0916 41.4084L43.3144 42.0025C38.3144 42.6337 26.8515 44.4604 21 46.7178C21.1638 47.5953 21.3229 48.4557 21.4788 49.2991C22.9129 57.0566 24.0818 63.3797 26.2723 68.3639C29.9854 75.5044 33.156 79.1728 37.0129 83.6354C37.6683 84.3937 38.3435 85.1749 39.0446 ...32"
                fill="#E63946"
                animate={{ pathLength: 1, opacity: 1 }}
                initial={{ pathLength: 0, opacity: 0 }}
                transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.5 }}
                style={{ stroke: '#E63946', strokeWidth: 0.5, strokeDasharray: 1 }}
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Video */}
      <div className="bg-video">
        <video
          className="video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/spiderman.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Container */}
      <section className="container" ref={heroRef}>
        {/* Item 1 - Left Content */}
        <motion.div
          className="container-item-1 item-1"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          style={{ y: y2 }}
        >
          <div>
            <img src="/spiderman-text.png" alt="Spider-Man" className="spiderman-title" />
          </div>
          <p className="my-2 item-2">
            With great power comes great responsibility. Experience the breathtaking adventure of Peter Parker 
            as he swings through New York City, faces incredible villains, and discovers what it truly 
            means to be Spider-Man. The next chapter begins now.
          </p>
          <div className="item-3">
            <a href="#" className="btn">Play Now</a>
            <a href="#" className="btn-secondary ml-2">Watch Trailer</a>
          </div>
          <div className="flex align-items-center mt-2 item-4">
            <img src="/ps.svg" alt="PlayStation" className="w-auto" />
            <img src="/marvel.svg" alt="Marvel" className="w-auto ml-2" />
          </div>
        </motion.div>

        {/* Item 2 - Right Content */}
        <motion.div
          className="container-item-2 item-5"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          style={{ y: y1 }}
        >
          <div
            className="js-tilt"
            style={{
              transform: `perspective(2000px) translate3d(-170px, 0, 0) scale(1.05) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
            }}
          >
            <img src="/spider-man.png" alt="Spider-Man" className="spiderman" />
          </div>
        </motion.div>
      </section>

      <style>{`
        .bg-loader {
          width: 100%;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, #E63946 0%, #8B0000 50%, #1a1a2e 100%);
        }

        .loader-logo {
          width: 200px;
          height: 200px;
        }

        .bg-video {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          overflow: hidden;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .bg-video::after {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          background: linear-gradient(
            101.47deg,
            #0A0C10 26.38%,
            rgba(10, 12, 16, 0.8) 50.07%,
            #0A0C10 73.17%
          );
        }

        .container {
          min-height: 100vh;
          margin: 0 auto;
          padding: 100px 24px 40px;
          overflow: none;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .container-item-1 {
          max-width: 600px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          flex: 1;
        }

        .spiderman-title {
          width: 100%;
          max-width: 550px;
          display: block;
        }

        .my-2 {
          margin: 24px 0;
        }

        .item-2 {
          font-size: 18px;
          color: #B8B8B8;
          letter-spacing: 0.5px;
          line-height: 160%;
          margin-bottom: 24px;
          max-width: 500px;
        }

        .item-3 {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-block;
          padding: 16px 40px;
          border-radius: 4px;
          transform: skew(-10deg);
          text-transform: uppercase;
          background: linear-gradient(225deg, #E63946 0%, #B31317 100%);
          position: relative;
          color: #EDF1F7;
          text-decoration: none;
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .btn::after {
          content: "";
          display: block;
          position: absolute;
          top: -2px;
          left: -2px;
          width: 30%;
          height: 70%;
          opacity: 0;
          border-radius: 4px;
          border-top: 3px solid #fff;
          border-left: 3px solid #fff;
          transition: opacity var(--transition-normal);
        }

        .btn::before {
          content: "";
          display: block;
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 30%;
          height: 70%;
          opacity: 0;
          transition: opacity var(--transition-normal);
          border-radius: 4px;
          border-bottom: 3px solid #fff;
          border-right: 3px solid #fff;
        }

        .btn:hover {
          transform: skew(-10deg) scale(1.05);
          box-shadow: 0 10px 40px rgba(230, 57, 70, 0.4);
        }

        .btn:hover::after {
          opacity: 1;
        }

        .btn:hover::before {
          opacity: 1;
        }

        .btn-secondary {
          display: inline-block;
          padding: 14px 40px;
          border-radius: 4px;
          transform: skew(-10deg);
          text-transform: uppercase;
          background: transparent;
          border: 2px solid #E63946;
          position: relative;
          color: #EDF1F7;
          text-decoration: none;
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .btn-secondary::after {
          content: "";
          display: block;
          position: absolute;
          top: -1px;
          left: -1px;
          z-index: -1;
          width: 0%;
          height: 103%;
          transition: 0.7s ease;
          background: linear-gradient(225deg, #E63946 0%, #B31317 100%);
        }

        .btn-secondary:hover {
          color: #fff;
        }

        .btn-secondary:hover::after {
          width: 101%;
        }

        .ml-2 {
          margin-left: 16px;
        }

        .mt-2 {
          margin-top: 24px;
        }

        .flex {
          display: flex;
        }

        .align-items-center {
          align-items: center;
        }

        .w-auto {
          width: auto;
          height: 40px;
        }

        .item-4 {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .container-item-2 {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          perspective: 2000px;
          max-width: 600px;
        }

        .js-tilt {
          transform: perspective(2000px) translate3d(-100px, 0, 0) scale(1.1);
          transform-style: preserve-3d;
          transition: transform 0.2s ease-out;
        }

        .spiderman {
          width: 160%;
          max-width: 700px;
          display: block;
        }

        @media (max-width: 1024px) {
          .container {
            flex-direction: column;
            min-height: auto;
            padding: 100px 20px 50px;
            text-align: center;
            gap: 30px;
          }

          .container-item-1 {
            max-width: 100%;
            align-items: center;
            order: 2;
          }

          .spiderman-title {
            max-width: 350px;
          }

          .item-2 {
            max-width: 100%;
            font-size: 16px;
          }

          .item-3 {
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
          }

          .btn, .btn-secondary {
            width: 100%;
            max-width: 200px;
          }

          .item-4 {
            justify-content: center;
          }

          .container-item-2 {
            order: 1;
            justify-content: center;
            max-width: 100%;
            margin-bottom: 0;
          }

          .spiderman {
            width: 100%;
            max-width: 380px;
            transform: translate3d(0, 0, 0) scale(1);
          }

          .js-tilt {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 80px 16px 30px;
          }

          .spiderman-title {
            max-width: 260px;
          }

          .item-2 {
            font-size: 14px;
          }

          .btn, .btn-secondary {
            padding: 11px 20px;
            font-size: 12px;
            width: 100%;
          }

          .item-4 {
            gap: 12px;
          }

          .w-auto {
            height: 24px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 60px 12px 20px;
          }

          .spiderman-title {
            max-width: 220px;
          }

          .item-2 {
            font-size: 13px;
            line-height: 1.5;
          }

          .btn, .btn-secondary {
            padding: 10px 16px;
            font-size: 11px;
          }

          .w-auto {
            height: 20px;
          }
        }
      `}</style>
    </>
  );
};
