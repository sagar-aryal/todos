import React from "react";

const Search = ({ handleFilterTodos }) => {
  return (
    <form>
      <input
        type="search"
        placeholder="Search todos..."
        onChange={handleFilterTodos}
      />
    </form>
  );
};

export default Search;
