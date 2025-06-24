
import { AppLayout } from "@/components/layout/AppLayout";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { RecentTickets } from "@/components/dashboard/RecentTickets";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Droplets, 
  Zap, 
  AlertCircle,
  CheckCircle2,
  Calendar,
  CreditCard,
  Phone
} from "lucide-react";
import { DashboardStats as StatsType, Ticket } from "@/types";

// Données de démonstration pour un client
const mockClientStats: StatsType = {
  total_clients: 0,
  active_contracts: 2,
  pending_tickets: 1,
  unpaid_bills: 1,
  water_consumption: 25,
  electricity_consumption: 340,
  revenue_current_month: 0,
  revenue_previous_month: 0,
};

const mockClientTickets: Ticket[] = [
  {
    id: "1",
    client_id: "client1",
    ticket_number: "TK-2024-045",
    type: "complaint",
    priority: "medium",
    status: "in_progress",
    subject: "Problème de pression d'eau",
    description: "Baisse de pression constatée",
    created_at: "2024-01-10T14:30:00Z",
    updated_at: "2024-01-12T10:15:00Z",
  },
];

export default function ClientDashboard() {
  return (
    <AppLayout userRole="client">
      <div className="space-y-6 animate-fade-in">
        {/* En-tête personnalisé */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Bonjour, Ahmed</h1>
            <p className="text-muted-foreground">
              Bienvenue dans votre espace client RADEEMA
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="flex items-center gap-1 text-green-600">
              <CheckCircle2 className="h-3 w-3" />
              Compte vérifié
            </Badge>
          </div>
        </div>

        {/* Statistiques simplifiées pour le client */}
        <DashboardStats stats={mockClientStats} userRole="client" />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Mes contrats */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Mes Contrats
              </CardTitle>
              <CardDescription>
                Services actifs à votre adresse
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg border bg-water-50/50">
                <div className="p-2 rounded-lg bg-water-100">
                  <Droplets className="h-4 w-4 text-water-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Contrat Eau</p>
                  <p className="text-sm text-muted-foreground">N° 1234567890</p>
                  <p className="text-xs text-muted-foreground">123 Avenue Hassan II, Rabat</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Actif</Badge>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg border bg-electricity-50/50">
                <div className="p-2 rounded-lg bg-electricity-100">
                  <Zap className="h-4 w-4 text-electricity-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Contrat Électricité</p>
                  <p className="text-sm text-muted-foreground">N° 0987654321</p>
                  <p className="text-xs text-muted-foreground">123 Avenue Hassan II, Rabat</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Actif</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Dernières factures */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Dernières Factures
                </CardTitle>
                <CardDescription>
                  État de vos paiements
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Voir toutes
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg border">
                <div className="p-2 rounded-lg bg-red-100">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Facture Eau - Décembre 2024</p>
                  <p className="text-sm text-muted-foreground">Échéance: 15 Janvier 2025</p>
                  <p className="text-lg font-bold text-red-600">245.50 MAD</p>
                </div>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  Payer
                </Button>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg border bg-gray-50">
                <div className="p-2 rounded-lg bg-green-100">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Facture Électricité - Décembre 2024</p>
                  <p className="text-sm text-muted-foreground">Payée le 28 Décembre 2024</p>
                  <p className="text-lg font-bold text-green-600">387.20 MAD</p>
                </div>
                <Badge className="bg-green-100 text-green-800">Payée</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Actions rapides */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Actions Rapides</CardTitle>
              <CardDescription>
                Raccourcis vers vos services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <CreditCard className="h-4 w-4 mr-2" />
                Payer mes factures
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Nouvelle réclamation
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Prendre RDV
              </Button>
            </CardContent>
          </Card>

          {/* Contact d'urgence */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <Phone className="h-5 w-5" />
                Urgences
              </CardTitle>
              <CardDescription>
                Contacts en cas d'urgence
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                <p className="font-medium text-red-800">Urgence Eau</p>
                <p className="text-lg font-bold text-red-600">0537-XX-XX-XX</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
                <p className="font-medium text-orange-800">Urgence Électricité</p>
                <p className="text-lg font-bold text-orange-600">0537-YY-YY-YY</p>
              </div>
            </CardContent>
          </Card>

          {/* Conseils */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Conseils du Mois</CardTitle>
              <CardDescription>
                Optimisez votre consommation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-blue-50">
                <p className="text-sm font-medium text-blue-800">💧 Économie d'eau</p>
                <p className="text-xs text-blue-600">
                  Réparez rapidement les fuites pour éviter le gaspillage
                </p>
              </div>
              <div className="p-3 rounded-lg bg-yellow-50">
                <p className="text-sm font-medium text-yellow-800">⚡ Économie d'énergie</p>
                <p className="text-xs text-yellow-600">
                  Utilisez des ampoules LED pour réduire votre consommation
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mes réclamations */}
        <RecentTickets tickets={mockClientTickets} userRole="client" />
      </div>
    </AppLayout>
  );
}
