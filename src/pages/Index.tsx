import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518005020951-eccb494ad742')"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Professional Home Services You Can Trust</h1>
            <p className="text-xl mb-8">Experience the perfect blend of quality and reliability with WIND's comprehensive home services.</p>
            <Button size="lg" className="bg-wind-secondary hover:bg-wind-secondary/90">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-wind-light">
        <div className="container">
          <h2 className="text-4xl font-bold text-wind-primary text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-wind-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-wind-primary text-center mb-16">Why Choose WIND</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-16 h-16 shrink-0 bg-wind-secondary rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white">{benefit.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-wind-gray">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-wind-light">
        <div className="container">
          <h2 className="text-4xl font-bold text-wind-primary text-center mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <MapPin className="w-12 h-12 text-wind-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Address</h3>
              <p className="text-wind-gray text-center">
                123 Business Street<br />
                Moscow, Russia 123456
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <Phone className="w-12 h-12 text-wind-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-wind-gray">
                +7 (999) 123-45-67<br />
                +7 (999) 765-43-21
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <Mail className="w-12 h-12 text-wind-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-wind-gray">
                info@wind.com<br />
                support@wind.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Cleaning Services",
    description: "Professional cleaning solutions for homes and offices, ensuring spotless and healthy environments.",
  },
  {
    title: "Maintenance",
    description: "Regular maintenance and repairs to keep your property in perfect condition year-round.",
  },
  {
    title: "Renovation",
    description: "Complete renovation services to transform your space into your dream environment.",
  },
];

const benefits = [
  {
    icon: "★",
    title: "Expert Team",
    description: "Our professionals are highly trained and experienced in delivering top-quality services.",
  },
  {
    icon: "✓",
    title: "Reliable Service",
    description: "Count on us for punctual, efficient, and consistent service delivery every time.",
  },
  {
    icon: "♥",
    title: "Customer Satisfaction",
    description: "Your satisfaction is our priority, backed by our 100% satisfaction guarantee.",
  },
  {
    icon: "⚡",
    title: "Quick Response",
    description: "Fast response times and flexible scheduling to meet your needs.",
  },
];

export default Index;