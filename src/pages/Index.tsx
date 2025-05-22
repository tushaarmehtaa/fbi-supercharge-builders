import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import ProgramWobbleCards from "@/components/ProgramWobbleCards";
import EventCard from "@/components/EventCard";
import TestimonialCard from "@/components/TestimonialCard";
import LoveFromBuilders from "@/components/LoveFromBuilders";
import TestimonialRows from "@/components/TestimonialRows";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "@/components/StoryTiles.css";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FocusCards } from "@/components/ui/focus-cards";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Sample data for appreciation snippets
const appreciationSnippets = [
  {
    content: "quit my web2 job to go all in on web3! couldnt be possible without based fellowship",
    author: "Bhavya Gor | bhavyagor.eth",
    handle: "bhavyagor",
    authorImage: undefined
  },
  {
    content: "the tribe and community gave me the clarity to go all in. it’s the quiet moves that matter. @BasedIndia is different! so grateful :)",
    author: "razi | razivity.eth",
    handle: "razi",
    authorImage: undefined
  },
  {
    content: "I was going through the pictures, and now I am realizing the worth of one day. I am already missing the Based Folks 😭😭. The memories we created through the games, building with fellows, roaming around, and content creators yapping, etc. are haunting me. Can we do something, @BasedIndia?",
    author: "Nisarg Thakkar",
    handle: "itznishuu_",
    authorImage: undefined
  },
  {
    content: `Cracked builders. Cracked vibes. Pure verifiability. 🏔️☁️

Our very own @ishaan0x traveled to Dharamshala, India with @BasedIndia & @callusfbi and witnessed the magic firsthand: From trustless ticketing and insured fintech to verifiable AI agents and location oracles.

The future's being built everywhere. And it's verifiable.

Big love to the Based Fellowship fam! 🫡`,
    author: "EigenLayer",
    handle: "EigenLayer",
    authorImage: undefined
  },
  {
    content: "From zero to dApp deployed – FBI programs made it possible.",
    author: "Newbie Coder",
    handle: "hello_web3",
    authorImage: undefined
  },
  {
    content: "The resources and workshops provided by FBI are top-notch.",
    author: "Learner",
    handle: "knowledge_seeker",
    authorImage: undefined
  },
  {
    content: "FBI is truly supercharging builders in the ecosystem. Grateful to be part of it.",
    author: "Ecosystem Dev",
    handle: "superchain_supporter",
    authorImage: undefined
  },
  {
    content: "Found my co-founder through an FBI event! #serendipity",
    author: "Founder",
    handle: "startup_journey",
    authorImage: undefined
  },
  {
    content: "The Based Fellowship is a game-changer. Highly recommend!",
    author: "Fellow",
    handle: "based_builder",
    authorImage: undefined
  },
  {
    content: "FBI's commitment to fostering talent is inspiring. Keep up the great work!",
    author: "Admirer",
    handle: "community_voice",
    authorImage: undefined
  },
];

// Sample data for upcoming events
const upcomingEvents = [
  {
    title: "Based Retreat",
    description: "3 days of building, bonding and bliss",
    date: "1-3 Aug",
    location: "Goa",
    type: "inPerson" as "virtual" | "hybrid" | "inPerson",
    link: "#"
  },
  {
    title: "Demo Day",
    description: "showcase your products to the world",
    date: "21 Sep",
    location: "Bangalore",
    type: "inPerson" as "virtual" | "hybrid" | "inPerson",
    link: "#"
  },
  {
    title: "Based Fellows Meetup",
    description: "show up, hang out, reconnect",
    date: "7 June",
    location: "Bangalore",
    type: "inPerson" as "virtual" | "hybrid" | "inPerson",
    link: "#"
  },
  {
    title: "Coinbase AI Hyperthon",
    description: "build something weird on Farcaster using AI",
    date: "21 June",
    location: "Virtual",
    type: "virtual" as "virtual" | "hybrid" | "inPerson",
    link: "#"
  }
];

