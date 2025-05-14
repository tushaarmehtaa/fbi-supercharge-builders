
import { Button } from "@/components/ui/button";
import Counter from "@/components/Counter";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-fbi-blue/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-fbi-purple/10 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-fbi-orange/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-fbi-blue font-medium text-sm mb-2 animate-pulse-slow">
              Farcaster Builders India
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display">
              <span className="text-gradient">Building</span> the next 
              <br />
              <span className="text-gradient">10,000 builders</span> on
              <br />
              the Superchain
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              A collective of Indian founders, builders, and operators accelerating the Superchain ecosystem through community-focused programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-fbi-blue hover:bg-fbi-indigo">
                <Link to="/programs">
                  Explore Programs
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-fbi-blue text-fbi-blue hover:bg-fbi-blue/5">
                <a href="https://t.me/farcasterbuildersindia" target="_blank" rel="noopener noreferrer">
                  Join Community
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 border w-full max-w-md">
              <h3 className="text-lg font-medium text-center mb-6">Our Journey to 10,000</h3>
              <div className="flex justify-center">
                <Counter 
                  targetNumber={742} 
                  className="text-4xl md:text-5xl font-bold text-fbi-blue"
                  suffix=" / 10,000"
                />
              </div>
              <div className="mt-6 bg-gray-200 h-4 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-fbi-blue to-fbi-purple h-full rounded-full" style={{ width: '7.42%' }} />
              </div>
              <p className="text-center text-gray-500 mt-4">
                Builders onboarded to the Superchain ecosystem
              </p>
            </div>
          </div>
        </div>

        {/* Floating success stories */}
        <div className="mt-16 relative h-16">
          <div className="absolute whitespace-nowrap animate-[slide_25s_linear_infinite]">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="inline-block">
                {successStories.map((story, index) => (
                  <div key={index} className="inline-block mx-4 px-4 py-3 bg-white rounded-lg shadow-sm border animate-float">
                    <p className="font-medium">{story.name} <span className="text-fbi-blue">{story.action}</span></p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample success stories for the floating animation
const successStories = [
  { name: "Rahul Sharma", action: "secured a job at Base" },
  { name: "Team Framestack", action: "launched a product" },
  { name: "TechSapiens", action: "raised $1.2M seed" },
  { name: "Priya Patel", action: "won the hackathon" },
  { name: "CodeNation", action: "deployed 3 new dApps" },
  { name: "Arjun Mehta", action: "joined Based Fellowship" },
];

export default Hero;
