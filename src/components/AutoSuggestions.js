import React from "react";

const AutoSuggestions = ({
  items,
  showSuggestions,
  setSuggestions,
  setSearchTerm,
  searchTerm,
}) => {
  return (
    <div className="ACcontainer">
      {items.map((item) => (
        <h4>{item.title}</h4>
      ))}
    </div>
  );
};

export default AutoSuggestions;
