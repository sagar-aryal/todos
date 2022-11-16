import { useState } from "react";

const Table = ({ todos }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
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
          {todos?.map((data) => (
            <tr
              key={data.todo}
              className={isActive ? "inactive" : ""}
              onClick={handleClick}
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
    </div>
  );
};

export default Table;
