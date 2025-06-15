
import { Link } from "react-router-dom";
import { Leaf, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-1">
             <Link to="/" className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-3xl font-bold font-serif">Burin</span>
             </Link>
             <p className="text-muted-foreground text-sm">Crafted with passion, bottled with love. The finest olive oil since 1923.</p>
          </div>

          <div>
            <h4 className="font-bold tracking-wider uppercase text-muted-foreground mb-4 text-sm">Explore</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
              <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link to="/recipes" className="hover:text-primary transition-colors">Recipes</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-bold tracking-wider uppercase text-muted-foreground mb-4 text-sm">Support</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="#" className="hover:text-primary transition-colors">FAQ</Link>
              <Link to="#" className="hover:text-primary transition-colors">Shipping & Returns</Link>
              <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-bold tracking-wider uppercase text-muted-foreground mb-4 text-sm">Follow Us</h4>
             <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></a>
             </div>
          </div>

        </div>
        <div className="mt-16 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Burin Olive Oil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
