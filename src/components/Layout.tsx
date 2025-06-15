
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AnimatedBackground from "./AnimatedBackground";

const Layout = () => {
  return (
    <div className="font-sans antialiased">
      <AnimatedBackground />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

