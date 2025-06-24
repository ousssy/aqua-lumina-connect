import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Droplets, 
  Zap, 
  Users, 
  BarChart3, 
  Shield, 
  Clock,
  ChevronRight,
  Smartphone,
  Globe,
  Award
} from "lucide-react";
import AgentDashboard from "./AgentDashboard";
import ClientDashboard from "./ClientDashboard";
import { Chatbot } from "@/components/chat/Chatbot";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'agent' | 'client'>('landing');

  if (currentView === 'agent') {
    return <AgentDashboard />;
  }

  if (currentView === 'client') {
    return <ClientDashboard />;
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Droplets className="h-8 w-8 text-water-500" />
                <Zap className="h-8 w-8 text-electricity-500" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">RADEEMA Digital</h1>
                <p className="text-sm text-muted-foreground">Gestion moderne des services</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                onClick={() => setCurrentView('client')}
                className="flex items-center gap-2"
              >
                <Users className="h-4 w-4" />
                Espace Client
              </Button>
              <Button 
                onClick={() => setCurrentView('agent')}
                className="flex items-center gap-2"
              >
                <Shield className="h-4 w-4" />
                Espace Agent
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              ✨ Nouvelle génération de gestion des services publics
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              Progiciel RADEEMA
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Solution complète de gestion des services d'eau et d'électricité. 
              Interface moderne pour agents et clients avec tableau de bord en temps réel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                onClick={() => setCurrentView('agent')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3"
              >
                <Shield className="h-5 w-5 mr-2" />
                Démonstration Agent
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setCurrentView('client')}
                className="px-8 py-3 border-2"
              >
                <Users className="h-5 w-5 mr-2" />
                Démonstration Client
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </div>

            {/* Services */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="hover:shadow-lg transition-all duration-300 border-2 border-blue-100 hover:border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-water-100 w-fit mx-auto mb-4">
                    <Droplets className="h-8 w-8 text-water-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Service Eau</h3>
                  <p className="text-muted-foreground">
                    Gestion complète des abonnements et consommations d'eau
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 border-2 border-orange-100 hover:border-orange-200">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-electricity-100 w-fit mx-auto mb-4">
                    <Zap className="h-8 w-8 text-electricity-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Service Électricité</h3>
                  <p className="text-muted-foreground">
                    Suivi en temps réel de la consommation électrique
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
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

      {/* Benefits */}
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

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Droplets className="h-6 w-6 text-water-400" />
            <Zap className="h-6 w-6 text-electricity-400" />
            <span className="text-xl font-bold">RADEEMA Digital</span>
          </div>
          <p className="text-gray-400">
            © 2024 RADEEMA. Solution moderne de gestion des services publics.
          </p>
        </div>
      </footer>

      {/* Chatbot Integration */}
      <Chatbot />
    </div>
  );
};

export default Index;
