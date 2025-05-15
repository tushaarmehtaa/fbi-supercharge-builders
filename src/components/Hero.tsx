import { Button } from "@/components/ui/button";
import Counter from "@/components/Counter";
import { Link } from "react-router-dom";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { useEffect, useRef, useState } from "react";

// YouTube background video component with proper styling
const YouTubeBackground = ({ videoId }: { videoId: string }) => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      <div className="relative w-full h-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&playlist=${videoId}&modestbranding=1&enablejsapi=1`}
          className="absolute top-50% left-50% w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="FBI Background Video"
        ></iframe>
      </div>
    </div>
  );
};

const Hero = () => {
  // Use the FBI video provided by the user
  const videoId = "AuT6B4ymidg"; // FBI video
  return (
    // Full viewport height, starting from the very top of the page
    <div className="relative overflow-hidden text-foreground h-screen w-full flex flex-col justify-center">
      {/* YouTube Video Background */}
      <YouTubeBackground videoId={videoId} />
      {/* Overlay for text readability - z-index adjusted */}
      <div className="absolute inset-0 w-full h-full bg-black/80 z-20"></div>

      {/* Abstract background shapes - HTML restored and z-index adjusted */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-fbi-blue/10 blur-3xl opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-fbi-purple/10 blur-3xl opacity-50"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-fbi-orange/10 blur-3xl opacity-50"></div>
      </div>

      {/* Content Container - z-index adjusted */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-30">
        <div className="flex flex-col items-center text-center gap-6 md:gap-8">
          <div className="flex-1 space-y-4 md:space-y-6"> 
            <h1 className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              <LineShadowText shadowColor="#3b82f6">
                Farcaster Builders International
              </LineShadowText>
            </h1>
            <p className="text-xl text-white max-w-xl mx-auto text-shadow-md">
              we’re a collective of devs, designers, founders & internet kids
              shipping cool shit onchain.
            </p>
            {/* Updated counter section with gradient effect */}
            <div className="text-center max-w-xl mx-auto relative">
              <div className="relative overflow-hidden rounded-lg py-8">
                <Counter targetNumber={742} />
                <span className="text-white text-2xl md:text-3xl ml-2">{' / 10,000'}</span>
                <p className="text-sm text-white italic mt-1">
                  already in. you in?
                </p>
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button
                className="bg-fbi-blue hover:bg-fbi-indigo text-white"
                size="lg"
                onClick={() => {
                  // Handle join community click
                }}
              >
                <a href="https://t.me/+pX7NaIjUojBhYjM1" target="_blank" rel="noopener noreferrer">
                  [ join the community ]
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
