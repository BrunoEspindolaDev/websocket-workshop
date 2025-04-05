import { create } from 'zustand';

const initialState = {
  messages: []
};

const chatStore = create(set => ({
  ...initialState,
  setMessage: message =>
    set(prev => ({ ...prev, messages: [...prev.messages, message] }))
}));

export default chatStore;
