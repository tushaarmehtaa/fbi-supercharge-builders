
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface SuccessStoryCardProps {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  category: "Product" | "Job" | "Funding";
  program: string;
  className?: string;
}

const SuccessStoryCard = ({
  id,
  name,
  title,
  description,
  image,
  category,
  program,
  className = "",
}: SuccessStoryCardProps) => {
  const categoryColors = {
    Product: "bg-fbi-blue hover:bg-fbi-blue/80",
    Job: "bg-fbi-green hover:bg-fbi-green/80",
    Funding: "bg-fbi-purple hover:bg-fbi-purple/80",
  };

  return (
    <Link to={`/success-stories/${id}`}>
      <Card className={`overflow-hidden h-full card-hover ${className}`}>
        <div className="relative h-48 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <Badge className={`absolute top-3 right-3 ${categoryColors[category]}`}>
            {category}
          </Badge>
        </div>
        <CardHeader>
          <CardTitle className="text-lg">{name}</CardTitle>
          <CardDescription className="font-medium text-fbi-dark">{title}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm line-clamp-3 text-gray-600">{description}</p>
        </CardContent>
        <CardFooter className="text-xs text-gray-500">
          Program: {program}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default SuccessStoryCard;
