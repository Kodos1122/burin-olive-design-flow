
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { reviews } from "@/data/reviews";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import HeroAnimation from "@/components/HeroAnimation";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white"
      >
        <HeroAnimation />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">The Essence of Burin</h1>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-200">
            Discover the rich heritage and exquisite taste of Burin olive oil, crafted with passion and tradition.
          </p>
          <Link to="/shop">
            <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">Shop Now</Button>
          </Link>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="container text-center max-w-3xl bg-background/60 backdrop-blur-md p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Burin olive oil is born from a legacy of craftsmanship, where each bottle encapsulates the essence of our family's dedication to quality and tradition. Our olives are hand-picked and cold-pressed to preserve their natural flavors and health benefits, ensuring a taste that is both authentic and exceptional.
          </p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-secondary/70 backdrop-blur-md">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-24">
        <div className="container bg-background/60 backdrop-blur-md p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
