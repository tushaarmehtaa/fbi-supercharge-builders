
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard";
import { Calendar, MapPin } from "lucide-react";

const Community = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              FBI <span className="text-gradient">Community</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Connect, learn, and grow with fellow Superchain builders across India.
            </p>
            <Button asChild size="lg" className="bg-fbi-blue hover:bg-fbi-indigo">
              <a href="https://t.me/farcasterbuildersindia" target="_blank" rel="noopener noreferrer">
                Join Our Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Events section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Upcoming Events</h2>
            <p className="text-gray-600">
              Connect with the FBI community at our upcoming events, both online and in-person.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-md">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="in-person">In-Person</TabsTrigger>
                <TabsTrigger value="virtual">Virtual</TabsTrigger>
                <TabsTrigger value="hybrid">Hybrid</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </TabsContent>

            <TabsContent value="in-person">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents
                  .filter((event) => event.type === "inPerson")
                  .map((event, index) => (
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
            </TabsContent>

            <TabsContent value="virtual">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents
                  .filter((event) => event.type === "virtual")
                  .map((event, index) => (
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
            </TabsContent>

            <TabsContent value="hybrid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents
                  .filter((event) => event.type === "hybrid")
                  .map((event, index) => (
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Meetup locations section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">FBI Meetup Locations</h2>
            <p className="text-gray-600">
              Join us at our regular meetups in cities across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {meetupLocations.map((location, index) => (
              <Card key={index} className="overflow-hidden h-full">
                <div className="relative h-40">
                  <img
                    src={location.image}
                    alt={location.city}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-1">
                    <MapPin size={16} className="text-fbi-blue mr-1" />
                    <CardTitle className="text-lg">{location.city}</CardTitle>
                  </div>
                  <CardDescription>{location.frequency}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-gray-600">{location.venue}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild size="sm" variant="outline" className="w-full">
                    <a href={location.joinLink}>Join Group</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FBI Podcast section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">FBI Podcast</h2>
            <p className="text-gray-600">
              Tune into the latest episodes of our podcast featuring insights from Superchain builders and ecosystem experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcastEpisodes.map((episode, index) => (
              <Card key={index} className="overflow-hidden card-hover h-full">
                <div className="relative h-48">
                  <img
                    src={episode.thumbnail}
                    alt={episode.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <p className="text-sm font-medium">Episode {episode.episodeNumber}</p>
                      <h3 className="text-lg font-bold">{episode.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-sm text-gray-600 mb-3">{episode.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    <span>{episode.date}</span>
                    <span className="mx-2">•</span>
                    <span>{episode.duration}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3">
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <a href={episode.spotifyLink} target="_blank" rel="noopener noreferrer">
                      Spotify
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <a href={episode.youtubeLink} target="_blank" rel="noopener noreferrer">
                      YouTube
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-fbi-blue hover:bg-fbi-indigo">
              <a href="#" target="_blank" rel="noopener noreferrer">
                View All Episodes
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Community projects section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-4">Community Projects</h2>
            <p className="text-gray-600">
              Explore projects built by the FBI community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden card-hover h-full">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.builder}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data for upcoming events
const upcomingEvents = [
  {
    title: "FBI Meetup: Farcaster Deep Dive",
    description: "Join us for an interactive session exploring the fundamentals and advanced concepts of Farcaster protocols.",
    date: "May 28, 2025",
    location: "Bangalore, India",
    type: "inPerson" as const,
    registrationLink: "#"
  },
  {
    title: "Frames Workshop: Build Your First Frame",
    description: "A hands-on workshop where you'll learn how to build and deploy your first Farcaster Frame with direct guidance from experts.",
    date: "June 5, 2025",
    location: "Online",
    type: "virtual" as const,
    registrationLink: "#"
  },
  {
    title: "SuperBased Cohort 4 Kickoff",
    description: "The launch event for our next SuperBased cohort, featuring guest speakers from Base and orientation for new participants.",
    date: "June 12, 2025",
    location: "Delhi + Online",
    type: "hybrid" as const,
    registrationLink: "#"
  },
  {
    title: "Superchain Security Workshop",
    description: "Learn best practices for securing your applications on the Superchain with practical examples and case studies.",
    date: "June 18, 2025",
    location: "Online",
    type: "virtual" as const,
    registrationLink: "#"
  },
  {
    title: "FBI Mumbai Meetup",
    description: "Monthly gathering of Superchain builders in Mumbai with lightning talks and networking opportunities.",
    date: "June 25, 2025",
    location: "Mumbai, India",
    type: "inPerson" as const,
    registrationLink: "#"
  },
  {
    title: "Base Developer Day",
    description: "Full-day event featuring technical workshops, panels, and hands-on sessions with Base developers.",
    date: "July 2, 2025",
    location: "Bangalore + Online",
    type: "hybrid" as const,
    registrationLink: "#"
  }
];

// Sample data for meetup locations
const meetupLocations = [
  {
    city: "Bangalore",
    frequency: "Every 2nd Thursday",
    venue: "Tech Park Coworking, Koramangala",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    joinLink: "#"
  },
  {
    city: "Delhi NCR",
    frequency: "Monthly on Saturdays",
    venue: "InnovateHub, Gurgaon",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    joinLink: "#"
  },
  {
    city: "Mumbai",
    frequency: "Every 3rd Wednesday",
    venue: "CoWorks Space, Powai",
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    joinLink: "#"
  },
  {
    city: "Hyderabad",
    frequency: "Monthly on Fridays",
    venue: "T-Hub Foundation, HITEC City",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    joinLink: "#"
  }
];

// Sample data for podcast episodes
const podcastEpisodes = [
  {
    episodeNumber: "12",
    title: "Building the Superchain Ecosystem in India",
    description: "A conversation with Base team members about the growth of the Superchain ecosystem in India.",
    date: "May 10, 2025",
    duration: "48 min",
    thumbnail: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    spotifyLink: "#",
    youtubeLink: "#"
  },
  {
    episodeNumber: "11",
    title: "From Web2 to Web3: A Developer's Journey",
    description: "Three developers share their experiences transitioning from traditional tech to the Superchain.",
    date: "April 25, 2025",
    duration: "52 min",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    spotifyLink: "#",
    youtubeLink: "#"
  },
  {
    episodeNumber: "10",
    title: "The Future of Frames: Innovation Beyond Basics",
    description: "Exploring advanced use cases and the future potential of Farcaster Frames with expert developers.",
    date: "April 10, 2025",
    duration: "45 min",
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    spotifyLink: "#",
    youtubeLink: "#"
  }
];

// Sample data for community projects
const communityProjects = [
  {
    title: "FrameSync",
    builder: "FrameStack Team",
    description: "A comprehensive toolset for creating, deploying, and managing Farcaster Frames with analytics integration.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "#"
  },
  {
    title: "DegenScore",
    builder: "Crypto Metrics Labs",
    description: "An onchain reputation system built on Base that scores user activity across the Superchain ecosystem.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "#"
  },
  {
    title: "SuperWallet",
    builder: "Chain Innovators",
    description: "A multi-chain wallet optimized for the Superchain with integrated fiat on-ramps and social recovery.",
    image: "https://images.unsplash.com/photo-1607127754707-63bf32bc79bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "#"
  }
];

export default Community;
