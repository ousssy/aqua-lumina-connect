
import { useState } from "react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const predefinedResponses = {
  greetings: [
    "Bonjour ! Je suis l'assistant virtuel de RADEEMA. Comment puis-je vous aider aujourd'hui ?",
    "Salut ! Bienvenue sur RADEEMA Digital. Que puis-je faire pour vous ?",
    "Bonjour et bienvenue ! Je suis là pour répondre à vos questions sur nos services."
  ],
  services: [
    "RADEEMA propose des services de distribution d'eau potable et d'électricité. Nous gérons les abonnements, la facturation, et le service client.",
    "Nos services incluent : gestion des contrats eau/électricité, suivi de consommation, facturation, et support technique."
  ],
  contact: [
    "Vous pouvez nous contacter via l'espace client pour déposer une réclamation, ou utiliser l'espace agent si vous êtes un employé.",
    "Pour toute urgence, contactez notre service client. Vous pouvez aussi utiliser les espaces dédiés sur notre plateforme."
  ],
  bills: [
    "Dans l'espace client, vous pouvez consulter vos factures, voir votre historique de consommation et effectuer des paiements en ligne.",
    "Les factures sont générées mensuellement. Vous recevrez une notification par email et pourrez les consulter dans votre espace personnel."
  ],
  default: [
    "Je ne suis pas sûr de comprendre votre question. Pouvez-vous la reformuler ? Je peux vous aider avec les services RADEEMA, les factures, ou les réclamations.",
    "Désolé, je n'ai pas compris. Essayez de me demander des informations sur nos services, la facturation, ou comment utiliser la plateforme."
  ]
};

export function useChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Bonjour ! Je suis votre assistant virtuel RADEEMA. Comment puis-je vous aider ?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('bonjour') || message.includes('salut') || message.includes('hello')) {
      return predefinedResponses.greetings[Math.floor(Math.random() * predefinedResponses.greetings.length)];
    }
    
    if (message.includes('service') || message.includes('eau') || message.includes('électricité') || message.includes('electricite')) {
      return predefinedResponses.services[Math.floor(Math.random() * predefinedResponses.services.length)];
    }
    
    if (message.includes('contact') || message.includes('réclamation') || message.includes('reclamation') || message.includes('problème') || message.includes('probleme')) {
      return predefinedResponses.contact[Math.floor(Math.random() * predefinedResponses.contact.length)];
    }
    
    if (message.includes('facture') || message.includes('paiement') || message.includes('consommation') || message.includes('bill')) {
      return predefinedResponses.bills[Math.floor(Math.random() * predefinedResponses.bills.length)];
    }
    
    return predefinedResponses.default[Math.floor(Math.random() * predefinedResponses.default.length)];
  };

  const sendMessage = (message: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(message),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  return {
    messages,
    inputMessage,
    setInputMessage,
    sendMessage,
    isLoading
  };
}
