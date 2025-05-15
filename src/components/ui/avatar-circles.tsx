import React from "react";
import { cn } from "@/lib/utils";

interface Avatar {
  imageUrl: string;
  profileUrl?: string;
}

interface AvatarCirclesProps {
  numPeople: number;
  avatarUrls: Avatar[];
  className?: string;
}

export const AvatarCircles = ({
  numPeople,
  avatarUrls,
  className,
}: AvatarCirclesProps) => {
  const displayAvatars = avatarUrls.slice(0, 6); // Display max 6 avatars
  const remainingCount = numPeople - displayAvatars.length;

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="flex -space-x-3">
        {displayAvatars.map((avatar, index) => (
          <a
            key={index}
            href={avatar.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block rounded-full ring-2 ring-black overflow-hidden transition-transform hover:scale-110 hover:z-10"
          >
            <img
              src={avatar.imageUrl}
              alt={`Community member ${index + 1}`}
              className="h-8 w-8 rounded-full object-cover"
            />
          </a>
        ))}
        {remainingCount > 0 && (
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-medium text-white ring-2 ring-black">
            +{remainingCount}
          </div>
        )}
      </div>
    </div>
  );
};
