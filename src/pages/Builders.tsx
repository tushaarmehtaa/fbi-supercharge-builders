import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search, PlusCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BuilderCard, { BuilderCardProps } from "@/components/BuilderCard";

// Temporary mock data - this will be replaced with data from Notion
const mockBuilders: BuilderCardProps[] = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Full Stack Developer",
    bio: "Building decentralized applications with a focus on user experience and security. Passionate about Web3 education.",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    skills: ["React", "TypeScript", "Solidity", "Ethereum", "Node.js"],
    projects: ["DeFi Platform", "NFT Marketplace"]
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Blockchain Engineer",
    bio: "Specializing in smart contract development and security audits. Building the future of decentralized finance.",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    skills: ["Solidity", "Rust", "Ethereum", "Zero-Knowledge Proofs"],
    projects: ["L2 Scaling"]
  },
  {
    id: "3",
    name: "Marcus Rodriguez",
    role: "Frontend Developer",
    bio: "Creating beautiful and intuitive interfaces for Web3 applications. Focused on making blockchain accessible to everyone.",
    avatarUrl: "https://randomuser.me/api/portraits/men/22.jpg",
    skills: ["React", "TypeScript", "Next.js", "Web3.js", "Tailwind CSS"],
    projects: ["DAO Dashboard", "NFT Gallery"]
  },
  {
    id: "4",
    name: "Priya Patel",
    role: "Product Manager",
    bio: "Bridging the gap between users and developers. Passionate about building products that solve real problems.",
    avatarUrl: "https://randomuser.me/api/portraits/women/63.jpg",
    skills: ["Product Strategy", "User Research", "Agile", "Web3"],
    projects: ["DeFi Platform"]
  },
  {
    id: "5",
    name: "Jamal Williams",
    role: "Smart Contract Developer",
    bio: "Security-focused developer with experience in DeFi protocols. Committed to building secure and efficient smart contracts.",
    avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    skills: ["Solidity", "Ethereum", "Security", "DeFi"],
    projects: ["Lending Protocol", "DEX"]
  },
  {
    id: "6",
    name: "Elena Petrova",
    role: "UX/UI Designer",
    bio: "Designing intuitive experiences for Web3. Making complex blockchain interactions simple and enjoyable.",
    avatarUrl: "https://randomuser.me/api/portraits/women/28.jpg",
    skills: ["Figma", "UI/UX", "Prototyping", "User Testing"],
    projects: ["Wallet App", "NFT Platform"]
  }
];

const Builders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [builders, setBuilders] = useState<BuilderCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // In a real implementation, this would fetch from your Notion database
  useEffect(() => {
    // Simulate API call
    const fetchBuilders = async () => {
      try {
        // TODO: Replace with actual Notion API call
        // const response = await fetch('/api/builders');
        // const data = await response.json();
        // setBuilders(data);
        
        // Using mock data for now
        setBuilders(mockBuilders);
      } catch (error) {
        console.error("Error fetching builders:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBuilders();
  }, []);

  // Filter builders based on search query
  const filteredBuilders = builders.filter(
    (builder) =>
      builder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      builder.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      builder.skills.some(skill => 
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-fbi-blue"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Meet Our <span className="text-fbi-blue">Builders</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A community of passionate individuals building the future of the Superchain ecosystem.
            Join us and be part of something bigger.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search builders by name, role, or skills..."
              className="pl-10 py-6 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Builders Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Featured Builders</h2>
            <p className="text-gray-600">
              {filteredBuilders.length} {filteredBuilders.length === 1 ? 'builder' : 'builders'} found
            </p>
          </div>
          
          {filteredBuilders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBuilders.map((builder) => (
                <BuilderCard key={builder.id} {...builder} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-medium mb-2">No builders found</h3>
              <p className="text-gray-500">
                Try adjusting your search or check back later for new builders.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-8 overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-fbi-blue to-fbi-purple opacity-90"></div>
              <div className="relative z-10 p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Could This Be You?</h2>
                <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                  Join our growing community of builders and be part of the next wave of Web3 innovation.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-fbi-blue hover:bg-gray-100 hover:text-fbi-blue/90 transition-colors"
                  onClick={() => {
                    // TODO: Implement navigation to onboarding form
                    console.log('Navigate to onboarding form');
                  }}
                >
                  Become a Builder
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Builders;
