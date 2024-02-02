import React, { useState } from "react";

const initialItems = [
  { id: 1, decription: "Passports", quantity: 2, packed: false },
  { id: 2, decription: "Socks", quantity: 1, packed: true },
  { id: 3, decription: "Earpods", quantity: 3, packed: false },
];
const FarAwaye = () => {
  const [items, setItems] = useState([]);
  function handelAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handelDelete(id) {
    setItems((items) => items.filter((item) => item.id != id));
  }
  return (
    <>
      <Logo />
      <Form onAdditems={handelAddItems} />
      <PackingList items={items} onDeleteItem={handelDelete} />
      <Stats />
    </>
  );
};

const Logo = () => {
  return <h1>Far Awaye </h1>;
};

const Form = ({ onAdditems }) => {
  const [decription, setDecription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleClick(e) {
    e.preventDefault();
    if (!decription) return;
    const newItem = { decription, quantity, packed: false, id: Date.now() };
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
        value={decription}
        onChange={(e) => setDecription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
const PackingList = ({ items, onDeleteItem }) => {
  return (
    <>
      <h5>LIST</h5>
      <ul>
        {items.map((item, index) => (
          <Item item={item} onDeleteItem={onDeleteItem} key={index} />
        ))}
      </ul>
    </>
  );
};
const Item = ({ item, onDeleteItem }) => {
  return (
    <div>
      <li style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span>
          {item.quantity} {item.decription}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>X</button>
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
