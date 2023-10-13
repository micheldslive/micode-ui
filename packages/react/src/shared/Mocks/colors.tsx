import { colors, darkColors } from "@micode-ui/mocks";
import { getContrast } from "polished";

interface ColorsComponentProps {
  colors: typeof colors;
}

export const ColorsTable = ({ colors }: ColorsComponentProps) => {
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