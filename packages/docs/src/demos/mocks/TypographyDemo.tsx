/** @jsxImportSource react */
import { fonts, fontSizes, fontWeights } from "@micode-ui/mocks";
import { MainTable } from "@micode-ui/react";

export const FontsDemo = () => {
  return <MainTable mocks={fonts} />;
};
export const FontSizesDemo = () => {
  return <MainTable mocks={fontSizes} />;
};
export const FontWeightsDemo = () => {
  return <MainTable mocks={fontWeights} />;
};

