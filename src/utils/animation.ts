
// Animation utility to create a staggered animation effect
export const getStaggerDelay = (index: number, baseDelay: number = 100): string => {
  return `${baseDelay * index}ms`;
};

// Function to determine when an element is in viewport
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
};

// Smooth scrolling utility
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Generate random number within a range (for animations)
export const getRandomInRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};
