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
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "images/funghi.jpg",
    soldOut: false,
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
          />
          
        ))}
      </ul>

      {/* <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={18}
        photoName="images/prosciutto.jpg"
      /> */}
    </>
  );
}
function Pizza(props) {
  console.log(props);
  return (
    <li className="pizzaProfile">
      <img src={props.photoName} alt="pizza photo" />
      <h1>{props.name}</h1>
      <p>{props.ingredients}</p>
      Price:<span>{props.price}</span>
    </li>
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
