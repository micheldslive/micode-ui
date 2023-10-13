/** @jsxImportSource react */
import { Avatar, Box } from '@micode-ui/react';

export const AvatarDemo = () => {
  return (
    <Box
      css={{
        display: 'flex',
        gap: 20
      }}
    >
      <Avatar src='https://avatars.githubusercontent.com/u/55795597?v=4'>
        <Avatar.Fallback></Avatar.Fallback>
      </Avatar>
      <Avatar src='https://avatars.githubusercontent.com/u/45916330?v=4'>
        <Avatar.Fallback></Avatar.Fallback>
      </Avatar>
      <Avatar src={undefined}>
        <Avatar.Fallback>MD</Avatar.Fallback>
      </Avatar>
    </Box>
  );
};
