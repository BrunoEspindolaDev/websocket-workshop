import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const initialState = {
  username: null,
  messages: [
    {
      sender: 'user',
      text: 'Comprei meu zPhone 23 há alguns dias, mas a página de status de envio não é atualizada. Onde está?',
      date: '2023-09-15T10:30:00'
    },
    {
      sender: 'agent',
      text: 'Olá Maria! Me envie o código de rastreio do seu pedido para que eu possa te informar onde está.',
      date: '2023-09-15T10:32:00'
    },
    {
      sender: 'user',
      text: '12345',
      date: '2023-09-15T10:33:00'
    },
    {
      sender: 'agent',
      text: 'Brilhante! Seu pedido está a caminho da filial selecionada. Chegará em dois dias úteis.',
      date: '2023-09-15T10:35:00'
    },
    {
      sender: 'user',
      text: 'Showww!! Obrigado',
      date: '2023-09-15T10:36:00'
    },
    {
      sender: 'agent',
      text: 'Um prazer ajudá-lo!',
      date: '2023-09-15T10:37:00'
    }
  ]
};

const chatStore = create(
  persist(
    set => ({
      ...initialState,
      setUsername: username => set({ username }),
      setMessage: message =>
        set(prev => ({ ...prev, messages: [...prev.messages, message] })),
      updateMock: username =>
        set(prev => ({
          ...prev,
          messages: prev.messages.map(message =>
            message.sender === 'user'
              ? { ...message, sender: username }
              : message
          )
        }))
    }),
    {
      name: 'chat-store',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);

export default chatStore;
