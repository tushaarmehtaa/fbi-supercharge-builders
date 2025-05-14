
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";

const Programs = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              FBI <span className="text-gradient">Programs</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Choose the right path based on your commitment level and accelerate your journey in the Superchain ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Programs section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="all">All Programs</TabsTrigger>
                <TabsTrigger value="lightweight">Lightweight</TabsTrigger>
                <TabsTrigger value="medium">Medium-weight</TabsTrigger>
                <TabsTrigger value="heavyweight">Heavyweight</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allPrograms.map((program) => (
                  <ProgramCard
                    key={program.title}
                    title={program.title}
                    description={program.description}
                    features={program.features}
                    link={program.link}
                    level={program.level}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="lightweight">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allPrograms
                  .filter((program) => program.level === "lightweight")
                  .map((program) => (
                    <ProgramCard
                      key={program.title}
                      title={program.title}
                      description={program.description}
                      features={program.features}
                      link={program.link}
                      level={program.level}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="medium">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allPrograms
                  .filter((program) => program.level === "medium")
                  .map((program) => (
                    <ProgramCard
                      key={program.title}
                      title={program.title}
                      description={program.description}
                      features={program.features}
                      link={program.link}
                      level={program.level}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="heavyweight">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allPrograms
                  .filter((program) => program.level === "heavyweight")
                  .map((program) => (
                    <ProgramCard
                      key={program.title}
                      title={program.title}
                      description={program.description}
                      features={program.features}
                      link={program.link}
                      level={program.level}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Program overview section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">How Our Programs Work</h2>
              <p className="text-gray-600 mb-6">
                FBI offers a comprehensive range of programs designed to accommodate different commitment levels and learning styles. Our programs are structured to help you progress from basic knowledge to advanced skills in the Superchain ecosystem.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're looking for a quick introduction through our lightweight programs, structured learning in our medium-weight offerings, or deep immersion in our heavyweight programs, we have a path for you.
              </p>
              <p className="text-gray-600">
                All programs include community support, practical building exercises, and opportunities to connect with peers and industry experts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <h3 className="text-xl font-bold mb-6 text-center">Program Progression Path</h3>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-fbi-teal text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div className="ml-4">
                    <h4 className="font-medium">Start with Lightweight Programs</h4>
                    <p className="text-sm text-gray-600">Build foundational knowledge through introductory events</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-fbi-blue text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div className="ml-4">
                    <h4 className="font-medium">Progress to Medium-weight Programs</h4>
                    <p className="text-sm text-gray-600">Deepen your skills with structured cohort-based learning</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-fbi-purple text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div className="ml-4">
                    <h4 className="font-medium">Graduate to Heavyweight Programs</h4>
                    <p className="text-sm text-gray-600">Fully immerse yourself in long-term, high-impact initiatives</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-fbi-green text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div className="ml-4">
                    <h4 className="font-medium">Contribute Back to the Ecosystem</h4>
                    <p className="text-sm text-gray-600">Become a mentor, speaker, or contributor to FBI initiatives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-display mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join one of our programs today and become part of the growing community of builders on the Superchain ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-fbi-blue hover:bg-fbi-indigo">
                <a href="https://t.me/farcasterbuildersindia" target="_blank" rel="noopener noreferrer">
                  Join FBI Community
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-fbi-blue text-fbi-blue hover:bg-fbi-blue/5">
                <a href="mailto:team@fbi.community" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data for all programs
const allPrograms = [
  {
    title: "FBI Hyperthons",
    description: "Quick, focused coding events to build specific features or components for the Superchain ecosystem.",
    features: [
      "Weekend-long building sprints",
      "Clear, specific project goals",
      "Mentor support throughout",
      "Prizes for top submissions",
      "Virtual participation options"
    ],
    link: "/programs/lightweight",
    level: "lightweight" as const
  },
  {
    title: "Speed Coding Workshops",
    description: "Hands-on sessions focusing on specific technical skills needed for Superchain development.",
    features: [
      "3-4 hour focused sessions",
      "Learn by doing approach",
      "Take-home assignments",
      "Community code review",
      "Regular weekly schedule"
    ],
    link: "/programs/lightweight",
    level: "lightweight" as const
  },
  {
    title: "FBI Meetups",
    description: "Regular community gatherings in major Indian cities to network and learn about Superchain development.",
    features: [
      "Monthly in-person events",
      "Expert speakers and demos",
      "Networking opportunities",
      "Beginner-friendly content",
      "Free to attend"
    ],
    link: "/programs/lightweight",
    level: "lightweight" as const
  },
  {
    title: "SuperBased",
    description: "Our flagship 8-week cohort-based program for developers ready to build production-grade applications.",
    features: [
      "Comprehensive curriculum",
      "Weekly group sessions",
      "1:1 mentorship",
      "Capstone project development",
      "Job placement assistance"
    ],
    link: "/programs/medium",
    level: "medium" as const
  },
  {
    title: "Frames Bootcamp",
    description: "A 4-week intensive program focused exclusively on mastering Farcaster Frames development.",
    features: [
      "From basics to advanced techniques",
      "Live coding sessions",
      "Project reviews and feedback",
      "Access to frames templates",
      "Community showcase opportunity"
    ],
    link: "/programs/medium",
    level: "medium" as const
  },
  {
    title: "Base Explorer",
    description: "A guided journey through building advanced applications on Base with direct ecosystem support.",
    features: [
      "3-month structured curriculum",
      "Bi-weekly mentorship calls",
      "Technical deep dives",
      "Collaboration opportunities",
      "Base ecosystem introductions"
    ],
    link: "/programs/medium",
    level: "medium" as const
  },
  {
    title: "Based Fellowship",
    description: "A prestigious 6-month program for experienced developers ready to make significant contributions.",
    features: [
      "Exclusive access to Base team",
      "Funding for project development",
      "High-level mentorship",
      "Speaking opportunities",
      "Industry recognition"
    ],
    link: "/programs/heavyweight",
    level: "heavyweight" as const
  },
  {
    title: "Onchain Summercamp",
    description: "A year-long immersive experience building production-ready applications with substantial support.",
    features: [
      "Full-time commitment option",
      "Substantial funding available",
      "Direct access to investors",
      "Technical and business mentorship",
      "Go-to-market support"
    ],
    link: "/programs/heavyweight",
    level: "heavyweight" as const
  },
  {
    title: "Superchain Visionaries",
    description: "An elite program for founders building significant infrastructure or applications for the ecosystem.",
    features: [
      "Strategic ecosystem partnerships",
      "Executive mentorship",
      "Dedicated technical support",
      "Investor introductions",
      "Marketing and launch support"
    ],
    link: "/programs/heavyweight",
    level: "heavyweight" as const
  }
];

export default Programs;
