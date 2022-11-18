import { useState } from "react";

import Header from "./Header";
import AddTodos from "./AddTodoForm";
import Table from "./Table";
import Footer from "./Footer";
import Overview from "./Overview";

const initTodos = [
  {
    todo: "Doctor Appoinment",
    datetime: "2022-11-16T11.00",
    priority: "High",
    completed: true,
  },
  {
    todo: "Family Gathering",
    datetime: "2022-12-01T18.00",
    priority: "High",
    completed: false,
  },
  {
    todo: "Meusum Visit",
    datetime: "2022-12-16T02.51",
    priority: "Low",
    completed: false,
  },
];

const Todos = () => {
  const [values, setvalues] = useState({
    todo: "",
    datetime: "",
    priority: "",
  });
  const [todos, setTodos] = useState(initTodos);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setvalues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos((preValue) => [...preValue, { ...values, completed: false }]);
    setvalues({
      todo: "",
      datetime: "",
      priority: "",
    });
  };

  const handleComplete = (index) => {
    const newTodos = todos.map((todo, idx) => {
      if (index === idx) {
        console.log(todo);
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
        <Table todos={todos} handleComplete={handleComplete} />
      </div>
      <Footer />
    </>
  );
};

export default Todos;
