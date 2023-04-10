import React from "react";
import animals from "./animals.js";
import "./index.css";

// Function to display the fun fact which one was cicked
const displayFact = (e) => {
  let randomIndex = Math.floor(
    Math.random() * animals[e.target.alt].facts.length
  );

  document.getElementById("fact").innerHTML = `<q>${
    animals[e.target.alt].facts[randomIndex]
  }</q>`;
};

const App = () => {
  let images = [];
  for (let animal in animals) {
    let imgItem = (
      <img
        key={animal}
        src={animals[animal].image}
        alt={animal}
        className="image"
        onClick={displayFact}
      />
    );
    images.push(imgItem);
  }

  return (
    <div>
      <div className="container">
        <h1>Click on image to see the fun fact!</h1>
        <div className="images">{images.map((img) => img)}</div>
        <blockquote id="fact"></blockquote>
      </div>

      <footer className="center">
        Built with ❤️ - By{" "}
        <a href="https://github.com/hasibmuhammad" target="_blank">
          Hasib Muhammad
        </a>
      </footer>
    </div>
  );
};

export default App;
