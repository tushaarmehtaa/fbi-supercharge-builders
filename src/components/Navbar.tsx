
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-display font-bold text-2xl text-gradient">FBI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks className="flex space-x-6" />
          <Button asChild size="sm" className="bg-fbi-blue hover:bg-fbi-indigo">
            <a href="https://t.me/farcasterbuildersindia" target="_blank" rel="noopener noreferrer">
              Join Community
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-md border-b shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <NavLinks className="flex flex-col space-y-4" />
              <Button asChild size="sm" className="bg-fbi-blue hover:bg-fbi-indigo">
                <a href="https://t.me/farcasterbuildersindia" target="_blank" rel="noopener noreferrer">
                  Join Community
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
  return (
    <div className={className}>
      <Link to="/" className="font-medium text-gray-800 hover:text-fbi-blue transition">
        Home
      </Link>
      <Link to="/programs" className="font-medium text-gray-800 hover:text-fbi-blue transition">
        Programs
      </Link>
      <Link to="/success-stories" className="font-medium text-gray-800 hover:text-fbi-blue transition">
        Success Stories
      </Link>
      <Link to="/community" className="font-medium text-gray-800 hover:text-fbi-blue transition">
        Community
      </Link>
      <Link to="/resources" className="font-medium text-gray-800 hover:text-fbi-blue transition">
        Resources
      </Link>
    </div>
  );
};

export default Navbar;
