import React from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
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
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={18}
        photoName="images/prosciutto.jpg"
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price={15}
        photoName="images/salamino.jpg"
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="images/funghi.jpg"
      />
    </>
  );
}
function Pizza(props) {
  return (
    <div className="pizzaProfile">
      <img src={props.photoName} alt="pizza photo" />
      <h1>{props.name}</h1>
      <p>{props.ingredients}</p>
      Price:<span>{props.price}</span>
    </div>
  );
}

function Footer() {
  const houre = new Date().getHours();
  const oprenHours = 8;
  const closeHours = 22;
  const isOpen = houre >= oprenHours && houre <= closeHours;
  return (
    <footer>
      <strong>{isOpen.toString().toUpperCase()}</strong> We're Curently Open
    </footer>
  );
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
