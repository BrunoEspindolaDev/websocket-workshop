import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const initialState = {
  ws: null,
  username: null
};

const appStore = create(
  persist(
    set => ({
      ...initialState,
      setWs: ws => set({ ws }),
      setUsername: username => set({ username })
    }),
    {
      name: 'app-store',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);

export default appStore;
