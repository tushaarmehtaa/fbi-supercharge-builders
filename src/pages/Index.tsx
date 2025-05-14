
import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import SuccessStoryCard from "@/components/SuccessStoryCard";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <Hero />

      {/* Values section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Community Values</h2>
            <p className="text-gray-600 mb-12">
              FBI is built on strong values that drive our mission to accelerate the Superchain ecosystem through community-focused programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-fbi-blue/10 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.59 13.51L15.42 17.49" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.41 6.51L8.59 10.49" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Community First</h3>
              <p className="text-gray-600">
                We prioritize community needs, fostering an inclusive environment where members support each other's growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-fbi-purple/10 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="#5E35B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#5E35B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation Focused</h3>
              <p className="text-gray-600">
                We champion creative thinking and new approaches to building on the Superchain ecosystem.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-fbi-green/10 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3Z" stroke="#43A047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18H12.01" stroke="#43A047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Building Expertise</h3>
              <p className="text-gray-600">
                We provide resources and mentorship to elevate technical skills in the Farcaster and Superchain ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Our Programs</h2>
            <p className="text-gray-600 mb-12">
              Tailored programs designed to meet you where you are, from beginners to advanced builders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProgramCard
              title="Lightweight Programs"
              description="Perfect starting points for those beginning their journey into the Superchain ecosystem."
              features={[
                "Hyperthons for quick learning",
                "Speed coding workshops",
                "Virtual events and webinars",
                "Community forum access",
                "Low commitment entry point"
              ]}
              link="/programs/lightweight"
              level="lightweight"
            />

            <ProgramCard
              title="Medium-weight Programs"
              description="Structured learning paths for those ready to deepen their Superchain development skills."
              features={[
                "SuperBased cohort curriculum",
                "Guided application building",
                "Community access and networking",
                "Moderate time commitment",
                "Mentor support and guidance"
              ]}
              link="/programs/medium"
              level="medium"
            />

            <ProgramCard
              title="Heavyweight Programs"
              description="Immersive experiences for serious builders committed to making an impact on the ecosystem."
              features={[
                "Based Fellowship program",
                "Year-long Onchain Summercamp",
                "Exclusive community access",
                "Significant resource allocation",
                "Direct mentorship from experts"
              ]}
              link="/programs/heavyweight"
              level="heavyweight"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-fbi-blue hover:bg-fbi-indigo">
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Success Stories</h2>
            <p className="text-gray-600 mb-12">
              Meet the builders who have grown through our programs and achieved outstanding results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
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

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-fbi-blue hover:bg-fbi-indigo">
              <Link to="/success-stories">View All Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Upcoming Events</h2>
            <p className="text-gray-600 mb-12">
              Join our events to learn, connect, and grow with the FBI community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                description={event.description}
                date={event.date}
                location={event.location}
                type={event.type}
                registrationLink={event.registrationLink}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-fbi-blue hover:bg-fbi-indigo">
              <Link to="/community">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-r from-fbi-blue to-fbi-purple">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Ready to Build on the Superchain?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join the FBI community today and start your journey to becoming part of the next 10,000 builders on the Superchain ecosystem.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-fbi-blue hover:bg-gray-100">
                <Link to="/programs">Explore Programs</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="https://t.me/farcasterbuildersindia" target="_blank" rel="noopener noreferrer">
                  Join Community
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data for success stories
const successStories = [
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
  }
];

// Sample data for upcoming events
const upcomingEvents = [
  {
    title: "FBI Meetup: Farcaster Deep Dive",
    description: "Join us for an interactive session exploring the fundamentals and advanced concepts of Farcaster protocols.",
    date: "May 28, 2025",
    location: "Bangalore, India",
    type: "inPerson",
    registrationLink: "#"
  },
  {
    title: "Frames Workshop: Build Your First Frame",
    description: "A hands-on workshop where you'll learn how to build and deploy your first Farcaster Frame with direct guidance from experts.",
    date: "June 5, 2025",
    location: "Online",
    type: "virtual",
    registrationLink: "#"
  },
  {
    title: "SuperBased Cohort 4 Kickoff",
    description: "The launch event for our next SuperBased cohort, featuring guest speakers from Base and orientation for new participants.",
    date: "June 12, 2025",
    location: "Delhi + Online",
    type: "hybrid",
    registrationLink: "#"
  }
];

export default Index;
