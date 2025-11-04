interface HeadersProps {
  label: string;
  key: string;
  align?: 'left' | 'center' | 'right';
  width?: string;
}

interface RowProps {
  data: any;
  headers: HeadersProps[];
  renderCell?: (
    row: any,
    header: HeadersProps,
    rowIndex: number,
    colIndex: number
  ) => React.ReactNode;
}

const Table = ({ props }: { props: RowProps }) => {
  const { data, headers, renderCell } = props;
  return (
    <>
      <h1>Table</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {props.headers.map((header, index) => (
              <th
                key={index}
                className={`border border-gray-300 p-2 text-left ${header.align || 'left'}`}
                style={{ width: header.width || 'auto' }}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: any, rowIndex: number) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  className={`border border-gray-300 p-2 text-${header.align || 'left'}`}
                >
                  {renderCell ? renderCell(row, header, rowIndex, colIndex) : row[header.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Table;
