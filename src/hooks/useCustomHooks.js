import { useState, useEffect, useRef } from 'react';

// Timer Hook - Experience Counter
export const useTimer = (startDate = new Date(2018, 10, 1, 0, 0, 0, 0)) => {
  const [timeElapsed, setTimeElapsed] = useState('');

  useEffect(() => {
    const startStamp = startDate.getTime();

    const updateClock = () => {
      const newDate = new Date();
      const newStamp = newDate.getTime();
      const diff = Math.round((newStamp - startStamp) / 1000);

      const d = Math.floor(diff / (24 * 60 * 60));
      const remainingAfterDays = diff - (d * 24 * 60 * 60);
      const h = Math.floor(remainingAfterDays / (60 * 60));
      const remainingAfterHours = remainingAfterDays - (h * 60 * 60);
      const m = Math.floor(remainingAfterHours / 60);
      const s = remainingAfterHours - (m * 60);

      setTimeElapsed(`${d} DAYS, ${h} HOURS, ${m} MINUTES, ${s} SECONDS OF EXPERIENCE`);
    };

    updateClock(); // Initial call
    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  return timeElapsed;
};

// Scroll Hook - Header scroll effects
export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolled;
};

// Parallax Hook
export const useParallax = (speed = 0.25) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const windowTop = window.scrollY;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5;
      const scrolled = windowTop - elementTop + viewPortHeight;

      element.style.transform = `translate3d(0, ${scrolled * -speed}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
};

// Animation Hook - Project box animations
export const useAnimation = () => {
  const [activeElements, setActiveElements] = useState(new Set());

  useEffect(() => {
    const animatedSections = document.querySelectorAll('.animated-project');
    const windowHeight = window.innerHeight;

    const checkAnimations = () => {
      const newActiveElements = new Set();

      animatedSections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const projectBox = section.nextElementSibling;

        if (window.scrollY >= offsetTop - windowHeight / 1.5) {
          newActiveElements.add(section);
          section.classList.add('project-box-active');

          if (projectBox && projectBox.classList.contains('project-box')) {
            const projectBoxHeight = projectBox.scrollHeight;
            projectBox.style.maxHeight = `${projectBoxHeight}px`;
            projectBox.style.opacity = '1';
          }
        }
      });

      setActiveElements(newActiveElements);
    };

    checkAnimations(); // Initial check
    window.addEventListener('scroll', checkAnimations);

    return () => window.removeEventListener('scroll', checkAnimations);
  }, []);

  return activeElements;
};

// Lazy Video Hook
export const useLazyVideo = () => {
  useEffect(() => {
    const videos = document.querySelectorAll('.lazy-video');

    const lazyLoad = () => {
      videos.forEach(video => {
        const rect = video.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && !video.dataset.loaded) {
          video.src = video.dataset.src;
          video.dataset.loaded = 'true';
        }
      });
    };

    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    lazyLoad(); // Initial load

    return () => {
      window.removeEventListener('scroll', lazyLoad);
      window.removeEventListener('resize', lazyLoad);
    };
  }, []);
};

// Accordion Hook
export const useAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return { activeAccordion, toggleAccordion };
};
