
import { Link } from "react-router-dom";
import { Twitter, Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fbi-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-white">FBI</h2>
            <p className="text-gray-300 max-w-xs">
              Farcaster Builders India is a collective of Indian founders, builders, and operators
              accelerating the Superchain ecosystem.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-fbi-blue transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-fbi-blue transition">
                <Github size={20} />
              </a>
              <a href="#" className="text-white hover:text-fbi-blue transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white text-lg">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs/lightweight" className="text-gray-300 hover:text-fbi-blue transition">
                  Lightweight Programs
                </Link>
              </li>
              <li>
                <Link to="/programs/medium" className="text-gray-300 hover:text-fbi-blue transition">
                  Medium-weight Programs
                </Link>
              </li>
              <li>
                <Link to="/programs/heavyweight" className="text-gray-300 hover:text-fbi-blue transition">
                  Heavyweight Programs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white text-lg">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-fbi-blue transition">
                  FBI Brandbook
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-fbi-blue transition">
                  $DEGEN for Rookies
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-fbi-blue transition">
                  Developer Resources
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-fbi-blue transition">
                  Frames Resources
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-fbi-blue transition">
                  Farcaster 101
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white text-lg">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://t.me/farcasterbuildersindia" className="text-gray-300 hover:text-fbi-blue transition">
                  Join Telegram
                </a>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-fbi-blue transition">
                  Attend Meetups
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-fbi-blue transition">
                  Apply for Programs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
          <div>&copy; {new Date().getFullYear()} Farcaster Builders India. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-fbi-blue transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-fbi-blue transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
