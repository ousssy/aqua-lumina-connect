
import { Smartphone, Globe, Award } from "lucide-react";

const benefits = [
  {
    icon: Smartphone,
    title: "Interface Moderne",
    description: "Design responsive et intuitif"
  },
  {
    icon: Globe,
    title: "Accès 24/7",
    description: "Disponible partout, à tout moment"
  },
  {
    icon: Award,
    title: "Service Client",
    description: "Support technique dédié"
  }
];

export function BenefitsSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pourquoi Choisir Notre Solution ?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="p-4 rounded-full bg-gradient-to-br from-blue-100 to-orange-100 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
