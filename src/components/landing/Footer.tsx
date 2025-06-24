
import { Droplets, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Droplets className="h-6 w-6 text-water-400" />
          <Zap className="h-6 w-6 text-electricity-400" />
          <span className="text-xl font-bold">RADEEMA Digital</span>
        </div>
        <p className="text-gray-400">
          © 2024 RADEEMA. Solution moderne de gestion des services publics.
        </p>
      </div>
    </footer>
  );
}
