import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import GrainOverlay from '../components/GrainOverlay/GrainOverlay';
import FadeInText from '../components/Animations/FadeInText';

// Animated Section Component with Scale-X line animation and scroll-based text color
const AnimatedSection = ({ title, children, index, isMobile }) => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  // Scroll-based color intensity for text - starts light, gets darker while reading
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.8", "end 0.2"] // Start fading in when 80% from top, finish when 20% from bottom
  });

  // Transform from light gray (0.3 opacity) to full gray (1.0) while scrolling through viewport
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['rgba(151, 151, 151, 0.3)', 'rgba(151, 151, 151, 0.7)', 'rgba(151, 151, 151, 1)']
  );

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className="space-y-4"
    >
      {/* Scale-X line animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: [0.215, 0.61, 0.355, 1] }}
        className="h-[1px] bg-black/10 origin-left"
      />
      
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3, ease: [0.215, 0.61, 0.355, 1] }}
        className="text-xl lg:text-2xl font-neue-semibold uppercase mb-4 text-[#979797]"
      >
        {title}
      </motion.h2>
      
      <motion.div
        ref={textRef}
        style={{ color: textColor }}
        initial={{ y: 10 }}
        animate={isInView ? { y: 0 } : { y: 10 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.4, ease: [0.215, 0.61, 0.355, 1] }}
        className="text-[20px] lg:text-[32px] font-neue-book-semi leading-relaxed"
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

const Privacy = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const containerRef = useRef(null);

  useEffect(() => {
    // Skeleton loading: build layout in 0.8s
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sections = [
    {
      title: "Data Collection",
      content: "This portfolio website uses Umami Analytics, a free, privacy-focused analytics service that does not collect personal data. Umami Analytics does not use cookies, does not track users across websites, and does not collect any personally identifiable information. All analytics data is aggregated and anonymized. Your visit to this site remains anonymous.",
      hasLink: false
    },
    {
      title: "Cookies",
      content: "This website does not use cookies. The analytics service (Umami Analytics) operates without cookies and does not require cookie consent under GDPR, CCPA, or PECR regulations.",
      hasLink: false
    },
    {
      title: "Third-Party Links",
      content: "This website may contain links to external websites (such as LinkedIn, GitHub, or other third-party sites). I am not responsible for the privacy practices or content of these external sites. Please review their privacy policies separately.",
      hasLink: false
    },
    {
      title: "Image Usage Policy",
      content: "The images displayed in this portfolio are based on projects I have worked on. All images are used for portfolio and professional presentation purposes to showcase my design work and contributions to these projects.",
      hasLink: false
    },
    {
      title: "Removal Requests",
      content: "If you are the owner or representative of a company whose images appear in this portfolio and you do not wish for them to be displayed, please contact me via",
      hasLink: true,
      linkText: "LinkedIn"
    },
    {
      title: "Your Rights",
      content: "Since no personal data is collected, there is no personal data to access, modify, or delete. If you have any concerns about your privacy while visiting this site, please contact me via",
      hasLink: true,
      linkText: "LinkedIn"
    },
    {
      title: "Changes to This Policy",
      content: "I may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.",
      hasLink: false
    },
    {
      title: "Contact",
      content: "For any questions or concerns regarding privacy, image usage, or this policy, please reach out to me via",
      hasLink: true,
      linkText: "LinkedIn"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F1F2E5] text-black font-neue" style={{ scrollBehavior: 'smooth' }}>
      <GrainOverlay />
      <Navbar />
      
      <main className="pt-[110px] lg:pt-[120px] pb-32 px-5 lg:px-12 max-w-4xl mx-auto">
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 lg:p-12 space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-[32px] lg:text-[48px] font-neue-semibold uppercase tracking-normal leading-tight text-[#979797] mb-8"
          >
            Privacy & Image Usage
          </motion.h1>
          
          <div className="space-y-6">
            {sections.map((section, index) => {
              const content = section.hasLink ? (
                <>
                  {section.content}{' '}
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                    {section.linkText}
                  </a>
                  .
                </>
              ) : (
                section.content
              );

              return (
                <AnimatedSection key={index} title={section.title} index={index} isMobile={isMobile}>
                  {content}
                </AnimatedSection>
              );
            })}

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: sections.length * 0.1 + 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              className="space-y-4"
            >
              <p className="text-[20px] lg:text-[32px] font-neue-book-semi text-[#979797]/60 mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </motion.section>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: sections.length * 0.1 + 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            className="pt-8 mt-8 border-t border-black/10"
          >
            <button
              onClick={() => navigate('/')}
              className="text-sm font-black font-neue uppercase min-h-[44px] touch-manipulation leading-none relative inline-block text-[#979797]"
              style={{
                lineHeight: '1',
                paddingBottom: '0'
              }}
            >
              ← Back to Home
            </button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Privacy;
