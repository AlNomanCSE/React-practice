import React, { useState } from "react";

const initialItems = [
  { id: 1, decription: "Passports", quantity: 2, packed: false },
  { id: 2, decription: "Socks", quantity: 1, packed: true },
  { id: 3, decription: "Earpods", quantity: 3, packed: false },
];
const FarAwaye = () => {
  return (
    <>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </>
  );
};

const Logo = () => {
  return <h1>Far Awaye </h1>;
};
const Form = () => {
  const [decription, setDecription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleClick(e) {
    e.preventDefault();
    if (!decription) return;
    const newItems = { decription, quantity, packed: false, id: Date.now() };
    console.log(newItems);
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
        value={decription}
        onChange={(e) => setDecription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
const PackingList = () => {
  return (
    <>
      <h5>LIST</h5>
      <ul>
        {initialItems.map((items, index) => (
          <Item item={items} key={index} />
        ))}
      </ul>
    </>
  );
};
const Item = ({ item }) => {
  return (
    <div>
      <li style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span>
          {item.decription} {item.quantity}
        </span>
        <button>X</button>
      </li>
    </div>
  );
};
const Stats = () => {
  return (
    <footer>
      <em>You have X items on Your list, and you already packed X</em>
    </footer>
  );
};

export default FarAwaye;
