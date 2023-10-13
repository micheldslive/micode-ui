import { MainTable } from "@micode-ui/react";

interface MocksGridProps {
  mocks: Record<string, string>;
  hasRemValue?: boolean;
}

export const MocksGrid = (props: MocksGridProps) => {
  return (
    <MainTable {...props} />
  )
};
