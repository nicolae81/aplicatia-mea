/*import React from "react";
import ReactDOM from "react-dom/client";

//function Greeting() {
// return <h2>My First Component</h2>;}

function Greeting() {
  /*return (
    <React.Fragment>
      <div>
        <h3>Hello word</h3>
        <ul>
          <li>
            <a href="#">hello world</a>
          </li>
        </ul>
      </div>
      <h2>Hello World2</h2>
      <input type="text" name="" id="" />
    </React.Fragment>
  );*/

//NESTING
/*return (
    <div>
      <Person />
      <Message />
    </div>
  );

  {
    const Person = () => <h2>john doe</h2>;
    const Message = () => {
      return <p>this is my message</p>;
    };
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
---------------------------------------------------- */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81wgcld4wxL._AC_UL600_SR600,400_.jpg"
    alt="James Clear"
  />
);
const Title = () => (
  <h2>
    Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones
  </h2>
);
const Author = () => {
  return <h4>by James Clear</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
