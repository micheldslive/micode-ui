import { colors, darkColors } from "@micode-ui/mocks";
import { getContrast } from "polished";

interface ColorsComponentProps {
  colors: typeof colors;
}

const ColorsComponent = ({ colors }: ColorsComponentProps) => {
  return (
    <>
      {Object.entries(colors).map(([key, color]) => (
        <div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "monospace",
              color: getContrast(color, "#FFF") < 3.5 ? "#000" : "#FFF",
            }}
          >
            <strong>${key}</strong>
            <span>{color}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export const ColorsGrid = () => {
  return <ColorsComponent colors={colors} />;
};
export const DarkColorsGrid = () => {
  return <ColorsComponent colors={darkColors} />;
};
