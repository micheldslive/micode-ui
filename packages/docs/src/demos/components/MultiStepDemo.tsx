import { MultiStep, Surface } from '@micode-ui/react';

export const MultiStepDemo = () => {
  return (
    <Surface
      css={{
        width: '80%'
      }}
    >
      <MultiStep size={4} currentStep={2} label='Step 2 of 4' />
    </Surface>
  );
};
