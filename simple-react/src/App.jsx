import React from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "images/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "images/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "images/spinaci.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "images/funghi.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "images/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "images/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <header>
      <h1 className="header">Fast React Pizza Of Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <>
      <h2 className="menu">Our Menu</h2>
      <ul>
        {pizzaData.map((pizza, index) => (
          <Pizza
            key={index}
            photoName={pizza.photoName}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            soldOut={pizza.soldOut}
          />
        ))}
      </ul>
    </>
  );
}
function Pizza(props) {
  return (
    <li className="pizzaProfile">
      <img src={props.photoName} alt="pizza photo" />
      <h1>{props.name}</h1>
      <p>{props.ingredients}</p>
      <span>{props.soldOut ? `Sold Out` : `Price: ${props.price}`}</span>
    </li>
  );
}
function Order({ open }) {
  console.log(open);
  return (
    <>
      <button
        style={{
          backgroundColor: "red",
          padding: "5px",
          fontSize: "2rem",
          borderRadius: "5px",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Order
      </button>
    </>
  );
}
function Footer() {
  const houre = new Date().getHours();
  const oprenHours = 12;
  const closeHours = 22;
  const isOpen = houre >= oprenHours && houre <= closeHours;
  if (isOpen) {
    return (
      <footer>
        <>
          <strong>
            <p>We are Open</p>
          </strong>
          <Order open={isOpen} />
        </>
      </footer>
    );
  } else {
    return (
      <>
        <h1>We are Close Now!</h1>
      </>
    );
  }
}

const App = () => {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
};
export default App;
