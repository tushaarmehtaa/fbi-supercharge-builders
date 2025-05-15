
import { Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  type: "virtual" | "inPerson" | "hybrid";
  registrationLink: string;
  className?: string;
}

const EventCard = ({
  title,
  description,
  date,
  location,
  type,
  registrationLink,
  className = "",
}: EventCardProps) => {
  const eventTypeLabels = {
    virtual: "Virtual Event",
    inPerson: "In-Person Event",
    hybrid: "Hybrid Event",
  };

  const eventTypeColors = {
    virtual: "bg-fbi-teal text-white",
    inPerson: "bg-fbi-orange text-white",
    hybrid: "bg-fbi-purple text-white",
  };

  return (
    <Card className={`overflow-hidden card-hover ${className}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <Badge className={eventTypeColors[type]}>{eventTypeLabels[type]}</Badge>
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
        </div>
        <CardTitle className="text-lg mt-2 text-foreground">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{location}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-fbi-blue hover:bg-fbi-indigo">
          <a href={registrationLink} target="_blank" rel="noopener noreferrer">
            Register
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
