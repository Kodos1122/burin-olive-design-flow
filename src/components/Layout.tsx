
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AnimatedBackground from "./AnimatedBackground";

const Layout = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <div className="font-sans antialiased">
      {isHomepage && <AnimatedBackground />}
      {!isHomepage && (
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary))_0%,transparent_50%)] opacity-[0.03]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(var(--primary))_0%,transparent_50%)] opacity-[0.02]" />
        </div>
      )}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

