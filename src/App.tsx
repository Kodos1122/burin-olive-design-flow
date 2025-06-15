
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="shop" element={<Shop />} />
              <Route path="product/:id" element={<Product />} />
              <Route path="about" element={<About />} />
              <Route path="recipes" element={<Recipes />} />
              <Route path="contact" element={<Contact />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
