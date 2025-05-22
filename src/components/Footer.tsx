import { Link } from "react-router-dom";
import { Twitter, Github, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  telegramLink?: string;
}

const Footer = ({ telegramLink = "https://t.me/fbi_gm" }: FooterProps) => {
  return (
    <footer className="bg-black text-foreground border-t border-border/30">
      <div className="container mx-auto px-6 py-12">
        {/* Main flex container for two blocks, centered on md+ screens */}
        <div className="flex flex-col md:flex-row items-start md:justify-center text-left gap-y-10 md:gap-x-8 lg:gap-x-10">
          {/* Block 1: Organization Info */}
          <div className="space-y-6 w-full md:w-auto">
            <Link to="/" className="inline-block">
              <img src="/FBI Logo.png" alt="FBI Logo" className="h-10" />
            </Link>
            <div className="space-y-3">
              <p className="text-white text-lg font-medium leading-relaxed">
                Building the next 10,000 onchain builders from India.
              </p>
              <p className="text-muted-foreground">
                Not in a decade. Now.
              </p>
            </div>
            <div className="flex items-center space-x-6 pt-2">
              <a 
                href="https://twitter.com/BasedIndia" 
                className="text-muted-foreground hover:text-white transition-colors duration-200" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={22} strokeWidth={1.5} />
              </a>
              <a 
                href="https://github.com/farcasterbuildersindia" 
                className="text-muted-foreground hover:text-white transition-colors duration-200" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={22} strokeWidth={1.5} />
              </a>
              <a 
                href="https://www.instagram.com/farcasterbuildersindia" 
                className="text-muted-foreground hover:text-white transition-colors duration-200" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={22} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Block 2: Resources and Support (grouped) */}
          <div className="flex flex-col sm:flex-row items-start text-left gap-y-8 sm:gap-x-6 lg:gap-x-8">
            {/* Sub-block: Resources */}
            <div className="space-y-4">
              <h3 className="text-white text-xl font-medium">Resources</h3>
              <div className="flex flex-col space-y-2">
                <Link 
                  to="/resources" 
                  className="text-muted-foreground hover:text-white transition-colors duration-200"
                >
                  Brandbook
                </Link>
                {/* Add more links here if needed */}
              </div>
            </div>
            
            {/* Sub-block: Support */}
            <div className="space-y-4">
              <h3 className="text-white text-xl font-medium">Support</h3>
              <p className="text-white text-lg">Got questions?</p>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="inline-flex items-center border-fbi-blue text-fbi-blue hover:bg-fbi-blue/10 hover:text-white"
              >
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} className="mr-2" />
                  DM on Telegram
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 text-center text-muted-foreground text-sm">
          &copy; 2025 FBI. made with ❤️ + chaos.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
