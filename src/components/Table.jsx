const Table = ({ todos, error, loading, handleComplete }) => {
  const strikethrough = (index) => {
    handleComplete(index);
  };

  return (
    <div className="todos-table">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Title</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {!error &&
              todos?.map((data, index) => (
                <tr
                  key={index}
                  onClick={() => strikethrough(index)}
                  style={
                    data.completed
                      ? {
                          cursor: "pointer",
                          textDecoration: "red line-through",
                        }
                      : { cursor: "pointer" }
                  }
                >
                  <td>{data.id}</td>
                  <td>{data.title}</td>

                  <td>
                    <button>
                      <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                  <td>
                    <button>
                      <i className="fa-sharp fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
