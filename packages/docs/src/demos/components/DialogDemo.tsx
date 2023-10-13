import { Button, Dialog, Surface } from '@micode-ui/react';

export const DialogDemo = () => {
  return (
    <Surface>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button variant='primary'>Open Dialog</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Lorem Ipsum dolor</Dialog.Title>
          <Dialog.Description>
            Lorem ipsum dolor sit amet scelerisque in dictum non consectetur a
            erat nam at lectus urna duis convallis convallis tellus
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Root>
    </Surface>
  );
};
