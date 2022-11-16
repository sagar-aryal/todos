const Table = ({ formData }) => {
  console.log(formData);
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
        {/*  <tbody>
          {formData?.map((data) => (
            <tr key={data.todo}>
              <td>{data.todo}</td>
              <td>{data.datatime}</td>
              <td>{data.priority}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
};

export default Table;
