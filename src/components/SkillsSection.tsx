
import { useEffect, useRef, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { LineChart, Line, CartesianGrid, Tooltip } from 'recharts';
import { PieChart, Pie } from 'recharts';
import { cn } from '@/lib/utils';

const skills = [
  { name: 'Data Analysis', level: 95, color: '#0EA5E9' },
  { name: 'Tableau', level: 90, color: '#14B8A6' },
  { name: 'Power BI', level: 85, color: '#8B5CF6' },
  { name: 'Python', level: 80, color: '#F59E0B' },
  { name: 'R', level: 75, color: '#EC4899' },
  { name: 'SQL', level: 90, color: '#0EA5E9' },
];

const analyticData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
];

const pieData = [
  { name: 'Analysis', value: 40, color: '#0EA5E9' },
  { name: 'Visualization', value: 30, color: '#14B8A6' },
  { name: 'Reporting', value: 20, color: '#8B5CF6' },
  { name: 'Presentations', value: 10, color: '#F59E0B' },
];

const SkillsSection = () => {
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
    <section ref={sectionRef} id="skills" className="bg-secondary/50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className={`inline-block py-1 px-3 rounded-full text-xs font-medium bg-data-blue/10 text-data-blue mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Expertise
          </span>
          <h2 className={`section-heading ${isVisible ? 'animate-fade-in delayed-300' : 'opacity-0'}`}>
            Data Visualization Skills
          </h2>
          <p className={`section-subheading ${isVisible ? 'animate-fade-in delayed-500' : 'opacity-0'}`}>
            I leverage the right tools and techniques to transform complex datasets into clear, actionable insights through compelling visualizations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          <div className={`glass-panel p-6 ${isVisible ? 'animate-fade-up stagger-1' : 'opacity-0'}`}>
            <h3 className="text-xl font-medium mb-6">Technical Proficiency</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={skills}
                  margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
                  layout="vertical"
                >
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    tick={{ fontSize: 14 }} 
                    width={100}
                  />
                  <Bar 
                    dataKey="level" 
                    radius={[0, 4, 4, 0]} 
                    animationDuration={1500}
                    animationEasing="ease-out"
                    animationBegin={isVisible ? 300 : 0}
                  >
                    {skills.map((skill, index) => (
                      <Cell key={index} fill={skill.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={`grid grid-cols-1 gap-6 ${isVisible ? 'animate-fade-up stagger-2' : 'opacity-0'}`}>
            <div className="glass-panel p-6">
              <h3 className="text-xl font-medium mb-4">Data Trends Analysis</h3>
              <div className="h-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={analyticData}>
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#0EA5E9" 
                      strokeWidth={2} 
                      dot={{ r: 4 }}
                      animationDuration={1500}
                      animationEasing="ease-out"
                      animationBegin={isVisible ? 600 : 0}
                    />
                    <CartesianGrid stroke="#f5f5f5" strokeDasharray="5 5" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis width={40} tick={{ fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '8px', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        border: 'none',
                        fontSize: '12px'
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass-panel p-6">
              <h3 className="text-xl font-medium mb-4">Typical Project Breakdown</h3>
              <div className="h-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      dataKey="value"
                      animationDuration={1500}
                      animationEasing="ease-out"
                      animationBegin={isVisible ? 900 : 0}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => [`${value}%`, '']}
                      contentStyle={{ 
                        borderRadius: '8px', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        border: 'none',
                        fontSize: '12px'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {pieData.map((item, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <span 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: item.color }}
                    ></span>
                    <span>{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
