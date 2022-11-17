const Table = ({ todos, handleComplete }) => {
  const strikethrough = (index) => {
    handleComplete(index);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Todos</th>
          <th>Date</th>
          <th>Priority</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((data, index) => (
          <tr
            key={index}
            onClick={() => strikethrough(index)}
            style={
              todos.completed
                ? { cursor: "pointer", textDecoration: "red line-through" }
                : { cursor: "pointer" }
            }
          >
            <td>{data.todo}</td>
            <td>{data.datetime}</td>
            <td>{data.priority}</td>
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
  );
};

export default Table;
