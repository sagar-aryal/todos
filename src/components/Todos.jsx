import { useState } from "react";

import Header from "./Header";
import AddTodos from "./AddTodoForm";
import Table from "./Table";
import Footer from "./Footer";
import Overview from "./Overview";

const Todos = () => {
  const [values, setvalues] = useState({
    todo: "",
    datetime: "",
    priority: "",
  });
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setvalues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos((preValues) => [...preValues, { ...values, completed: false }]);
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
    setTodos((_) => [...todos, newTodos]);
  };

  const handleClearTodos = () => {
    setTodos((_) => []);
  };

  return (
    <>
      <Header todos={todos} />
      <div className="container">
        <AddTodos
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Overview handleClearTodos={handleClearTodos} />
        <Table todos={todos} handleComplete={handleComplete} />
      </div>
      <Footer />
    </>
  );
};

export default Todos;
