import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProgramCardProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  level: "lightweight" | "medium" | "heavyweight";
  className?: string;
}

const ProgramCard = ({
  title,
  description,
  features,
  link,
  level,
  className = "",
}: ProgramCardProps) => {
  const levelColors = {
    lightweight: "bg-gradient-to-br from-fbi-teal to-fbi-green",
    medium: "bg-gradient-to-br from-fbi-blue to-fbi-indigo",
    heavyweight: "bg-gradient-to-br from-fbi-purple to-fbi-indigo",
  };

  const levelBadge = {
    lightweight: "💡 Light Commitment",
    medium: "🔄 Medium Commitment",
    heavyweight: "🚀 High Commitment",
  };

  return (
    <Card className={`flex flex-col overflow-hidden card-hover h-full ${className}`}>
      <div className={`h-2 ${levelColors[level]}`} />
      {/* Wrapper for header and content that will grow */}
      <div className="flex-grow">
        <CardHeader>
          <div className="text-xs font-semibold text-white rounded-full px-3 py-1 mb-2 w-fit bg-fbi-gray">
            {levelBadge[level]}
          </div>
          <CardTitle className="text-xl text-foreground">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </CardContent>
      </div>
      {/* Footer will be pushed to the bottom */}
      <CardFooter>
        <Button asChild className={`w-full ${level === "lightweight" ? "bg-fbi-teal hover:bg-fbi-green" : level === "medium" ? "bg-fbi-blue hover:bg-fbi-indigo" : "bg-fbi-purple hover:bg-fbi-indigo"}`}>
          <Link to="/programs">Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
