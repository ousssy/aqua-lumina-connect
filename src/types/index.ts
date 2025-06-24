
export interface User {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  role: 'agent' | 'client';
  created_at: string;
  updated_at: string;
}

export interface Contract {
  id: string;
  client_id: string;
  contract_number: string;
  service_type: 'water' | 'electricity';
  address: string;
  meter_number: string;
  status: 'active' | 'inactive' | 'suspended';
  start_date: string;
  created_at: string;
  updated_at: string;
}

export interface ConsumptionReading {
  id: string;
  contract_id: string;
  reading_date: string;
  current_reading: number;
  previous_reading: number;
  consumption: number;
  rate: number;
  amount: number;
  created_at: string;
}

export interface Bill {
  id: string;
  contract_id: string;
  bill_number: string;
  billing_period: string;
  consumption: number;
  amount: number;
  due_date: string;
  status: 'pending' | 'paid' | 'overdue';
  created_at: string;
  paid_at?: string;
}

export interface Ticket {
  id: string;
  client_id: string;
  contract_id?: string;
  ticket_number: string;
  type: 'complaint' | 'intervention' | 'info';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  subject: string;
  description: string;
  assigned_to?: string;
  created_at: string;
  updated_at: string;
  resolved_at?: string;
}

export interface DashboardStats {
  total_clients: number;
  active_contracts: number;
  pending_tickets: number;
  unpaid_bills: number;
  water_consumption: number;
  electricity_consumption: number;
  revenue_current_month: number;
  revenue_previous_month: number;
}
