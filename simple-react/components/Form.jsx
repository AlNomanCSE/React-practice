import React, { useState } from "react";

export const Form = ({ onAdditems }) => {
  const [description, setDecription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleClick(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAdditems(newItem);
    setDecription("");
    setQuantity(1);
  }
  return (
    <form onSubmit={handleClick}>
      <h3>What do you need for you trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i, indx) => (
          <option value={i} key={indx}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items ..."
        value={description}
        onChange={(e) => setDecription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
