import { isEmpty } from 'lodash';
import randomColor from 'randomcolor';
import appStore from '@/app/App.store';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent
} from '@/components/ui/dialog';

const ChatUserDialog = () => {
  const username = appStore(state => state.username);
  const setUsername = appStore(state => state.setUsername);
  const setUsercolor = appStore(state => state.setUsercolor);

  const [value, setValue] = useState('');

  const hasUsername = useMemo(() => !isEmpty(value?.trim()), [value]);

  const handleSave = () => {
    if (!hasUsername) return;
    setUsername(value);
    setUsercolor(randomColor({ luminosity: 'dark' }));
  };

  return (
    <Dialog open={!username}>
      <DialogContent className="w-100">
        <DialogHeader>
          <DialogTitle>Defina seu Username</DialogTitle>
        </DialogHeader>
        <Input
          value={value}
          placeholder="Digite o username..."
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSave()}
        />
        <DialogFooter>
          <Button
            className="w-full cursor-pointer"
            disabled={!hasUsername}
            onClick={handleSave}>
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChatUserDialog;
