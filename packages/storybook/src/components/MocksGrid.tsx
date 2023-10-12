import "../styles/mocks-grid.css";

interface MocksGridProps {
  mocks: Record<string, string>;
  hasRemValue?: boolean;
}

export const MocksGrid = ({
  mocks,
  hasRemValue = false,
}: MocksGridProps) => {
  return (
    <table className="mocks-grid">
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
    </table>
  );
};
