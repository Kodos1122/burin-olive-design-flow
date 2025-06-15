
import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";
import { useCart } from "@/context/CartContext";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <NotFound />;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="rounded-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>
          <p className="text-xl text-muted-foreground mt-2">{product.subtitle}</p>
          <p className="text-3xl font-bold mt-4">${product.price.toFixed(2)}</p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="mt-2 text-muted-foreground">{product.description}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Origin Story</h3>
            <p className="mt-2 text-muted-foreground">{product.originStory}</p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Nutritional Information</h3>
            <div className="mt-2 grid grid-cols-2 gap-x-8 gap-y-2 text-muted-foreground border-t pt-4">
              {product.nutrition.map(item => (
                <div key={item.label} className="flex justify-between">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 flex gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1" onClick={handleAddToCart}>Add to Cart</Button>
            <Button size="lg" variant="outline" className="flex-1" onClick={handleBuyNow}>Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
