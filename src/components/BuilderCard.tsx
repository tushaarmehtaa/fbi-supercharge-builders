import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface BuilderCardProps {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  skills: string[];
  projects?: string[];
  className?: string;
}

const BuilderCard = ({
  id,
  name,
  role,
  bio,
  avatarUrl,
  skills = [],
  projects = [],
  className = "",
}: BuilderCardProps) => {
  // Generate initials from name for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card className={`overflow-hidden transition-all hover:shadow-lg ${className}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16 border-2 border-fbi-blue">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="bg-fbi-blue/10 text-fbi-blue">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-gray-600 line-clamp-3">{bio}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 pt-4 border-t">
        {Array.isArray(skills) && skills.slice(0, 3).map((skill, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {skill}
          </Badge>
        ))}
        {Array.isArray(skills) && skills.length > 3 && (
          <Badge variant="outline" className="text-xs">
            +{skills.length - 3} more
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
};

export default BuilderCard;
