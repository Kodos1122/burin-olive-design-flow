
import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="group block bg-card rounded-lg border border-transparent hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-2">
      <div className="overflow-hidden rounded-t-lg">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="font-serif text-2xl font-bold">{product.name}</h3>
        {product.subtitle && <p className="text-sm text-muted-foreground mt-2">{product.subtitle}</p>}
        <p className="mt-4 font-semibold text-lg text-primary">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
