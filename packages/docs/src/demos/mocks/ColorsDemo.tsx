/** @jsxImportSource react */
import { colors, darkColors } from "@micode-ui/mocks";
import { ColorsTable } from "@micode-ui/react";

export const ColorsDemo = () => {
  return <ColorsTable colors={colors} />;
};
export const DarkColorsDemo = () => {
  return <ColorsTable colors={darkColors} />;
};

