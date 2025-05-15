
import { useState, useEffect } from "react";
import { GradientText } from "@/components/ui/gradient-text";

interface CounterProps {
  targetNumber: number;
  startNumber?: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const Counter = ({
  targetNumber,
  startNumber = 0,
  duration = 2000,
  className = "",
  prefix = "",
  suffix = "",
}: CounterProps) => {
  const [count, setCount] = useState(startNumber);

  useEffect(() => {
    // Calculate the number of steps based on the duration
    const steps = 40;
    const stepTime = duration / steps;
    const increment = (targetNumber - startNumber) / steps;
    let current = startNumber;
    let step = 0;

    const timer = setInterval(() => {
      step += 1;
      current += increment;
      
      if (step >= steps) {
        clearInterval(timer);
        setCount(targetNumber);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetNumber, startNumber, duration]);

  return (
    <div className={className}>
      <span>{prefix}</span>
      <GradientText 
        from="from-blue-500" 
        to="to-blue-300/80" 
        className="text-8xl font-semibold leading-none"
      >
        {count.toLocaleString()}
      </GradientText>
      <span>{suffix}</span>
    </div>
  );
};

export default Counter;
