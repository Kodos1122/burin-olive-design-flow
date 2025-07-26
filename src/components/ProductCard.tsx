
import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="group block animate-fade-in">
      <div className="bg-card rounded-lg border border-transparent hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-primary/30 hover:shadow-2xl hover:-translate-y-4 hover:rotate-1 transform relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="overflow-hidden rounded-t-lg relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 animate-bounce-subtle">
            Premium
          </div>
        </div>
        <div className="p-6 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <h3 className="font-serif text-2xl font-bold group-hover:text-primary transition-colors duration-300 relative z-10">{product.name}</h3>
          {product.subtitle && <p className="text-sm text-muted-foreground mt-2 group-hover:text-foreground/80 transition-colors duration-300 relative z-10">{product.subtitle}</p>}
          <p className="mt-4 font-semibold text-lg text-primary group-hover:scale-110 transition-transform duration-300 relative z-10">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
