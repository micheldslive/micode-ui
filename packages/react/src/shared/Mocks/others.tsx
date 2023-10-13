import { Table } from "./styles";

interface MocksGridProps {
    mocks: Record<string, string>;
    hasRemValue?: boolean;
  }
  
  export const MainTable = ({
    mocks,
    hasRemValue = false,
  }: MocksGridProps) => {
    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            {hasRemValue && <th>Pixels</th>}
          </tr>
        </thead>
  
        <tbody>
          {Object.entries(mocks).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && <td>{Number(value.replace("rem", "")) * 16}px</td>}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };