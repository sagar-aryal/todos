import { useEffect, useState } from "react";

/* import useFetch from "../hooks/useFetch";
 */
import Header from "./Header";
import AddTodos from "./AddTodoForm";
import Table from "./Table";
import Footer from "./Footer";
import Overview from "./Overview";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setvalues] = useState(" ");

  /*  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  ); */

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(todos);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setvalues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos((preValue) => [
      ...preValue,
      {
        ...values,
        completed: false,
      },
    ]);
    setvalues(" ");
  };

  const handleComplete = (index) => {
    const newTodos = todos.map((todo, idx) => {
      if (index === idx) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos((_) => newTodos);
  };

  const handleClearTodos = () => {
    setTodos((_) => []);
  };

  const pendingTasks = todos
    .filter((todo) => todo.completed === false)
    .map((tasks) => tasks);

  const completedTasks = todos
    .filter((todo) => todo.completed !== false)
    .map((tasks) => tasks);

  return (
    <>
      <Header todos={todos} pendingTasks={pendingTasks} />
      <div className="container">
        <AddTodos
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Overview
          handleClearTodos={handleClearTodos}
          pendingTasks={pendingTasks}
          completedTasks={completedTasks}
        />
        <Table
          todos={todos}
          error={error}
          loading={loading}
          handleComplete={handleComplete}
        />
      </div>
      <Footer />
    </>
  );
};

export default Todos;
