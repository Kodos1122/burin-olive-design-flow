
import { Link } from "react-router-dom";
import { Leaf, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const links = [
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/recipes", label: "Recipes" },
    { to: "/contact", label: "Contact" },
    { to: "/", label: "Privacy Policy" },
    { to: "/", label: "Terms of Service" },
  ];
  return (
    <footer className="border-t bg-background/80 backdrop-blur-md">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
             <Link to="/" className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">Burin</span>
             </Link>
             <div className="flex space-x-4">
                <a href="#"><Instagram className="h-5 w-5 hover:text-primary transition-colors" /></a>
                <a href="#"><Facebook className="h-5 w-5 hover:text-primary transition-colors" /></a>
                <a href="#"><Twitter className="h-5 w-5 hover:text-primary transition-colors" /></a>
             </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4 text-center md:text-left">
            {links.map((link) => (
              <Link key={link.label} to={link.to} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Burin Olive Oil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
