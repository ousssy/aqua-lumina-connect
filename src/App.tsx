
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AgentDashboard from "./pages/AgentDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import AgentClients from "./pages/agent/Clients";
import AgentContracts from "./pages/agent/Contracts";
import AgentTickets from "./pages/agent/Tickets";
import AgentBilling from "./pages/agent/Billing";
import ClientContracts from "./pages/client/Contracts";
import ClientConsumption from "./pages/client/Consumption";
import ClientBills from "./pages/client/Bills";
import ClientTickets from "./pages/client/Tickets";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/agent/dashboard" element={<AgentDashboard />} />
          <Route path="/agent/clients" element={<AgentClients />} />
          <Route path="/agent/contracts" element={<AgentContracts />} />
          <Route path="/agent/tickets" element={<AgentTickets />} />
          <Route path="/agent/billing" element={<AgentBilling />} />
          <Route path="/client/dashboard" element={<ClientDashboard />} />
          <Route path="/client/contracts" element={<ClientContracts />} />
          <Route path="/client/consumption" element={<ClientConsumption />} />
          <Route path="/client/bills" element={<ClientBills />} />
          <Route path="/client/tickets" element={<ClientTickets />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
