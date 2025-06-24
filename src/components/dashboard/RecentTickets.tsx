
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Ticket as TicketIcon, 
  Clock, 
  AlertTriangle, 
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { Ticket } from "@/types";

interface RecentTicketsProps {
  tickets: Ticket[];
  userRole: 'agent' | 'client';
}

const priorityColors = {
  low: "bg-blue-100 text-blue-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-orange-100 text-orange-800",
  urgent: "bg-red-100 text-red-800",
};

const statusColors = {
  open: "bg-gray-100 text-gray-800",
  in_progress: "bg-blue-100 text-blue-800",
  resolved: "bg-green-100 text-green-800",
  closed: "bg-gray-100 text-gray-800",
};

const statusLabels = {
  open: "Ouvert",
  in_progress: "En cours",
  resolved: "Résolu",
  closed: "Fermé",
};

const priorityLabels = {
  low: "Faible",
  medium: "Moyen",
  high: "Élevé",
  urgent: "Urgent",
};

const typeLabels = {
  complaint: "Réclamation",
  intervention: "Intervention",
  info: "Information",
};

export function RecentTickets({ tickets, userRole }: RecentTicketsProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <TicketIcon className="h-3 w-3" />;
      case 'in_progress':
        return <Clock className="h-3 w-3" />;
      case 'resolved':
        return <CheckCircle2 className="h-3 w-3" />;
      case 'closed':
        return <CheckCircle2 className="h-3 w-3" />;
      default:
        return <TicketIcon className="h-3 w-3" />;
    }
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === 'urgent' || priority === 'high') {
      return <AlertTriangle className="h-3 w-3" />;
    }
    return null;
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <TicketIcon className="h-5 w-5" />
            {userRole === 'agent' ? 'Tickets Récents' : 'Mes Réclamations'}
          </CardTitle>
          <CardDescription>
            {userRole === 'agent' 
              ? 'Dernières réclamations et interventions' 
              : 'Statut de vos demandes'
            }
          </CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <ExternalLink className="h-4 w-4 mr-2" />
          Voir tout
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tickets.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <TicketIcon className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>Aucun ticket récent</p>
            </div>
          ) : (
            tickets.slice(0, 5).map((ticket) => (
              <div key={ticket.id} className="flex items-start gap-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">
                    {ticket.ticket_number.slice(-2)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium truncate">#{ticket.ticket_number}</p>
                    <Badge variant="outline" className={`text-xs ${priorityColors[ticket.priority]}`}>
                      {getPriorityIcon(ticket.priority)}
                      <span className="ml-1">{priorityLabels[ticket.priority]}</span>
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground truncate">
                    {ticket.subject}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="secondary" className={statusColors[ticket.status]}>
                      {getStatusIcon(ticket.status)}
                      <span className="ml-1">{statusLabels[ticket.status]}</span>
                    </Badge>
                    <span>•</span>
                    <span>{typeLabels[ticket.type]}</span>
                    <span>•</span>
                    <span>{new Date(ticket.created_at).toLocaleDateString('fr-FR')}</span>
                  </div>
                </div>
                
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
