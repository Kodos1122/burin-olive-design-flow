
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Lock } from "lucide-react";

const Checkout = () => {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" />
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
              <Input id="name" />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" />
            </div>
            <div>
              <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
              <Input id="apartment" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" />
              </div>
              <div>
                <Label htmlFor="zip">ZIP code</Label>
                <Input id="zip" />
              </div>
            </div>
             <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" />
            </div>
          </div>
        </div>

        <div className="space-y-8">
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
          
          <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg">Pay Now</Button>
          <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2"><Lock className="w-4 h-4"/> Secure checkout | 100% satisfaction guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
