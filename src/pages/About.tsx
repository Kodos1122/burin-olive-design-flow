
const About = () => {
  return (
    <div>
      <section 
        className="relative h-96 flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(/lovable-uploads/38867c30-c6f4-41e1-a225-f0b218099ca3.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Our Story</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-3xl space-y-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">The Founder's Vision</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The Burin Olive Oil story is the culmination of a lifelong passion for quality and tradition. Clara's vision was to create an olive oil that not only tasted exceptional but also reflected the rich heritage of the Burin region. Her commitment to sustainable practices and meticulous attention to detail ensures that every bottle of Burin Olive Oil meets the highest standards of excellence.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">The Burin Olive Oil Story</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Nestled in the heart of the Burin region, our olive groves benefit from the unique microclimate and fertile soil that contribute to the distinctive flavor of our olive oil. Generations of expertise are passed down through families, ensuring that traditional methods are preserved while embracing modern techniques for optimal quality. From the careful selection of olives to the cold-pressing process, every step is executed with precision and care.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Sustainable Harvesting</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At Burin, we are deeply committed to sustainable harvesting practices that protect the environment and preserve the health of our olive groves for future generations. Our olives are hand-picked at the peak of ripeness to ensure the highest quality and flavor. We employ eco-friendly methods throughout our production process, minimizing our environmental impact and promoting biodiversity. Our dedication to sustainability is not just a practice; it's a core value that guides everything we do.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
