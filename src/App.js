import { useState, useEffect } from "react";

import AddTodos from "./components/AddTodoForm";
import Header from "./components/Header";
import Table from "./components/Table";

const initialTodos = Object.freeze({
  todo: "",
  datetime: "",
  priority: "",
});

const App = () => {
  const [date, setDate] = useState(new Date());
  const [values, setvalues] = useState(initialTodos);
  const [formData, setFormData] = useState("");

  useEffect(() => {
    const interval = setDate(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setvalues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(values);
    setvalues({
      todo: "",
      datetime: "",
      priority: "",
    });
  };

  return (
    <>
      <Header date={date} />
      <AddTodos
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Table formData={formData} />
    </>
  );
};

export default App;
