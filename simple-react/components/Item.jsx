import React from "react";

export const Item = ({ item, onDeleteItem, onToggleItems }) => {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onClick={() => onToggleItems(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>X</button>
      </li>
    </div>
  );
};