// Past events data with real events
const pastEvents = [
  {
    title: "Frames v1 Hackathon @Antler",
    description: "A hackathon focused on Frames v1 development with hands-on workshops and networking.",
    src: "/images/events/frames-v1-hackathon-antler.jpg",
    date: "15-17 Nov 2024",
    location: "Antler, Bangalore"
  },
  {
    title: "Base Meetup @Zo",
    description: "Community meetup for Base developers and enthusiasts to connect and share knowledge.",
    src: "/images/events/base-meetup-zo.jpg",
    date: "2 Nov 2024",
    location: "ZO, Bangalore"
  },
  {
    title: "SuperBased Meetups",
    description: "A series of community-driven meetups bringing together builders across the ecosystem.",
    src: "/images/events/superbased-meetups.jpg",
    date: "Oct 2024",
    location: "Various Locations, Bangalore"
  },
  {
    title: "Based Fellowship 1.0 @Dharamshala",
    description: "Our inaugural fellowship program that kickstarted many Web3 journeys.",
    src: "/images/events/based-fellowship-1-dharamshala.jpg",
    date: "1-7 Apr 2024",
    location: "Dharamshala, India"
  },
  {
    title: "Farcaster Fridays @Hashed Haus",
    description: "Weekly gatherings for Farcaster enthusiasts to build and collaborate.",
    src: "/images/events/farcaster-fridays-hashed-haus.jpg",
    date: "Jul - Aug 2024",
    location: "Hashed Haus, Bangalore"
  },
  {
    title: "Based Around The World Buildathon",
    description: "Global virtual buildathon connecting builders from around the world.",
    src: "/images/events/based-around-the-world-buildathon.jpg",
    date: "10-30 Jun 2024",
    location: "Virtual"
  },
  {
    title: "Base Events @ETHIndia & IBW",
    description: "Engaging with the community and showcasing Base at premier blockchain events.",
    src: "/images/events/base-events-ethindia-ibw.jpg",
    date: "5-10 Dec 2023",
    location: "Bangalore, India"
  },
  {
    title: "Coinbase AI Hackathon @Antler",
    description: "Hackathon focused on AI and blockchain integration, hosted at Antler.",
    src: "/images/events/coinbase-ai-hackathon-antler.jpg",
    date: "18-19 Nov 2023",
    location: "Antler, Bangalore"
  },
  {
    title: "Based Fellowship 2.0 @Dharamshala",
    description: "Second edition of our flagship fellowship with an expanded curriculum and network.",
    src: "/images/events/based-fellowship-2-dharamshala.jpg",
    date: "10-17 Sep 2023",
    location: "Dharamshala, India"
  }
];

const Index = () => {
  const [showPastEvents, setShowPastEvents] = useState(false);
  return (
    <div>
      <Hero />



      {/* Programs section */}
      <section className="py-10 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">WE RUN PROGRAMS</h2>
          <p className="text-center text-lg mb-8 text-muted-foreground">The best in the country.</p>
          <ProgramWobbleCards />
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-fbi-blue hover:bg-fbi-indigo">
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-10 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">WE DO EVENTS</h2>
          <p className="text-center text-lg mb-8 text-muted-foreground">upcoming events you can join.</p>
          <HoverEffect items={upcomingEvents} />
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-fbi-blue text-fbi-blue hover:bg-fbi-blue/10 hover:text-white"
              onClick={() => setShowPastEvents(!showPastEvents)}
            >
              {showPastEvents ? 'hide past events' : 'past events'}
            </Button>
          </div>
          
          <AnimatePresence>
            {showPastEvents && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-12"
              >
                <h3 className="text-2xl font-bold mb-6 text-center">PAST EVENTS</h3>
                <FocusCards cards={pastEvents} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Love from Builders section */}
      <section className="py-10 bg-black">
        <div className="w-full px-4">
          <div className="mb-10">
            <LoveFromBuilders>
              {/* Empty div for spacing */}
              <div className="h-4"></div>
            </LoveFromBuilders>
          </div>
          
          <TestimonialRows 
            testimonials={appreciationSnippets.map(snippet => ({
              quote: snippet.content,
              name: snippet.author,
              title: snippet.handle
            }))}
          />
        </div>
      </section>

      {/* CTA section */}
      <section className="py-10 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">READY TO BUILD?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">you're not too late. you're just in time to find your people, ship awesome stuff, and go full onchain.</p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-fbi-blue hover:bg-fbi-indigo">
              <a href="https://t.me/+pX7NaIjUojBhYjM1" target="_blank" rel="noopener noreferrer">JOIN THE COMMUNITY</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};



export default Index;
