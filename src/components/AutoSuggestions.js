import React from "react";

const AutoSuggestions = ({
  items,
  setSuggestions,
  setShowSuggestions,
  setSearchTerm,
}) => {
  return (
    <div className="ACcontainer">
      {items.map((item) => (
        <h4
          key={item._id}
          onClick={(e) => {
            console.log("ITEM: ", item.title);
            setSearchTerm(item.title);
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
