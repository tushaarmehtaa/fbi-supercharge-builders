import React from "react";
import { AvatarCircles } from "./ui/avatar-circles";

// Sample avatar data - replace with actual community member avatars
const avatars = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=1",
    profileUrl: "https://github.com/user1",
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=2",
    profileUrl: "https://github.com/user2",
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=3",
    profileUrl: "https://github.com/user3",
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=4",
    profileUrl: "https://github.com/user4",
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=5",
    profileUrl: "https://github.com/user5",
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=6",
    profileUrl: "https://github.com/user6",
  },
];

interface LoveFromBuildersProps {
  children: React.ReactNode;
}

const LoveFromBuilders = ({ children }: LoveFromBuildersProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-2 text-white">
          LOVE FROM BUILDERS
        </h2>
        <AvatarCircles numPeople={99} avatarUrls={avatars} className="mb-4" />
      </div>
      {children}
    </div>
  );
};

export default LoveFromBuilders;
