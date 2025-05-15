
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { LineShadowText } from "@/components/ui/line-shadow-text";

const Programs = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="relative overflow-hidden bg-black text-white py-16 md:py-24 min-h-[50vh] flex items-center">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-fbi-blue/10 blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-fbi-purple/10 blur-3xl opacity-50"></div>
          <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-fbi-orange/10 blur-3xl opacity-50"></div>
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              <LineShadowText shadowColor="#3b82f6">
                FBI Programs
              </LineShadowText>
            </h1>
            <p className="text-xl text-white max-w-xl mx-auto text-shadow-md mb-8">
              Choose the right path based on your commitment level and accelerate your journey in the Superchain ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Programs section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-2xl bg-black/50 border border-white/10">
                <TabsTrigger value="all" className="data-[state=active]:bg-fbi-blue data-[state=active]:text-white">All Programs</TabsTrigger>
                <TabsTrigger value="lightweight" className="data-[state=active]:bg-fbi-blue data-[state=active]:text-white">Lightweight</TabsTrigger>
                <TabsTrigger value="medium" className="data-[state=active]:bg-fbi-blue data-[state=active]:text-white">Medium-weight</TabsTrigger>
                <TabsTrigger value="heavyweight" className="data-[state=active]:bg-fbi-blue data-[state=active]:text-white">Heavyweight</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="space-y-16">
                <div>
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold mb-2">💡 Light Commitment</h3>
                    <p className="text-muted-foreground italic">for explorers just getting started</p>
                  </div>
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
                </div>
                
                <div>
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold mb-2">🔄 Medium Commitment</h3>
                    <p className="text-muted-foreground italic">for folks ready to build seriously</p>
                  </div>
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
                </div>
                
                <div>
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold mb-2">🚀 High Commitment</h3>
                    <p className="text-muted-foreground italic">for the full-senders</p>
                  </div>
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
                </div>
              </div>
            </TabsContent>

            <TabsContent value="lightweight">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-2">💡 Light Commitment</h3>
                <p className="text-muted-foreground italic">for explorers just getting started</p>
              </div>
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
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-2">🔄 Medium Commitment</h3>
                <p className="text-muted-foreground italic">for folks ready to build seriously</p>
              </div>
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
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-2">🚀 High Commitment</h3>
                <p className="text-muted-foreground italic">for the full-senders</p>
              </div>
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
      <section className="py-16 bg-black text-white border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">how our programs work</h2>
              <p className="text-xl font-medium text-fbi-blue mb-6">
                we don't do lectures. we do momentum.
              </p>
              <p className="text-muted-foreground mb-6">
                fbi programs are built for all kinds of builders—whether you're just getting started, coming back to code, or already shipping onchain.
                lightweight? medium? full-send? pick your pace, we'll match your energy.
              </p>
              <p className="text-white font-medium mb-3 mt-8">every track includes:</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="text-fbi-blue mr-2">•</span> community support (real people, not just a discord)
                </li>
                <li className="flex items-center">
                  <span className="text-fbi-blue mr-2">•</span> hands-on building
                </li>
                <li className="flex items-center">
                  <span className="text-fbi-blue mr-2">•</span> access to mentors, peers, and weird internet friends
                </li>
              </ul>
            </div>
            <div className="bg-black/40 p-8 rounded-lg border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-center text-white">program path</h3>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-fbi-teal text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">start small</h4>
                    <p className="text-sm text-muted-foreground">get into the flow with workshops, meetups, and hyperthons</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-fbi-blue text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">level up</h4>
                    <p className="text-sm text-muted-foreground">join a cohort, build in public, get feedback, go deeper</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-fbi-purple text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">go all in</h4>
                    <p className="text-sm text-muted-foreground">fellowships, IRL jams, funding, serious product work</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-fbi-green text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">give back</h4>
                    <p className="text-sm text-muted-foreground">become a mentor, co-host events, or just show up for the next batch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer section */}
      <div className="py-8"></div>

      {/* CTA section */}
      <section className="py-16 bg-black text-white border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">READY TO JOIN?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              you're not too late. you're just in time to find your people, ship awesome stuff, and go full onchain.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-fbi-blue hover:bg-fbi-indigo text-white">
                <a href="https://t.me/+pX7NaIjUojBhYjM1" target="_blank" rel="noopener noreferrer">
                  JOIN THE COMMUNITY
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
    title: "🛠 Hyperthons",
    description: "weekend sprints to build miniapps or features for the superchain.",
    features: [
      "real prompts, fast builds",
      "mentor nudges while you ship",
      "prizes that matter (and not just swag)"
    ],
    link: "/programs/lightweight",
    level: "lightweight" as const
  },
  {
    title: "⚡️ Speed Coding Workshops",
    description: "short, focused sessions to level up specific skills.",
    features: [
      "3–4 hours, all hands-on",
      "no lectures, just builds",
      "take-home prompts to keep growing"
    ],
    link: "/programs/lightweight",
    level: "lightweight" as const
  },
  {
    title: "☕️ FBI Meetups",
    description: "offline hangs for devs, creators, and internet kids.",
    features: [
      "monthly meetups in indian cities",
      "demos, convos, sometimes chaos",
      "beginner-friendly, always real",
      "free. just show up."
    ],
    link: "/programs/lightweight",
    level: "lightweight" as const
  },
  {
    title: "🔧 SuperBased",
    description: "an 8-week build-first cohort for early-stage onchain devs.",
    features: [
      "weekly deep dives and live sessions",
      "1:1 mentor support",
      "ship real products, not tutorials"
    ],
    link: "/programs/medium",
    level: "medium" as const
  },
  {
    title: "🖼 Frames Bootcamp",
    description: "master Farcaster Frames development in 4 intensive weeks.",
    features: [
      "from basics to advanced techniques",
      "live coding sessions",
      "build, get feedback, improve, repeat"
    ],
    link: "/programs/medium",
    level: "medium" as const
  },
  {
    title: "🧭 Base Explorer",
    description: "build advanced apps on Base with ecosystem support.",
    features: [
      "4-week structured curriculum",
      "mentorship from builders who've been there",
      "deep dives into frames, infra, and DeFi flows"
    ],
    link: "/programs/medium",
    level: "medium" as const
  },
  {
    title: "🏕 Based Fellowship",
    description: "our flagship 2-week IRL + virtual program for experienced devs.",
    features: [
      "build real things with real teammates",
      "access to the Base team",
      "mentorship, funding, visibility"
    ],
    link: "/programs/heavyweight",
    level: "heavyweight" as const
  },
  {
    title: "🔥 Onchain Summercamp",
    description: "a wild experiment in co-creation. code, content, design—anything goes.",
    features: [
      "work with farcaster OGs + top creators",
      "build for real communities",
      "earn retro rewards ($10k+ in bounties)"
    ],
    link: "/programs/heavyweight",
    level: "heavyweight" as const
  },
  {
    title: "🚀 Superchain Visionaries",
    description: "for founders building significant infrastructure or applications.",
    features: [
      "strategic ecosystem partnerships",
      "executive mentorship",
      "dedicated technical support"
    ],
    link: "/programs/heavyweight",
    level: "heavyweight" as const
  }
];

export default Programs;
