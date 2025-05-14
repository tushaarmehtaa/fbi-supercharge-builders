
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Link as LinkIcon } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  type: "document" | "link" | "video";
  url: string;
  className?: string;
}

const ResourceCard = ({
  title,
  description,
  type,
  url,
  className = "",
}: ResourceCardProps) => {
  return (
    <Card className={`overflow-hidden h-full card-hover ${className}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          {type === "document" && <FileText size={20} className="text-fbi-blue" />}
          {type === "link" && <LinkIcon size={20} className="text-fbi-green" />}
          {type === "video" && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 8L16 12L10 16V8Z" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild variant="outline" className="w-full">
          <a href={url} target="_blank" rel="noopener noreferrer">
            View Resource
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
