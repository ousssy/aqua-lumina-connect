
import { Button } from "@/components/ui/button";
import { Users, Shield, Droplets, Zap } from "lucide-react";

interface HeaderProps {
  onViewChange: (view: 'agent' | 'client') => void;
}

export function Header({ onViewChange }: HeaderProps) {
  return (
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
              onClick={() => onViewChange('client')}
              className="flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Espace Client
            </Button>
            <Button 
              onClick={() => onViewChange('agent')}
              className="flex items-center gap-2"
            >
              <Shield className="h-4 w-4" />
              Espace Agent
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
