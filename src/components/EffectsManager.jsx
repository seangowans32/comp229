import React, { useEffect } from 'react';
import { useTimer, useScroll, useParallax, useAnimation, useLazyVideo } from '../hooks/useCustomHooks';

// Component for managing all the effects
const EffectsManager = ({ children }) => {
  // Initialize all hooks
  const timeElapsed = useTimer();
  const isScrolled = useScroll();
  const parallaxRef = useParallax(0.25);
  const parallaxSmallRef = useParallax(0.15);
  const activeElements = useAnimation();
  
  // Initialize lazy video loading
  useLazyVideo();

  // Update header class based on scroll
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      if (isScrolled) {
        header.classList.add('scroll-active');
      } else {
        header.classList.remove('scroll-active');
      }
    }
  }, [isScrolled]);

  // Update time elapsed element if it exists
  useEffect(() => {
    const timeElement = document.getElementById('time-elapsed');
    if (timeElement && timeElapsed) {
      timeElement.innerHTML = timeElapsed;
    }
  }, [timeElapsed]);

  return (
    <>
      {children}
      {/* Hidden elements for parallax effects */}
      <div ref={parallaxRef} className="parallax-scroll-big" style={{ display: 'none' }} />
      <div ref={parallaxSmallRef} className="parallax-scroll" style={{ display: 'none' }} />
    </>
  );
};

// Component for the experience timer display
export const ExperienceTimer = () => {
  const timeElapsed = useTimer();
  
  return (
    <div id="time-elapsed">
      {timeElapsed}
    </div>
  );
};

// Component for parallax elements
export const ParallaxElement = ({ children, speed = 0.25, className = '' }) => {
  const parallaxRef = useParallax(speed);
  
  return (
    <div ref={parallaxRef} className={`parallax-scroll ${className}`}>
      {children}
    </div>
  );
};

export default EffectsManager;
