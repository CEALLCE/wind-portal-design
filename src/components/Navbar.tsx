import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-wind-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-white hover:text-wind-secondary transition-colors">
            WIND
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-white hover:text-wind-secondary transition-colors ${
                location.pathname === "/" ? "text-wind-secondary" : ""
              }`}
            >
              Home
            </Link>
            <Link 
              to="/news" 
              className={`text-white hover:text-wind-secondary transition-colors ${
                location.pathname === "/news" ? "text-wind-secondary" : ""
              }`}
            >
              News
            </Link>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-wind-secondary hover:text-white hover:border-wind-secondary transition-colors"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;