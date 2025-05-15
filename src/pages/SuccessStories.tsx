import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SuccessStoryCard from "@/components/SuccessStoryCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Define the specific types for story categories
type StoryCategory = "Product" | "Job" | "Funding";

// Define the interface for a story object
interface Story {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  category: StoryCategory;
  program: string;
}

const SuccessStories = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter stories based on search query
  const filteredStories = successStories.filter(
    (story) =>
      story.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Success <span className="text-gradient">Stories</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Celebrating the achievements of FBI community members who are making an impact on the Superchain ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Success stories section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Search and filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  placeholder="Search success stories..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Tabs defaultValue="all" className="w-full md:w-auto">
                <TabsList className="grid grid-cols-4 sm:w-[400px]">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="product">Products</TabsTrigger>
                  <TabsTrigger value="job">Jobs</TabsTrigger>
                  <TabsTrigger value="funding">Funding</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story) => (
                <SuccessStoryCard
                  key={story.id}
                  id={story.id}
                  name={story.name}
                  title={story.title}
                  description={story.description}
                  image={story.image}
                  category={story.category}
                  program={story.program}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="product" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories
                .filter((story) => story.category === "Product")
                .map((story) => (
                  <SuccessStoryCard
                    key={story.id}
                    id={story.id}
                    name={story.name}
                    title={story.title}
                    description={story.description}
                    image={story.image}
                    category={story.category}
                    program={story.program}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="job" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories
                .filter((story) => story.category === "Job")
                .map((story) => (
                  <SuccessStoryCard
                    key={story.id}
                    id={story.id}
                    name={story.name}
                    title={story.title}
                    description={story.description}
                    image={story.image}
                    category={story.category}
                    program={story.program}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="funding" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories
                .filter((story) => story.category === "Funding")
                .map((story) => (
                  <SuccessStoryCard
                    key={story.id}
                    id={story.id}
                    name={story.name}
                    title={story.title}
                    description={story.description}
                    image={story.image}
                    category={story.category}
                    program={story.program}
                  />
                ))}
            </div>
          </TabsContent>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Hear from Our Community</h2>
            <p className="text-gray-600">
              Insights and experiences from members who have participated in FBI programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact metrics section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Our Impact</h2>
            <p className="text-gray-600">
              The measurable difference FBI programs are making in the Superchain ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-fbi-blue">742</h3>
              <p className="text-gray-600 mt-2">Builders Onboarded</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-fbi-purple">85+</h3>
              <p className="text-gray-600 mt-2">Products Launched</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-fbi-green">120+</h3>
              <p className="text-gray-600 mt-2">Jobs Secured</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-fbi-orange">$8.5M+</h3>
              <p className="text-gray-600 mt-2">Funding Raised</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data for success stories
const successStories: Story[] = [
  {
    id: "1",
    name: "TechSapiens",
    title: "Raised $1.2M Seed Round",
    description: "Built a decentralized identity solution on Base and secured funding after participating in the Based Fellowship program.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Funding",
    program: "Based Fellowship"
  },
  {
    id: "2",
    name: "Rahul Sharma",
    title: "From Web2 to Onchain Engineer",
    description: "Transitioned from a traditional software role to a position at Base after completing the SuperBased program.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Job",
    program: "SuperBased"
  },
  {
    id: "3",
    name: "FrameStack Team",
    title: "Launched FrameSync App",
    description: "Built and launched a successful frames management tool after participating in the FBI Frames Hackathon.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Product",
    program: "Hyperthons"
  },
  {
    id: "4",
    name: "DappMatrix",
    title: "Secured $750K Pre-seed Round",
    description: "Created a comprehensive analytics platform for Farcaster Frames and secured funding from top crypto VCs.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Funding",
    program: "Onchain Summercamp"
  },
  {
    id: "5",
    name: "Priya Patel",
    title: "Joined Coinbase as Engineer",
    description: "Leveraged skills gained in the SuperBased program to secure a role at Coinbase, focused on Superchain integration.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Job",
    program: "SuperBased"
  },
  {
    id: "6",
    name: "Frameworx",
    title: "100K+ Monthly Active Users",
    description: "Built a Frame creation tool during a Hyperthon that now serves over 100,000 monthly active users.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Product",
    program: "Hyperthons"
  }
];

// Sample data for testimonials
const testimonials = [
  {
    name: "Vikram Mehta",
    role: "Co-founder, TechSapiens",
    quote: "The Based Fellowship program was transformative for our startup. The mentorship and connections helped us refine our product and secure funding much faster than we could have on our own.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Ananya Singh",
    role: "Onchain Developer, Base",
    quote: "SuperBased took me from being a curious web2 developer to landing my dream job in the Superchain ecosystem. The hands-on approach and supportive community made all the difference.",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Raj Kapoor",
    role: "Creator, FrameSync",
    quote: "The FBI Hyperthon gave me the push I needed to stop talking about my idea and actually build it. Six months later, we have thousands of users and are generating revenue.",
    image: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Sarah Thomas",
    role: "Engineering Lead, DappMatrix",
    quote: "Onchain Summercamp provided us with the deep technical expertise and industry connections we needed to build a complex analytics platform and attract investor attention.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

export default SuccessStories;
