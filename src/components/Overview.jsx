const Overview = ({ handleClearTodos }) => {
  return (
    <div className="overview">
      <h3>
        Pending tasks : <span> 0</span>
      </h3>
      <h3>
        Completed tasks :<span> 10</span>
      </h3>
      <button onClick={handleClearTodos}>Clear All Todos</button>
    </div>
  );
};

export default Overview;
