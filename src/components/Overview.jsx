const Overview = ({ handleClearTodos, pendingTasks, completedTasks }) => {
  return (
    <div className="overview">
      <h3>
        Pending tasks : <span> {pendingTasks.length}</span>
      </h3>
      <h3>
        Completed tasks :<span> {completedTasks.length}</span>
      </h3>
      <button onClick={handleClearTodos}>Clear All Todos</button>
    </div>
  );
};

export default Overview;
