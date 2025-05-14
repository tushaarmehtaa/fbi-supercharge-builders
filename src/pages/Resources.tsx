
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceCard from "@/components/ResourceCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter resources based on search query
  const filteredResources = allResources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              FBI <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Access all the tools, guides, and resources you need to build on the Superchain ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Resources section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Search and filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  placeholder="Search resources..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Tabs defaultValue="all" className="w-full md:w-auto">
                <TabsList className="grid grid-cols-4 sm:w-[400px]">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="document">Docs</TabsTrigger>
                  <TabsTrigger value="link">Links</TabsTrigger>
                  <TabsTrigger value="video">Videos</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* FBI Brandbook section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-display mb-8">FBI Brandbook</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources
                .filter((resource) => resource.category === "brandbook")
                .map((resource, index) => (
                  <ResourceCard
                    key={index}
                    title={resource.title}
                    description={resource.description}
                    type={resource.type}
                    url={resource.url}
                  />
                ))}
            </div>
          </div>

          {/* $DEGEN for Rookies section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-display mb-8">$DEGEN for Rookies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources
                .filter((resource) => resource.category === "degen")
                .map((resource, index) => (
                  <ResourceCard
                    key={index}
                    title={resource.title}
                    description={resource.description}
                    type={resource.type}
                    url={resource.url}
                  />
                ))}
            </div>
          </div>

          {/* Developer Resources section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-display mb-8">Developer Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources
                .filter((resource) => resource.category === "developer")
                .map((resource, index) => (
                  <ResourceCard
                    key={index}
                    title={resource.title}
                    description={resource.description}
                    type={resource.type}
                    url={resource.url}
                  />
                ))}
            </div>
          </div>

          {/* Frames Resources section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-display mb-8">Frames Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources
                .filter((resource) => resource.category === "frames")
                .map((resource, index) => (
                  <ResourceCard
                    key={index}
                    title={resource.title}
                    description={resource.description}
                    type={resource.type}
                    url={resource.url}
                  />
                ))}
            </div>
          </div>

          {/* Farcaster 101 section */}
          <div>
            <h2 className="text-2xl font-bold font-display mb-8">Farcaster 101</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources
                .filter((resource) => resource.category === "farcaster")
                .map((resource, index) => (
                  <ResourceCard
                    key={index}
                    title={resource.title}
                    description={resource.description}
                    type={resource.type}
                    url={resource.url}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contribute section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-display mb-6">Contribute Resources</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have resources to share with the FBI community? Submit them for inclusion in our resource library.
            </p>
            <Button asChild className="bg-fbi-blue hover:bg-fbi-indigo">
              <a href="mailto:resources@fbi.community">Submit Resources</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data for resources
const allResources = [
  {
    title: "FBI Logo Kit & Brand Guidelines",
    description: "Complete brand package with logos, colors, typography, and usage guidelines.",
    type: "document" as const,
    url: "#",
    category: "brandbook"
  },
  {
    title: "FBI Presentation Templates",
    description: "Ready-to-use templates for creating presentations about FBI initiatives.",
    type: "document" as const,
    url: "#",
    category: "brandbook"
  },
  {
    title: "FBI Social Media Assets",
    description: "Graphics and templates optimized for various social media platforms.",
    type: "document" as const,
    url: "#",
    category: "brandbook"
  },
  {
    title: "What is $DEGEN?",
    description: "A comprehensive guide to understanding the $DEGEN token and its role in the ecosystem.",
    type: "document" as const,
    url: "#",
    category: "degen"
  },
  {
    title: "Getting Started with $DEGEN",
    description: "Step-by-step instructions for acquiring and using $DEGEN tokens.",
    type: "link" as const,
    url: "#",
    category: "degen"
  },
  {
    title: "$DEGEN Use Cases Explained",
    description: "Video walkthrough of the various utilities and applications of $DEGEN.",
    type: "video" as const,
    url: "#",
    category: "degen"
  },
  {
    title: "Base Developer Documentation",
    description: "Official documentation for building applications on Base.",
    type: "link" as const,
    url: "#",
    category: "developer"
  },
  {
    title: "Superchain Architecture Overview",
    description: "Technical deep dive into the Superchain architecture and how it works.",
    type: "document" as const,
    url: "#",
    category: "developer"
  },
  {
    title: "Smart Contract Development Guide",
    description: "Best practices and patterns for developing secure smart contracts on Base.",
    type: "document" as const,
    url: "#",
    category: "developer"
  },
  {
    title: "Frames SDK Documentation",
    description: "Technical documentation for using the Frames SDK to build interactive Farcaster Frames.",
    type: "link" as const,
    url: "#",
    category: "frames"
  },
  {
    title: "Frames Design Best Practices",
    description: "Guidelines and tips for designing effective and engaging Frames.",
    type: "document" as const,
    url: "#",
    category: "frames"
  },
  {
    title: "Building Your First Frame",
    description: "Hands-on video tutorial walking through the process of creating a basic Frame.",
    type: "video" as const,
    url: "#",
    category: "frames"
  },
  {
    title: "What is Farcaster?",
    description: "An introduction to Farcaster and its role in the decentralized social ecosystem.",
    type: "document" as const,
    url: "#",
    category: "farcaster"
  },
  {
    title: "Setting Up Your Farcaster Account",
    description: "Step-by-step guide to creating and configuring your Farcaster account.",
    type: "link" as const,
    url: "#",
    category: "farcaster"
  },
  {
    title: "Farcaster Protocol Overview",
    description: "Technical overview of how the Farcaster protocol works and its key components.",
    type: "video" as const,
    url: "#",
    category: "farcaster"
  }
];

export default Resources;
