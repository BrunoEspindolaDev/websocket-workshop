import { useState } from "react";
import ChatBar from "./ChatBar";
import ChatNavbar from "./ChatNavbar";
import ChatMessages from "./ChatMessages";

export default function ChatComponent() {
  const [messages, setMessages] = useState([
    { sender: "user", text: "Comprei meu zPhone 23 há alguns dias, mas a página de status de envio não é atualizada. Onde está?" },
    { sender: "agent", text: "Olá Maria! Me envie o código de rastreio do seu pedido para que eu possa te informar onde está." },
    { sender: "user", text: "12345" },
    { sender: "agent", text: "Brilhante! Seu pedido está a caminho da filial selecionada. Chegará em dois dias úteis." },
    { sender: "user", text: "Showww!! Obrigado" },
    { sender: "agent", text: "Um prazer ajudá-lo!" },
  ])
  
  const handleSendMessage = (message) => {
    if (!message) return;
    setMessages(prev => [...prev, { sender: "user", text: message.trim() }]);
  };

  return (
    <div className="flex flex-col h-screen max-w-[600px] mx-auto border-x shadow-lg">
     <ChatNavbar/>
     <ChatMessages messages={messages}/>
     <ChatBar onSendMessage={handleSendMessage}/>
    </div>
  );
}
