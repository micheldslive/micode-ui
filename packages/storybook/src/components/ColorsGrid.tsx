import { colors, darkColors } from "@micode-ui/mocks";
import { ColorsTable } from "@micode-ui/react";

export const ColorsGrid = () => {
  return <ColorsTable colors={colors} />;
};
export const DarkColorsGrid = () => {
  return <ColorsTable colors={darkColors} />;
};
