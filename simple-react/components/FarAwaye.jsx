import React, { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

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

export default FarAwaye;
