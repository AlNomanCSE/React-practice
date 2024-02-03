import React, { useState } from "react";
import { Item } from "./Item";

export const PackingList = ({
  items,
  onDeleteItem,
  onToggleItems,
  onClearAll,
}) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedList = [];
  if (sortBy === "input") {
    sortedList = items;
  }
  if (sortBy === "description") {
    sortedList = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedList = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <>
      <h5>LIST</h5>
      <ul>
        {sortedList.map((item, index) => (
          <Item
            item={item}
            onToggleItems={onToggleItems}
            onDeleteItem={onDeleteItem}
            key={index}
          />
        ))}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="description">Sort by description</option>
          <option value="input">Sort by input order</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
      <button onClick={onClearAll}>Clear list</button>
    </>
  );
};
