import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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

function App() {
    return (
        <div className="container">
        <Header />
        <Menu />
        <Footer />
        </div>
        )
}

function Header() {
  const style = {};
    return (
    <header className='header'>
        <h1 style={style}>Fast React Pizza Co.</h1>
    </header>)
}

function Menu() {
    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            <p>Authentic Italian Cuisine. 6 creative dishes to choose from. All from our stove oven, all organic, all delicious.</p>
            <ul className='pizzas'>
              {pizzaData.map((pizza) => (<Pizza pizzaObj = {pizza} key={pizza.name} />))}
            </ul>
            {/*<Pizza name="Pizza Spinaci" ingredients="Tomato, Mozarella, Spinach, adn Ricotta Cheese" photoName="pizzas/spinaci.jpg" price={7 + 3}  />

    <Pizza name="Pizza Funghi" ingredients="Tomato, Mushrooms" photoName="pizzas/funghi.jpg" price={12}  />*/}
        </main>
    )
}

function Pizza(props) {
  return (
      <li className='pizza'>
      <img src={props.pizzaObj.photoName} alt={props.name}/>
      <div>
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  )
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    /*if(hour >= openHour && hour <= closeHour) alert ("We're currently open!"); else alert("Sorry We're Closed!");*/

    return (
      <footer className='footer'>
        {isOpen ? <Order closeHour={closeHour} /> : (
          <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
        )}
      </footer>
    )
}

function Order(props) {
  return(
    <div className='order'>
        <p>We're open until {props.closeHour}:00. Come visit us or Order online.</p>
        <button className='btn'>Order</button>
      </div>
  )
}

//React Version 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <App />
     </div>);