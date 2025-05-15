import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ProgramWobbleCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {/* Sandbox Card */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-emerald-900 to-emerald-950 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <div className="inline-block bg-black/30 px-3 py-1 rounded-full text-xs mb-4">
            🔆 Light Commitment
          </div>
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            sandbox
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            build for fun. programs where you ship an MVP.
          </p>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center text-neutral-200">
              <span className="mr-2">•</span>
              Hyperthons
            </li>
            <li className="flex items-center text-neutral-200">
              <span className="mr-2">•</span>
              speed coding workshops
            </li>
            <li className="flex items-center text-neutral-200">
              <span className="mr-2">•</span>
              virtual events
            </li>
            <li className="flex items-center text-neutral-200">
              <span className="mr-2">•</span>
              open community for dialogue
            </li>
          </ul>
          <Button className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-black">
            <Link to="/programs">Learn More</Link>
          </Button>
        </div>
      </WobbleCard>

      {/* Launchpad Card */}
      <WobbleCard 
        containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-blue-900 to-blue-950"
      >
        <div className="inline-block bg-black/30 px-3 py-1 rounded-full text-xs mb-4">
          🔷 Medium Commitment
        </div>
        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          launchpad
        </h2>
        <p className="mt-4 text-left text-base/6 text-neutral-200">
          for those who want to build a startup.
        </p>
        <ul className="mt-6 space-y-2">
          <li className="flex items-center text-neutral-200">
            <span className="mr-2">•</span>
            online
          </li>
          <li className="flex items-center text-neutral-200">
            <span className="mr-2">•</span>
            Cohort based program
          </li>
          <li className="flex items-center text-neutral-200">
            <span className="mr-2">•</span>
            Access to community
          </li>
        </ul>
        <Button className="mt-6 bg-blue-500 hover:bg-blue-600 text-black">
          <Link to="/programs">Learn More</Link>
        </Button>
      </WobbleCard>

      {/* Fellowship Card */}
      <WobbleCard 
        containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-purple-900 to-purple-950 min-h-[500px] lg:min-h-[300px]"
      >
        <div className="max-w-sm">
          <div className="inline-block bg-black/30 px-3 py-1 rounded-full text-xs mb-4">
            🔶 High Commitment
          </div>
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            fellowship
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            for those who want to build with a community.
          </p>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center text-neutral-200">
              <span className="mr-2">•</span>
              offline first
            </li>
            <li className="flex items-center text-neutral-200">
              <span className="mr-2">•</span>
              dedicated pods and mentors
            </li>
            <li className="flex items-center text-neutral-200">
              <span className="mr-2">•</span>
              Access to a closed community for a year
            </li>
          </ul>
          <Button className="mt-6 bg-purple-500 hover:bg-purple-600 text-black">
            <Link to="/programs">Learn More</Link>
          </Button>
        </div>
      </WobbleCard>
    </div>
  );
};

export default ProgramWobbleCards;
