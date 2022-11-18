const AddTodoForm = ({ values, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Todo</label>
      <input
        type="text"
        placeholder="Enter todo title.."
        name="todo"
        value={values.todo}
        onChange={handleChange}
        required
        autoComplete="off"
        autoFocus
      />
      <label>Deadline</label>
      <input
        type="datetime-local"
        name="datetime"
        value={values.datetime}
        onChange={handleChange}
        required
      />
      <label>Priority</label>
      <select
        name="priority"
        value={values.priority}
        onChange={handleChange}
        required
      >
        <option value="">None</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" className="submit-btn">
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
