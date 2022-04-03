import React from "react";

const AutoSuggestions = ({
  items,
  setSuggestions,
  setShowSuggestions,
  setSearchTerm,
  setSubmitted,
}) => {
  return (
    <div className="ACcontainer">
      {items.map((item) => (
        <h4
          key={item._id}
          onClick={(e) => {
            setSearchTerm(item.title);
            setSubmitted(true);
            setSuggestions([]);
            setShowSuggestions(false);
          }}
        >
          {item.title}{" "}
        </h4>
      ))}
    </div>
  );
};

export default AutoSuggestions;
