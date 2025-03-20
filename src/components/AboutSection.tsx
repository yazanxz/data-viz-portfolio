
import { useRef, useState, useEffect } from 'react';
import { BarChart, ChartPie, Code, Database, LineChart, PieChart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const SkillCard = ({ icon: Icon, title, description, delay, isVisible }: SkillCardProps) => (
  <div className={cn(
    "glass-panel p-6 flex flex-col items-center text-center opacity-0 transition-all duration-700 ease-out transform translate-y-8",
    isVisible ? `opacity-100 translate-y-0 transition-delay-${delay}` : ""
  )}>
    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-data-blue" />
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const AboutSection = () => {
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

  const skills = [
    {
      icon: BarChart,
      title: 'Data Visualization',
      description: 'Creating clear, interactive visualizations that tell compelling data stories.'
    },
    {
      icon: Database,
      title: 'Data Analysis',
      description: 'Analyzing complex datasets to extract meaningful insights and patterns.'
    },
    {
      icon: LineChart,
      title: 'Dashboard Design',
      description: 'Designing intuitive dashboards with relevant KPIs and interactive elements.'
    },
    {
      icon: Code,
      title: 'Programming',
      description: 'Writing clean, efficient code in Python, R, and SQL for data manipulation.'
    },
    {
      icon: PieChart,
      title: 'Business Intelligence',
      description: 'Transforming raw data into actionable business intelligence.'
    },
    {
      icon: ChartPie,
      title: 'Predictive Analytics',
      description: 'Developing models to forecast trends and support data-driven decisions.'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="bg-gradient-to-b from-white to-secondary/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className={`inline-block py-1 px-3 rounded-full text-xs font-medium bg-data-purple/10 text-data-purple mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              About Me
            </span>
            
            <h2 className={`section-heading ${isVisible ? 'animate-fade-in delayed-300' : 'opacity-0'}`}>
              Passionate about turning data into visual stories
            </h2>
            
            <div className={`space-y-4 text-muted-foreground ${isVisible ? 'animate-fade-in delayed-500' : 'opacity-0'}`}>
              <p>
                I'm a data visualization specialist with over 5 years of experience transforming complex datasets into clear, actionable insights through compelling visual narratives.
              </p>
              <p>
                My approach combines analytical rigor with design principles to create visualizations that are both informative and aesthetically pleasing. I believe that effective data visualization is about finding the perfect balance between complexity and clarity.
              </p>
              <p>
                With expertise in tools like Tableau, Power BI, and programming languages such as Python and R, I help organizations make data-driven decisions through intuitive and interactive visualizations.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-tr from-data-blue/10 to-data-teal/10 blur-3xl transform -rotate-6" />
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Data Visualization" 
              className={`w-full h-[400px] object-cover rounded-2xl shadow-lg ${isVisible ? 'animate-fade-in delayed-700' : 'opacity-0'}`}
            />
          </div>
        </div>
        
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className={`text-2xl font-medium ${isVisible ? 'animate-fade-in delayed-300' : 'opacity-0'}`}>Core Competencies</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                delay={(index + 1) * 100}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
