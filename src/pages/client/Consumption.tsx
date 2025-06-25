
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Droplets, Zap } from "lucide-react";

export default function ClientConsumption() {
  return (
    <AppLayout userRole="client">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Ma Consommation</h1>
          <p className="text-muted-foreground">Suivez votre consommation d'eau et d'électricité</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-water-500" />
                Consommation d'Eau
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Données de consommation non disponibles</p>
                <p className="text-sm">Les données apparaîtront après le premier relevé</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-electricity-500" />
                Consommation d'Électricité
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Données de consommation non disponibles</p>
                <p className="text-sm">Les données apparaîtront après le premier relevé</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
