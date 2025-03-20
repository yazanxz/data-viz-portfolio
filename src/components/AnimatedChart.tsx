
import { useEffect, useRef, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

interface AnimatedChartProps {
  data?: any[];
  className?: string;
  color?: string;
  isVisible?: boolean;
}

// Generate sample data if none provided
const generateData = () => {
  const data = [];
  for (let i = 0; i < 12; i++) {
    const randomFactor = Math.random();
    const baseValue = 1000 + Math.sin(i / 2) * 500;
    data.push({
      name: String.fromCharCode(65 + i),
      value: Math.floor(baseValue + randomFactor * 800),
    });
  }
  return data;
};

const AnimatedChart = ({ 
  data = generateData(), 
  className, 
  color = "#0EA5E9",
  isVisible = true
}: AnimatedChartProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && !isLoaded) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, isLoaded]);

  const gradientId = `colorGradient-${color.replace('#', '')}`;

  return (
    <div 
      ref={chartRef} 
      className={cn(
        "w-full h-full opacity-0 transition-opacity duration-700 ease-out",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={color} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }} 
            stroke="#94a3b8" 
            axisLine={{ stroke: '#e2e8f0' }}
          />
          <YAxis 
            tick={{ fontSize: 12 }} 
            stroke="#94a3b8" 
            axisLine={{ stroke: '#e2e8f0' }}
            width={40}
          />
          <Tooltip 
            contentStyle={{ 
              borderRadius: '8px', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: 'none',
              fontSize: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)'
            }} 
            itemStyle={{ color: color }}
            formatter={(value: number) => [`${value.toLocaleString()}`, 'Value']}
          />
          <Area 
            type="monotone" 
            dataKey="value"
            stroke={color}
            fillOpacity={1}
            fill={`url(#${gradientId})`}
            strokeWidth={2}
            animationDuration={1500}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnimatedChart;
