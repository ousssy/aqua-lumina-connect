
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BarChart3, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Gestion des Abonnés",
    description: "Gérez facilement vos clients et leurs contrats d'eau et d'électricité",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: BarChart3,
    title: "Suivi des Consommations",
    description: "Visualisez les données de consommation avec des graphiques détaillés",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Clock,
    title: "Gestion des Réclamations",
    description: "Système de tickets pour traiter efficacement toutes les demandes",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: Shield,
    title: "Sécurité Avancée",
    description: "Authentification sécurisée et protection des données",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fonctionnalités Avancées
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une solution complète pour optimiser la gestion de vos services publics
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className={`p-3 rounded-lg ${feature.bgColor} w-fit group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
