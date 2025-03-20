
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  tags,
  className,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "glass-panel overflow-hidden card-hover",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
        <img
          src={imageSrc}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-out",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        
        <div className={cn(
          "mt-4 overflow-hidden transition-all duration-300 ease-out",
          isHovered ? "max-h-10 opacity-100" : "max-h-0 opacity-0"
        )}>
          <button className="text-sm font-medium text-data-blue hover:text-data-teal transition-colors">
            View Project →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
