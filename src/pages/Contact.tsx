
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="container py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-center">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground text-center">
          Have a question or a comment? Drop us a line below.
        </p>

        <form className="mt-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message" rows={6} />
          </div>
          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
