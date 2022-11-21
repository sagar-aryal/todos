const Table = ({
  todos,
  error,
  loading,
  handleComplete,
  handleUpdateTodo,
  handleDeleteTodo,
}) => {
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
              <th>SN</th>
              <th>Title</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {!error &&
              todos?.map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td
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
                    {data.title}
                  </td>

                  <td>
                    <button onClick={() => handleUpdateTodo(data.id)}>
                      <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteTodo(data.id)}>
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
