import { Heading, IconButton, Popover, Surface, Text } from '@micode-ui/react';
import { Info } from 'phosphor-react';

export const PopoverDemo = () => {
  return (
    <Surface>
      <Popover.Root>
        <Popover.Trigger asChild>
          <IconButton>
            <Info />
          </IconButton>
        </Popover.Trigger>
        <Popover.Content side='top'>
          <Heading size='md'>Popover</Heading>
          <Text size='sm'>This is a Popover component</Text>
        </Popover.Content>
      </Popover.Root>
    </Surface>
  );
};
