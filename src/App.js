import { useState, useEffect } from "react";

import AddTodos from "./components/AddTodoForm";
import Header from "./components/Header";
import Table from "./components/Table";

const App = () => {
  const [date, setDate] = useState(new Date());
  const [values, setvalues] = useState({
    todo: "",
    datetime: "",
    priority: "",
  });
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const interval = setDate(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setvalues((preValues) => ({ ...preValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, values]);
    setvalues({
      todo: "",
      datetime: "",
      priority: "",
    });
  };

  return (
    <>
      <Header date={date} todos={todos} />
      <AddTodos
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Table todos={todos} />
    </>
  );
};

export default App;
