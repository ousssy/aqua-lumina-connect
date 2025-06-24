
import { useState } from "react";
import AgentDashboard from "./AgentDashboard";
import ClientDashboard from "./ClientDashboard";
import { Chatbot } from "@/components/chat/Chatbot";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'agent' | 'client'>('landing');

  if (currentView === 'agent') {
    return <AgentDashboard />;
  }

  if (currentView === 'client') {
    return <ClientDashboard />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Header onViewChange={setCurrentView} />
      <HeroSection onViewChange={setCurrentView} />
      <FeaturesSection />
      <BenefitsSection />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
