import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Search, PlusCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BuilderCard, { BuilderCardProps } from "@/components/BuilderCard";
import { supabase } from '@/lib/supabaseClient';

// Mock data can be kept for reference or testing if needed
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
// The above mockBuilders array is no longer used directly for display but can be kept for reference or testing.

const Builders = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [builders, setBuilders] = useState<BuilderCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // In a real implementation, this would fetch from your Notion database
  useEffect(() => {
    const fetchBuilders = async () => {
      try {
        const { data, error } = await supabase
          .from('builders')
          .select('*')
          .order('created_at', { ascending: false }); // Show newest first

        if (error) {
          throw error;
        }

        if (data) {
          // Map Supabase data to BuilderCardProps if necessary
          // Assuming column names match the props directly
          // If avatar_url is null from DB, BuilderCard should handle a default or no image
          const fetchedBuilders: BuilderCardProps[] = data.map(builder => {
            console.log('Builder skills type:', typeof builder.skills, 'Value:', builder.skills);
            const rawSkills = builder.skills;
            let skillsArray: string[] = [];
            if (Array.isArray(rawSkills)) {
              skillsArray = rawSkills.filter(item => typeof item === 'string'); // Ensure all items are strings
            } else if (typeof rawSkills === 'string' && rawSkills.trim() !== '') {
              if (rawSkills.startsWith('[') && rawSkills.endsWith(']')) {
                try {
                  const parsed = JSON.parse(rawSkills);
                  if (Array.isArray(parsed)) {
                    skillsArray = parsed.filter(item => typeof item === 'string');
                  } else { // If parsed is not an array, fall back to comma separation
                    skillsArray = rawSkills.split(',').map(s => s.trim()).filter(s => s !== '');
                  }
                } catch (e) { // If JSON.parse fails, fall back to comma separation
                  skillsArray = rawSkills.split(',').map(s => s.trim()).filter(s => s !== '');
                }
              } else { // Not a JSON string, assume comma-separated
                skillsArray = rawSkills.split(',').map(s => s.trim()).filter(s => s !== '');
              }
            }

            const rawProjects = builder.projects;
            let projectsArray: string[] = [];
            if (Array.isArray(rawProjects)) {
              projectsArray = rawProjects.filter(item => typeof item === 'string');
            } else if (typeof rawProjects === 'string' && rawProjects.trim() !== '') {
              // Assuming projects could also be a comma-separated string or JSON string array
              if (rawProjects.startsWith('[') && rawProjects.endsWith(']')) {
                try {
                  const parsed = JSON.parse(rawProjects);
                  if (Array.isArray(parsed)) {
                    projectsArray = parsed.filter(item => typeof item === 'string');
                  } else {
                    projectsArray = rawProjects.split(',').map(s => s.trim()).filter(s => s !== '');
                  }
                } catch (e) {
                  projectsArray = rawProjects.split(',').map(s => s.trim()).filter(s => s !== '');
                }
              } else {
                projectsArray = rawProjects.split(',').map(s => s.trim()).filter(s => s !== '');
              }
            }

            return {
              id: builder.id.toString(),
              name: builder.name,
              role: builder.role,
              bio: builder.bio,
              avatarUrl: builder.avatar_url || undefined,
              skills: skillsArray,
              projects: projectsArray,
              // twitterUrl: builder.twitter_url || undefined,
              // githubUrl: builder.github_url || undefined,
              // linkedinUrl: builder.linkedin_url || undefined,
            };
          });
          setBuilders(fetchedBuilders);
        }
      } catch (error) {
        console.error("Error fetching builders from Supabase:", error);
        // Optionally, set an error state here to display to the user
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
      (Array.isArray(builder.skills) && builder.skills.some(skill => 
        typeof skill === 'string' && skill.toLowerCase().includes(searchQuery.toLowerCase())
      ))
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-fbi-blue"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Meet Our <span className="text-fbi-blue">Builders</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A community of passionate individuals building the future of the Superchain ecosystem.
            Join us and be part of something bigger.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
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
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Featured Builders</h2>
            <p className="text-muted-foreground">
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
              <div className="text-muted-foreground mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-medium mb-2">No builders found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or check back later for new builders.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-8 overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-fbi-blue to-fbi-purple opacity-90"></div>
              <div className="relative z-10 p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Be one of us</h2>
                <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                  Join our community of builders, operators and founders to be part of the crew who bring the entire world onchain.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-fbi-blue hover:bg-gray-100 hover:text-fbi-blue/90 transition-colors"
                  onClick={() => {
                    navigate('/become-a-builder');
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
