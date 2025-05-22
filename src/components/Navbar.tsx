import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll events to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Show navbar at the top of the page or when scrolling up
      const isVisible = currentScrollPos < 10 || prevScrollPos > currentScrollPos;
      
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`fixed top-0 z-50 w-full bg-transparent transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/FBI Logo.png" alt="FBI Logo" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks className="flex space-x-6" />
          <Button asChild size="sm" className="bg-fbi-blue hover:bg-fbi-indigo">
            <a href="https://t.me/+pX7NaIjUojBhYjM1" target="_blank" rel="noopener noreferrer">
              Get involved
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
        <div className="md:hidden absolute w-full bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <NavLinks className="flex flex-col space-y-4" />
              <Button asChild size="sm" className="bg-fbi-blue hover:bg-fbi-indigo">
                <a href="https://t.me/+pX7NaIjUojBhYjM1" target="_blank" rel="noopener noreferrer">
                  Get involved
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
      <Link to="/programs" className="font-medium text-foreground hover:text-fbi-blue transition">
        Programs
      </Link>
      <Link to="/builders" className="font-medium text-foreground hover:text-fbi-blue transition">
        Builders
      </Link>
    </div>
  );
};

export default Navbar;
