
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, ChevronRight, Droplets, Zap } from "lucide-react";

interface HeroSectionProps {
  onViewChange: (view: 'agent' | 'client') => void;
}

export function HeroSection({ onViewChange }: HeroSectionProps) {
  return (
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
              onClick={() => onViewChange('agent')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3"
            >
              <Shield className="h-5 w-5 mr-2" />
              Démonstration Agent
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onViewChange('client')}
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
  );
}
