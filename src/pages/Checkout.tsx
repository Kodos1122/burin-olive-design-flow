
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Lock, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart, cartCount } = useCart();

  const handlePayNow = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }
    // In a real app, you'd process payment here.
    toast.success("Order placed successfully! Thank you for your purchase.");
    clearCart();
  };
  
  const total = getCartTotal();

  if (cartCount === 0) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Checkout</h1>
        <div className="py-16">
          <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground" />
          <h2 className="text-2xl font-semibold mt-6">Your cart is empty</h2>
          <p className="text-muted-foreground mt-2">Looks like you haven't added anything to your cart yet.</p>
          <Button asChild className="mt-6">
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Checkout</h1>
      <form onSubmit={handlePayNow}>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@example.com" required />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter">Keep me up to date on news and exclusive offers</Label>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Shipping address</h2>
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" required/>
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" required/>
              </div>
              <div>
                <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                <Input id="apartment" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required/>
                </div>
                <div>
                  <Label htmlFor="zip">ZIP code</Label>
                  <Input id="zip" required/>
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Order Summary */}
            <div className="space-y-4 p-6 border rounded-lg bg-muted/20">
              <h2 className="text-xl font-semibold">Order summary</h2>
              <div className="space-y-3">
                {cartItems.map(item => (
                  <div key={item.product.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                       <div className="relative">
                        <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover rounded-md" />
                        <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                          {item.quantity}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-sm text-muted-foreground">${item.product.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 mt-4 space-y-2">
                <div className="flex justify-between text-muted-foreground">
                  <p>Subtotal</p>
                  <p>${total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Shipping method</h2>
              <RadioGroup defaultValue="standard" className="space-y-2">
                <div className="flex items-center space-x-2 border rounded-md p-4">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard" className="flex-1">Standard (4-7 business days)</Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-4">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express" className="flex-1">Express (2-3 business days)</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Payment */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Payment</h2>
              <RadioGroup defaultValue="credit-card" className="space-y-2">
                <div className="flex items-center space-x-2 border rounded-md p-4">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <Label htmlFor="credit-card" className="flex-1">Credit card</Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-4">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="flex-1">PayPal</Label>
                </div>
              </RadioGroup>
              <div className="space-y-2">
                <Label htmlFor="card-number">Card number</Label>
                <Input id="card-number" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiration">Expiration date (MM/YY)</Label>
                  <Input id="expiration" />
                </div>
                <div>
                  <Label htmlFor="cvc">Security code</Label>
                  <Input id="cvc" />
                </div>
              </div>
              <div>
                <Label htmlFor="card-name">Name on card</Label>
                <Input id="card-name" />
              </div>
            </div>
            
            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg">Pay Now</Button>
            <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2"><Lock className="w-4 h-4"/> Secure checkout | 100% satisfaction guarantee</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
