
import { useRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Sales Performance Dashboard',
    description: 'Interactive dashboard visualizing sales data across regions with trend analysis and forecasting.',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['Tableau', 'Data Analysis', 'Sales']
  },
  {
    title: 'Customer Behavior Analysis',
    description: 'Deep dive into customer segments with visualization of purchasing patterns and behaviors.',
    imageSrc: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['Python', 'Visualization', 'Marketing']
  },
  {
    title: 'Financial Performance Metrics',
    description: 'Comprehensive financial visualization with KPIs, trends, and comparative analysis.',
    imageSrc: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['Power BI', 'Finance', 'Dashboards']
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Interactive visualization of supply chain data to identify bottlenecks and optimize flow.',
    imageSrc: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['Tableau', 'Supply Chain', 'Optimization']
  },
  {
    title: 'HR Analytics Dashboard',
    description: 'Workforce analytics with attrition prediction, satisfaction metrics, and performance indicators.',
    imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['R', 'HR Analytics', 'Predictive Modeling']
  },
  {
    title: 'Marketing Campaign Results',
    description: 'Visual analysis of marketing campaign performance across channels with ROI visualization.',
    imageSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['Google Data Studio', 'Marketing', 'ROI Analysis']
  }
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={sectionRef} id="projects">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className={`inline-block py-1 px-3 rounded-full text-xs font-medium bg-data-teal/10 text-data-teal mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Portfolio
          </span>
          <h2 className={`section-heading ${isVisible ? 'animate-fade-in delayed-300' : 'opacity-0'}`}>
            Featured Visualization Projects
          </h2>
          <p className={`section-subheading ${isVisible ? 'animate-fade-in delayed-500' : 'opacity-0'}`}>
            Explore my recent data visualization work across industries. Each project represents a unique challenge solved through effective data storytelling.
          </p>
        </div>

        <div className="data-grid mt-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={isVisible ? `animate-fade-up stagger-${index % 6 + 1}` : 'opacity-0'}
            >
              <ProjectCard 
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                tags={project.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
