import React from "react";

export const Stats = ({ totalItems, packedItems }) => {
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
