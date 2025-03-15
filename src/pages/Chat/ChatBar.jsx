import { useState } from "react";
import { isEmpty } from "lodash";
import chatStore from './Chat.store';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ChatBar = () => {
  const username = chatStore(({ username }) => username);
  const setMessage = chatStore(({ setMessage }) => setMessage);

  const [value, setValue] = useState("");

  const hasMessage = isEmpty(value.trim());

  const handleSendMessage = () => {
    if(hasMessage){
      setMessage({ sender: username, text: value.trim(), date: new Date() });
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
      className="h-[50px] font-medium rounded-4 pl-3"
    />
    <Button className="h-[50px] ml-2 cursor-pointer font-bold rounded-4" disabled={!hasMessage} onClick={handleSendMessage}>
      Enviar
    </Button>
  </div>
  )
}

export default ChatBar;