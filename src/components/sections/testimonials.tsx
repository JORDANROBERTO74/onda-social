'use client';

import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useCopy } from '@/i18n/copy-context';

const Testimonials = () => {
  const copy = useCopy();
  const [scale, setScale] = useState(1);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        const availableWidth = window.innerWidth - 160; 
        let newScale = availableWidth / 1440;
        const availableHeight = window.innerHeight;
        const heightScale = availableHeight / 874;
        newScale = Math.min(newScale, heightScale);
        setScale(newScale);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dropBounceVariants: Variants = {
    hidden: { y: -800, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        type: "spring",
        bounce: 0.35,
        duration: 1.8
      }
    })
  };

  const avatars = [
    { id: '61', bg: '/media/portrait-01.jpg', text: copy.testimonials.quotes[0], fontSize: '24px' },
    { id: '62', bg: '/media/portrait-03.jpg', text: copy.testimonials.quotes[1], fontSize: '26px' },
    { id: '63', bg: '/media/portrait-02.jpg', text: copy.testimonials.quotes[2], fontSize: '20px' },
    { id: '64', bg: '/media/portrait-01.jpg', text: copy.testimonials.quotes[3], fontSize: '16px' },
    { id: '65', bg: '/media/portrait-03.jpg', text: copy.testimonials.quotes[4], fontSize: '16px' },
    { id: '66', bg: '/media/portrait-02.jpg', text: copy.testimonials.quotes[5], fontSize: '16px' },
    { id: '70', bg: '/media/portrait-01.jpg', text: copy.testimonials.quotes[6], fontSize: '14px' },
    { id: '67', bg: '/media/portrait-03.jpg', text: copy.testimonials.quotes[7], fontSize: '16px' },
    { id: '68', bg: '/media/portrait-02.jpg', text: copy.testimonials.quotes[8], fontSize: '14px' },
    { id: '69', bg: '/media/portrait-01.jpg', text: copy.testimonials.quotes[9], fontSize: '12px' }
  ];

  return (
    <>
      <style>{`
        .testimonials-section-wrapper {
          width: 100%;
          height: 100vh;
          background: #FBFBDC;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          font-family: 'Inter Tight', sans-serif;
        }

        .testimonials-container {
          width: 1440px;
          height: 874px;
          position: relative;
          transform-origin: center center;
          flex-shrink: 0;
        }

        /* Adjust all left positions by -80px to align to 1440px container */
        .testimonials-header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0px;
          gap: 20px;
          position: absolute;
          width: 844.16px;
          height: 182px;
          left: calc(50% - 844.16px/2);
          top: 80px;
        }

        .testimonials-tag {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 5px;
        }

        .testimonials-tag-dot {
          width: 8px;
          height: 8px;
          background: #024E46;
          border-radius: 2px;
        }

        .testimonials-tag-text {
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          text-align: center;
          text-transform: capitalize;
          color: #000101;
        }

        .testimonials-title-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 16px;
          width: 100%;
        }

        .testimonials-title {
          font-family: 'Goudy Old Style', serif;
          font-weight: 700;
          font-size: 70px;
          line-height: 70px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #024E46;
          margin: 0;
          width: 601px;
        }

        .testimonials-subtitle {
          font-weight: 400;
          font-size: 16px;
          line-height: 26px;
          text-align: center;
          text-transform: capitalize;
          color: #024E46;
          max-width: 600px;
          margin: 0;
        }

        .avatar-wrapper {
          position: absolute;
          perspective: 1000px;
        }

        .flip-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
          border-radius: 50%;
        }

        .flip-front, .flip-back {
          width: 100%;
          height: 100%;
          position: absolute;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 50%;
          overflow: hidden;
        }

        .flip-front {
          background-size: cover;
          background-position: center;
        }

        .flip-back {
          background-color: #024E46;
          color: #FBFBDC;
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
          box-sizing: border-box;
          font-family: 'Goudy Old Style', serif;
          font-style: italic;
        }

        /* Adjust all left positions by -80px to align to 1440px container */
        .avatar-61 { width: 341.63px; height: 341.63px; left: 384.57px; top: 398.64px; }
        .avatar-62 { width: 374.08px; height: 374.08px; left: 1065.92px; top: 419.63px; }
        .avatar-63 { width: 243.34px; height: 243.34px; left: 714.75px; top: 550.37px; }
        .avatar-64 { width: 188.95px; height: 188.95px; left: 890.34px; top: 417.72px; }
        .avatar-65 { width: 190.85px; height: 190.85px; left: 706.16px; top: 343.29px; }
        .avatar-66 { width: 190.85px; height: 190.85px; left: 0px; top: 322.29px; }
        .avatar-70 { width: 148.87px; height: 148.87px; left: 0px; top: 526.51px; }
        .avatar-67 { width: 190.85px; height: 190.85px; left: 186.08px; top: 405.32px; }
        .avatar-68 { width: 165.09px; height: 165.09px; left: 243px; top: 609px; }
        .avatar-69 { width: 104.97px; height: 104.97px; left: 146.96px; top: 578.99px; }
      `}</style>
      
      {isMobile ? (
        <div style={{ width: '100%', backgroundColor: '#FBFBDC', padding: '60px 20px', boxSizing: 'border-box', overflow: 'hidden' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
            <div className="testimonials-tag">
              <div className="testimonials-tag-dot"></div>
              <div className="testimonials-tag-text">{copy.testimonials.tag}</div>
            </div>
            <motion.h2 
              className="testimonials-title"
              style={{ width: '100%', fontSize: '40px', lineHeight: '46px' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
                hidden: {}
              }}
            >
              {copy.testimonials.title.split(" ").map((word, i, arr) => (
                <React.Fragment key={i}>
                  <span style={{ overflow: 'hidden', display: 'inline-flex', verticalAlign: 'bottom' }}>
                    <motion.span
                      variants={{
                        hidden: { y: '100%', opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                  {i < arr.length - 1 && ' '}
                </React.Fragment>
              ))}
            </motion.h2>
            <motion.p className="testimonials-subtitle"
              style={{ width: '100%', maxWidth: '100%' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {copy.testimonials.subtitle}
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', width: '100%' }}
          >
            {avatars.map((av, index) => (
              <motion.div
                key={av.id}
                custom={index}
                variants={dropBounceVariants}
                style={{ width: '100%', aspectRatio: '1/1', perspective: '1000px', pointerEvents: 'auto' }}
              >
                <motion.div 
                  className="flip-inner"
                  whileHover={{ rotateY: 180 }}
                >
                  <div className="flip-front" style={{ backgroundImage: `url('${av.bg}')` }}></div>
                  <div className="flip-back" style={{ fontSize: '12px' }}>
                    <p>{av.text}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : (
        <div className="testimonials-section-wrapper">
      <style>{`
        .testimonials-section-wrapper {
          width: 100%;
          height: 100vh;
          background: #FBFBDC;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          font-family: 'Inter Tight', sans-serif;
        }

        .testimonials-container {
          width: 1440px;
          height: 874px;
          position: relative;
          transform-origin: center center;
          flex-shrink: 0;
        }

        /* Adjust all left positions by -80px to align to 1440px container */
        .testimonials-header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0px;
          gap: 20px;
          position: absolute;
          width: 844.16px;
          height: 182px;
          left: calc(50% - 844.16px/2);
          top: 80px;
        }

        .testimonials-tag {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 5px;
        }

        .testimonials-tag-dot {
          width: 8px;
          height: 8px;
          background: #024E46;
          border-radius: 2px;
        }

        .testimonials-tag-text {
          font-weight: 400;
          font-size: 18px;
          line-height: 24px;
          text-align: center;
          text-transform: capitalize;
          color: #000101;
        }

        .testimonials-title-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 16px;
          width: 100%;
        }

        .testimonials-title {
          font-family: 'Goudy Old Style', serif;
          font-weight: 700;
          font-size: 70px;
          line-height: 70px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #024E46;
          margin: 0;
          width: 601px;
        }

        .testimonials-subtitle {
          font-weight: 400;
          font-size: 16px;
          line-height: 26px;
          text-align: center;
          text-transform: capitalize;
          color: #024E46;
          max-width: 600px;
          margin: 0;
        }

        .avatar-wrapper {
          position: absolute;
          perspective: 1000px;
        }

        .flip-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
          border-radius: 50%;
        }

        .flip-front, .flip-back {
          width: 100%;
          height: 100%;
          position: absolute;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 50%;
          overflow: hidden;
        }

        .flip-front {
          background-size: cover;
          background-position: center;
        }

        .flip-back {
          background-color: #024E46;
          color: #FBFBDC;
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
          box-sizing: border-box;
          font-family: 'Goudy Old Style', serif;
          font-style: italic;
        }

        /* Adjust all left positions by -80px to align to 1440px container */
        .avatar-61 { width: 341.63px; height: 341.63px; left: 384.57px; top: 398.64px; }
        .avatar-62 { width: 374.08px; height: 374.08px; left: 1065.92px; top: 419.63px; }
        .avatar-63 { width: 243.34px; height: 243.34px; left: 714.75px; top: 550.37px; }
        .avatar-64 { width: 188.95px; height: 188.95px; left: 890.34px; top: 417.72px; }
        .avatar-65 { width: 190.85px; height: 190.85px; left: 706.16px; top: 343.29px; }
        .avatar-66 { width: 190.85px; height: 190.85px; left: 0px; top: 322.29px; }
        .avatar-70 { width: 148.87px; height: 148.87px; left: 0px; top: 526.51px; }
        .avatar-67 { width: 190.85px; height: 190.85px; left: 186.08px; top: 405.32px; }
        .avatar-68 { width: 165.09px; height: 165.09px; left: 243px; top: 609px; }
        .avatar-69 { width: 104.97px; height: 104.97px; left: 146.96px; top: 578.99px; }
      `}</style>
      
      <div className="testimonials-container" style={{ transform: `scale(${scale})` }}>
        <div className="testimonials-header">
          <div className="testimonials-tag">
            <div className="testimonials-tag-dot"></div>
            <div className="testimonials-tag-text">{copy.testimonials.tag}</div>
          </div>
          <div className="testimonials-title-container">
            <motion.h2 
              className="testimonials-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
                hidden: {}
              }}
            >
              {copy.testimonials.title.split(" ").map((word, i, arr) => (
                <React.Fragment key={i}>
                  <span style={{ overflow: 'hidden', display: 'inline-flex', verticalAlign: 'bottom' }}>
                    <motion.span
                      variants={{
                        hidden: { y: '100%', opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                  {i < arr.length - 1 && ' '}
                </React.Fragment>
              ))}
            </motion.h2>
            <motion.p className="testimonials-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {copy.testimonials.subtitle}
            </motion.p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
        >
          {avatars.map((av, index) => (
            <motion.div
              key={av.id}
              custom={index}
              variants={dropBounceVariants}
              className={`avatar-wrapper avatar-${av.id}`}
              style={{ pointerEvents: 'auto' }}
            >
              <motion.div 
                className="flip-inner"
                whileHover={{ rotateY: 180 }}
              >
                <div className="flip-front" style={{ backgroundImage: `url('${av.bg}')` }}></div>
                <div className="flip-back" style={{ fontSize: av.fontSize }}>
                  <p>{av.text}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
      )}
    </>
  );
};

export default Testimonials;
