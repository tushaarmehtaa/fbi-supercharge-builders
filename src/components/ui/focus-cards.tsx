import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export interface Card {
  id?: string;
  title: string;
  src: string;
  date?: string;
  location?: string;
}

export const FocusCards = ({
  cards,
  className,
}: {
  cards: Card[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4",
        className
      )}
    >
      {cards.map((card, idx) => (
        <div
          key={card.id || idx}
          className="relative group h-60 md:h-80 cursor-pointer overflow-hidden rounded-xl"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className={cn(
              "absolute inset-0 z-10 transition-all duration-300",
              hoveredIndex === idx
                ? "bg-black/0"
                : "bg-black/40"
            )}
          />
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${card.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: hoveredIndex === idx ? 1.05 : 1,
              filter: hoveredIndex === idx ? "blur(0px)" : "blur(2px)",
            }}
            transition={{ duration: 0.2 }}
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: hoveredIndex === idx ? 1 : 0,
                y: hoveredIndex === idx ? 0 : 10,
              }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 -m-4"
            >
              <h3 className="text-white font-bold text-xl mb-1">{card.title}</h3>
              {card.date && (
                <div className="flex items-center text-white/80 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {card.date}
                </div>
              )}
              {card.location && (
                <div className="flex items-center text-white/80 text-sm mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {card.location}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};
