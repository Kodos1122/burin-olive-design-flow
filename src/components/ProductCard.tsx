
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="overflow-hidden rounded-lg">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 bg-card">
        <h3 className="text-lg font-medium">{product.name}</h3>
        {product.subtitle && <p className="text-sm text-muted-foreground mt-1">{product.subtitle}</p>}
        <p className="mt-2 font-semibold">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
