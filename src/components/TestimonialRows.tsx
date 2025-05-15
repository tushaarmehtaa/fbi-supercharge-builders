import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import "./ui/infinite-moving-cards.css";

interface TestimonialRowsProps {
  testimonials: Array<{
    quote: string;
    name: string;
    title?: string;
  }>;
}

const TestimonialRows = ({ testimonials }: TestimonialRowsProps) => {
  // Split testimonials into two groups for two rows
  const midpoint = Math.ceil(testimonials.length / 2);
  const firstRowItems = testimonials.slice(0, midpoint);
  const secondRowItems = testimonials.slice(midpoint);

  return (
    <div className="w-full overflow-hidden py-2">
      <div className="mb-4">
        <InfiniteMovingCards
          items={firstRowItems}
          direction="left"
          speed="slow"
        />
      </div>
      <div>
        <InfiniteMovingCards
          items={secondRowItems}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default TestimonialRows;
