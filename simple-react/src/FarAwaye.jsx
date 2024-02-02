import React, { useState } from "react";

const initialItems = [
  { id: 1, decription: "Passports", quantity: 2, packed: false },
  { id: 2, decription: "Socks", quantity: 1, packed: true },
  { id: 3, decription: "Earpods", quantity: 3, packed: false },
];
const FarAwaye = () => {
  const [items, setItems] = useState([]);
  const itemNumers = items.length;
  const packedItems = items.filter((item) => item.packed != false).length;
  console.log(packedItems);
  function handelAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handelDelete(id) {
    setItems((items) => items.filter((item) => item.id != id));
  }
  function handelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handelClear() {
    setItems([]);
  }
  return (
    <>
      <Logo />
      <Form onAdditems={handelAddItems} />
      <PackingList
        items={items}
        onToggleItems={handelToggleItem}
        onDeleteItem={handelDelete}
        onClearAll={handelClear}
      />
      <Stats totalItems={itemNumers} packedItems={packedItems} />
    </>
  );
};

const Logo = () => {
  return <h1>Far Awaye </h1>;
};

const Form = ({ onAdditems }) => {
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
const PackingList = ({ items, onDeleteItem, onToggleItems, onClearAll }) => {
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
const Item = ({ item, onDeleteItem, onToggleItems }) => {
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
const Stats = ({ totalItems, packedItems }) => {
  return (
    <footer>
      <em>
        {totalItems == packedItems
          ? totalItems == 0
            ? "Start adding some items to your packing list"
            : "You are readu to go..........."
          : `You have-${totalItems} items on Your list, and you already packed-
        ${packedItems}`}
      </em>
    </footer>
  );
};

export default FarAwaye;
