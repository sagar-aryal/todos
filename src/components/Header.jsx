import logo from "../assets/logo.png";

const Header = ({ date }) => {
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
            <span>2</span>
          </i>
        </div>
      </div>
    </header>
  );
};

export default Header;
