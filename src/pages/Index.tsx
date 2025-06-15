
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { reviews } from "@/data/reviews";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import HeroAnimation from "@/components/HeroAnimation";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white"
      >
        <HeroAnimation />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 p-4">
          <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tight text-shadow-lg">The Essence of Burin</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200 text-shadow">
            Discover the rich heritage and exquisite taste of Burin olive oil, crafted with passion and tradition.
          </p>
          <Link to="/shop">
            <Button size="lg" className="mt-8 font-bold tracking-wider">Shop Now</Button>
          </Link>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Our Story</h2>
          <div className="w-24 h-1 bg-primary mx-auto my-6 rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Burin olive oil is born from a legacy of craftsmanship, where each bottle encapsulates the essence of our family's dedication to quality and tradition. Our olives are hand-picked and cold-pressed to preserve their natural flavors and health benefits, ensuring a taste that is both authentic and exceptional.
          </p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
