const AddTodoForm = ({ values, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Todos Title</label>
      <input
        type="text"
        placeholder="Enter todos title.."
        name="title"
        value={values.title}
        onChange={handleChange}
        required
        autoComplete="off"
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
