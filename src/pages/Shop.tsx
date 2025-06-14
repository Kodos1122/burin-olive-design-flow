
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Shop = () => {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Shop</h1>

      <div className="flex gap-4 mb-8">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low-high">Low to High</SelectItem>
            <SelectItem value="high-low">High to Low</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Origin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="burin">Burin</SelectItem>
            <SelectItem value="mediterranean">Mediterranean</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="500ml">500ml</SelectItem>
            <SelectItem value="750ml">750ml</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
