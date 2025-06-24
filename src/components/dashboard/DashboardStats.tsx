
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  FileText, 
  Ticket, 
  DollarSign, 
  Droplets, 
  Zap,
  TrendingUp,
  TrendingDown,
  AlertCircle
} from "lucide-react";
import { DashboardStats as StatsType } from "@/types";

interface DashboardStatsProps {
  stats: StatsType;
  userRole: 'agent' | 'client';
}

export function DashboardStats({ stats, userRole }: DashboardStatsProps) {
  const agentStats = [
    {
      title: "Total Clients",
      value: stats.total_clients.toLocaleString(),
      description: "Clients actifs",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Contrats Actifs",
      value: stats.active_contracts.toLocaleString(),
      description: "En cours",
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Tickets en Attente",
      value: stats.pending_tickets.toLocaleString(),
      description: "À traiter",
      icon: Ticket,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Factures Impayées",
      value: stats.unpaid_bills.toLocaleString(),
      description: "En retard",
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  const consumptionStats = [
    {
      title: "Consommation Eau",
      value: `${stats.water_consumption.toLocaleString()} m³`,
      description: "Ce mois",
      icon: Droplets,
      color: "text-water-600",
      bgColor: "bg-water-50",
      progress: 75,
    },
    {
      title: "Consommation Électricité",
      value: `${stats.electricity_consumption.toLocaleString()} kWh`,
      description: "Ce mois",
      icon: Zap,
      color: "text-electricity-600",
      bgColor: "bg-electricity-50",
      progress: 60,
    },
  ];

  const revenueGrowth = ((stats.revenue_current_month - stats.revenue_previous_month) / stats.revenue_previous_month * 100);
  const isPositiveGrowth = revenueGrowth > 0;

  return (
    <div className="grid gap-6">
      {/* Stats principales */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {userRole === 'agent' ? agentStats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        )) : (
          // Stats simplifiées pour les clients
          <>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mes Contrats</CardTitle>
                <FileText className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Actifs</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Factures en Attente</CardTitle>
                <AlertCircle className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">À payer</p>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* Stats de consommation */}
      <div className="grid gap-4 md:grid-cols-2">
        {consumptionStats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{stat.description}</span>
                  <span className={stat.color}>{stat.progress}%</span>
                </div>
                <Progress value={stat.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue pour les agents */}
      {userRole === 'agent' && (
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Revenus
            </CardTitle>
            <CardDescription>
              Comparaison mensuelle des revenus
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-2xl font-bold">
                  {stats.revenue_current_month.toLocaleString()} MAD
                </p>
                <p className="text-sm text-muted-foreground">Ce mois</p>
              </div>
              <div className="flex items-center gap-2">
                {isPositiveGrowth ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
                <Badge variant={isPositiveGrowth ? "default" : "destructive"}>
                  {isPositiveGrowth ? '+' : ''}{revenueGrowth.toFixed(1)}%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
