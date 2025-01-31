

const TableSkeleton = () => {
    return (
        <div className="w-full overflow-x-auto mt-10 animate-pulse px-3">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {Array.from({ length: 6 }).map((_, index) => (
                <th key={""+index} className="p-3 bg-gray-300 rounded-full"></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, rowIndex) => (
              <tr key={""+rowIndex}>
                {Array.from({ length: 6 }).map((_, colIndex) => (
                  <td key={""+colIndex} className="p-3">
                    <div className="h-5  min-w-20 bg-gray-300 rounded-md"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default TableSkeleton;