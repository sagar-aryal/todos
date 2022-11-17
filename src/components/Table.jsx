const Table = ({ todos }) => {
  const handleClick = (event) => {
    //  The classList.toggle method toggle class from the element
    event.currentTarget.classList.toggle("inactive");
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Todos</th>
            <th>Deadline</th>
            <th>Priority</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((data, index) => (
            <tr key={index} onClick={handleClick}>
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
    </div>
  );
};

export default Table;
