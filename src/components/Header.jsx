import { useState, useEffect } from "react";

import logo from "../assets/logo.png";

const Header = ({ todos }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <div className="left">
        <img src={logo} alt="logo" />
        <h1>My ToDos</h1>
      </div>
      <div className="right">
        <i className="fa-solid fa-calendar-days"></i>
        <div>
          {date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>
        <i className="fa-regular fa-clock"></i>
        <div>
          {date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          })}
        </div>
        <div className="notification-btn">
          <i className="fa-solid fa-bell">
            <span>{todos.length}</span>
          </i>
        </div>
      </div>
    </header>
  );
};

export default Header;
