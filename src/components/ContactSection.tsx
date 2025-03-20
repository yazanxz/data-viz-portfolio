
import { useRef, useState, useEffect } from 'react';
import { AtSign, MapPin, Phone, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: AtSign,
      label: 'Email',
      value: 'contact@dataviz.io',
      delay: 100,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      delay: 200,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      delay: 300,
    },
  ];

  return (
    <section ref={sectionRef} id="contact">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className={`inline-block py-1 px-3 rounded-full text-xs font-medium bg-data-amber/10 text-data-amber mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Contact
          </span>
          <h2 className={`section-heading ${isVisible ? 'animate-fade-in delayed-300' : 'opacity-0'}`}>
            Let's Work Together
          </h2>
          <p className={`section-subheading ${isVisible ? 'animate-fade-in delayed-500' : 'opacity-0'}`}>
            Have a data visualization project in mind? I'd love to hear about it and discuss how we can bring your data to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className={`glass-panel p-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-data-blue/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-data-blue/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-data-blue/50 transition-all resize-none"
                    placeholder="I'd like to discuss a project..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={cn(
                      "w-full py-3 px-6 rounded-lg font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center",
                      isSuccess 
                        ? "bg-green-500 hover:bg-green-600 focus:ring-green-500"
                        : "bg-data-blue hover:bg-data-blue/90 focus:ring-data-blue"
                    )}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : isSuccess ? (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Message Sent!
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
          
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "glass-panel p-6 flex items-start opacity-0 transform translate-y-8 transition-all duration-700 ease-out",
                  isVisible ? `opacity-100 translate-y-0 transition-delay-${item.delay}` : ""
                )}
              >
                <div className="w-10 h-10 rounded-full bg-data-blue/10 flex items-center justify-center mr-4">
                  <item.icon className="w-5 h-5 text-data-blue" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">{item.label}</h3>
                  <p className="text-base font-medium">{item.value}</p>
                </div>
              </div>
            ))}
            
            <div 
              className={cn(
                "glass-panel p-0 overflow-hidden rounded-xl opacity-0 transform translate-y-8 transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0 transition-delay-400" : ""
              )}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948553!3d37.75781499657633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1636559050180!5m2!1sen!2sus" 
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-24 py-8 bg-foreground text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-70">© {new Date().getFullYear()} DataViz.io — All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Dribbble
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Medium
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
