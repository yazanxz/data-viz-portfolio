
import { useEffect, useState } from 'react';
import AnimatedChart from './AnimatedChart';
import { scrollToElement } from '../utils/animation';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-data-blue/5 to-data-teal/5" />
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-data-blue/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-data-teal/10 blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className={`inline-block py-1 px-3 rounded-full text-xs font-medium bg-secondary text-secondary-foreground mb-6 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
              Data Analyst & Visualization Expert
            </span>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-6 opacity-0 ${isVisible ? 'animate-fade-in delayed-300' : ''}`}>
              Transforming <span className="gradient-heading">complex data</span> into clear insights
            </h1>
            
            <p className={`text-lg text-muted-foreground max-w-md mb-8 opacity-0 ${isVisible ? 'animate-fade-in delayed-500' : ''}`}>
              Specialized in creating beautiful, interactive visualizations that communicate data-driven stories effectively and elegantly.
            </p>
            
            <div className={`flex flex-wrap gap-4 opacity-0 ${isVisible ? 'animate-fade-in delayed-700' : ''}`}>
              <button 
                onClick={() => scrollToElement('projects')}
                className="px-6 py-3 rounded-full bg-foreground text-primary-foreground font-medium transition-all hover:bg-foreground/90 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                View Portfolio
              </button>
              
              <button 
                onClick={() => scrollToElement('contact')}
                className="px-6 py-3 rounded-full bg-transparent text-foreground font-medium border border-border hover:bg-secondary transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
          
          <div className={`relative h-[400px] lg:h-[500px] opacity-0 ${isVisible ? 'animate-fade-in delayed-700' : ''}`}>
            <AnimatedChart 
              color="#0EA5E9" 
              isVisible={isVisible}
            />
            
            <div className="absolute inset-0 glass-panel -z-10 opacity-60" />
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToElement('skills')} 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground opacity-0 hover:text-foreground transition-colors ${isVisible ? 'animate-fade-in delayed-700' : ''}`}
      >
        <span className="mb-2">Explore</span>
        <ArrowDown className="animate-pulse-subtle" size={20} />
      </button>
    </section>
  );
};

export default HeroSection;
