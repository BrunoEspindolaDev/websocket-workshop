import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ChatBar = ({ onSendMessage }) => {
  const [value, setValue] = useState("");

  const hasMessage = value.trim().length > 0

  const handleSendMessage = () => {
    if(hasMessage){
      onSendMessage(value);
      setValue("");
    }
  }

  return (
    <div className="flex items-center p-3">
    <Input
      value={value}
      placeholder="Digite sua mensagem..."
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
      className="h-[50px] rounded-4 pl-3"
    />
    <Button className="h-[50px] ml-2 cursor-pointer font-bold rounded-4" disabled={!hasMessage} onClick={handleSendMessage}>
      Enviar
    </Button>
  </div>
  )
}

export default ChatBar;