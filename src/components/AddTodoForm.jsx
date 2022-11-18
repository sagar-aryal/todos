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
      <button type="submit" className="submit-btn">
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
