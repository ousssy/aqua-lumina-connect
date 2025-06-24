
import { AppLayout } from "@/components/layout/AppLayout";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { RecentTickets } from "@/components/dashboard/RecentTickets";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  CalendarDays, 
  Clock, 
  TrendingUp,
  Users,
  Zap,
  Droplets,
  FileText,
  Plus
} from "lucide-react";
import { DashboardStats as StatsType, Ticket } from "@/types";

// Données de démonstration
const mockStats: StatsType = {
  total_clients: 2584,
  active_contracts: 3127,
  pending_tickets: 47,
  unpaid_bills: 156,
  water_consumption: 145720,
  electricity_consumption: 892450,
  revenue_current_month: 2840000,
  revenue_previous_month: 2650000,
};

const mockTickets: Ticket[] = [
  {
    id: "1",
    client_id: "client1",
    ticket_number: "TK-2024-001",
    type: "complaint",
    priority: "high",
    status: "open",
    subject: "Fuite d'eau importante - Avenue Mohammed V",
    description: "Fuite majeure détectée",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    client_id: "client2",
    ticket_number: "TK-2024-002",
    type: "intervention",
    priority: "medium",
    status: "in_progress",
    subject: "Installation nouveau compteur électrique",
    description: "Demande d'installation",
    created_at: "2024-01-14T14:20:00Z",
    updated_at: "2024-01-15T09:15:00Z",
  },
  {
    id: "3",
    client_id: "client3",
    ticket_number: "TK-2024-003",
    type: "complaint",
    priority: "urgent",
    status: "open",
    subject: "Panne électrique - Quartier industriel",
    description: "Coupure généralisée",
    created_at: "2024-01-15T08:45:00Z",
    updated_at: "2024-01-15T08:45:00Z",
  },
];

const quickActions = [
  {
    title: "Nouveau Client",
    description: "Ajouter un nouveau client",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Nouveau Contrat",
    description: "Créer un contrat",
    icon: FileText,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Relevé Compteur",
    description: "Saisir un relevé",
    icon: Clock,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

export default function AgentDashboard() {
  return (
    <AppLayout userRole="agent">
      <div className="space-y-6 animate-fade-in">
        {/* En-tête */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
            <p className="text-muted-foreground">
              Vue d'ensemble de la gestion des services
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <CalendarDays className="h-3 w-3" />
              {new Date().toLocaleDateString('fr-FR')}
            </Badge>
          </div>
        </div>

        {/* Statistiques principales */}
        <DashboardStats stats={mockStats} userRole="agent" />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Actions rapides */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Actions Rapides
              </CardTitle>
              <CardDescription>
                Raccourcis vers les tâches courantes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action) => (
                <Button
                  key={action.title}
                  variant="ghost"
                  className="w-full justify-start h-auto p-3"
                >
                  <div className={`p-2 rounded-lg ${action.bgColor} mr-3`}>
                    <action.icon className={`h-4 w-4 ${action.color}`} />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{action.title}</p>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Activité du jour */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Activité du Jour
              </CardTitle>
              <CardDescription>
                Résumé des activités d'aujourd'hui
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Nouveaux clients</span>
                  <span className="font-medium">12</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Tickets traités</span>
                  <span className="font-medium">8/15</span>
                </div>
                <Progress value={53} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Factures générées</span>
                  <span className="font-medium">145</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Services en cours */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Services en Cours</CardTitle>
              <CardDescription>
                Interventions et maintenance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-water-50">
                <Droplets className="h-4 w-4 text-water-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Maintenance réseau eau</p>
                  <p className="text-xs text-muted-foreground">Secteur Nord - En cours</p>
                </div>
                <Badge variant="outline" className="text-water-600">Actif</Badge>
              </div>
              
              <div className="flex items-center gap-3 p-2 rounded-lg bg-electricity-50">
                <Zap className="h-4 w-4 text-electricity-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Réparation transformateur</p>
                  <p className="text-xs text-muted-foreground">Zone industrielle - Planifié</p>
                </div>
                <Badge variant="outline" className="text-electricity-600">Planifié</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tickets récents */}
        <RecentTickets tickets={mockTickets} userRole="agent" />
      </div>
    </AppLayout>
  );
}
