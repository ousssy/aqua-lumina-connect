
import {
  BarChart3,
  Users,
  FileText,
  Ticket,
  Settings,
  Zap,
  Droplets,
  Home,
  LogOut,
  User
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface AppSidebarProps {
  userRole: 'agent' | 'client';
}

const agentMenuItems = [
  {
    title: "Tableau de bord",
    url: "/agent/dashboard",
    icon: BarChart3,
  },
  {
    title: "Clients",
    url: "/agent/clients",
    icon: Users,
  },
  {
    title: "Contrats",
    url: "/agent/contracts",
    icon: FileText,
  },
  {
    title: "Tickets",
    url: "/agent/tickets",
    icon: Ticket,
  },
  {
    title: "Facturation",
    url: "/agent/billing",
    icon: FileText,
  },
];

const clientMenuItems = [
  {
    title: "Accueil",
    url: "/client/dashboard",
    icon: Home,
  },
  {
    title: "Mes contrats",
    url: "/client/contracts",
    icon: FileText,
  },
  {
    title: "Consommation",
    url: "/client/consumption",
    icon: BarChart3,
  },
  {
    title: "Factures",
    url: "/client/bills",
    icon: FileText,
  },
  {
    title: "Réclamations",
    url: "/client/tickets",
    icon: Ticket,
  },
];

export function AppSidebar({ userRole }: AppSidebarProps) {
  const menuItems = userRole === 'agent' ? agentMenuItems : clientMenuItems;

  return (
    <Sidebar className="border-r bg-card">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Droplets className="h-6 w-6 text-water-500" />
            <Zap className="h-6 w-6 text-electricity-500" />
          </div>
          <div>
            <h1 className="text-xl font-bold">RADEEMA</h1>
            <p className="text-sm text-muted-foreground">
              {userRole === 'agent' ? 'Espace Agent' : 'Espace Client'}
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-accent transition-colors">
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {userRole === 'agent' && (
          <SidebarGroup>
            <SidebarGroupLabel>Services</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="flex items-center gap-3 text-water-600">
                    <Droplets className="h-4 w-4" />
                    <span>Gestion Eau</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="flex items-center gap-3 text-electricity-600">
                    <Zap className="h-4 w-4" />
                    <span>Gestion Électricité</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Avatar>
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Utilisateur</p>
            <p className="text-xs text-muted-foreground truncate">user@example.com</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Settings className="h-4 w-4 mr-2" />
            Paramètres
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start text-destructive hover:text-destructive">
            <LogOut className="h-4 w-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
