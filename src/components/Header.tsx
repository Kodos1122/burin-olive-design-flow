
import { Link, NavLink } from "react-router-dom";
import { Leaf, Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/recipes", label: "Recipes" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const { cartCount } = useCart();
  const activeLinkClass = "text-primary font-semibold";
  const inactiveLinkClass = "hover:text-primary transition-colors";

  const handleComingSoon = () => {
    toast.info("Feature coming soon!");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-8 flex items-center space-x-2">
            <Leaf className="h-7 w-7 text-primary" />
            <span className="hidden font-bold sm:inline-block text-2xl font-serif">Burin</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? activeLinkClass : inactiveLinkClass
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
             <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background border-r-border">
                <Link to="/" className="mr-6 flex items-center space-x-2 mb-8">
                  <Leaf className="h-7 w-7 text-primary" />
                  <span className="font-bold text-2xl font-serif">Burin</span>
                </Link>
                <nav className="flex flex-col space-y-6 text-lg">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        isActive ? activeLinkClass : inactiveLinkClass
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={handleComingSoon}>
              <Search className="h-6 w-6" />
            </Button>
            <Link to="/checkout" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={handleComingSoon}>
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
