import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { Info } from 'phosphor-react';

export const AccessibleIconSpan = ({ label }: { label: string }) => {
  return (
    <span
      //@ts-ignore
      as={AccessibleIcon}
      label={label}
      css={{ color: '$gray500' }}
    >
      <Info size={16} />
    </span>
  );
};
