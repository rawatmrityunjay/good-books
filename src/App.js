import React , { useState } from "react";
import "./App.css";

const movieDictionary = {
  Romantic: [
    {
      name: "Forrest Gump",
      rating: "8.8/10",
      description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
    },
    {
      name: "Titanic",
      rating: "7.9/10",
      description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
    },
    {
      name: "Her",
      rating: "8.0/10",
      description: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need."
    },
  ],

  Action: [
    {
      name: " Guardians of the Galaxy Vol. 3 ",
      rating: "8.3/10",
      description: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful."
    },
    {
      name: "Dungeons & Dragons: Honor Among Thieves",
      rating: "7.7/10",
      description: "A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people."
    },
    {
      name: "John Wick: Chapter 4",
      rating: "8.2/10",
      description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    },
  ],
  Thriller: [
    {
      name: "The Hunger Games",
      rating: "7.2/10",
      description: "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
    },
    {
      name: "Pearl",
      rating: "7.0/10",
      description: "In 1918, a young woman on the brink of madness pursues stardom in a desperate attempt to escape the drudgery, isolation and lovelessness of life on her parents' farm.",
    },
    {
      name: "Tetris",
      rating: "7.4/10",
      description: "The story of how one of the world's most popular video games found its way to players around the globe. Businessman Henk Rogers and Tetris inventor Alexey Pajitnov join forces in the USSR, risking it all to bring Tetris to the masses.",
    },
  ],
};

function App() {

  const [category, setCategory] = useState("Romantic");

  function categoryClickHandler(category) {

    setCategory(category);

  }

  return (

    <div className="App">

      <h1> 🎬 Movies For You 🎬 </h1>

      <p>

        Checkout below for the best movie recommendations. Select a category toget started.
      
      </p>
      
      <div>
      
        {Object.keys(movieDictionary).map((category) => (
          
          <button className="btn-category" onClick={() => categoryClickHandler(category)}>{category}</button>
        ))}

      </div>

      <hr />

      <div>

        <ul style={{ paddingInlineStart: "0" }}>

          {movieDictionary[category].map((movie) => (

            <li key={movie.name} className="movieItem">

              <div className="name"> {movie.name} </div>

              <div className="rating">

                <em>{movie.rating}</em>

              </div>

              <div className="description"> {movie.description} </div>

            </li>
          

          ))}

        </ul>
        
      </div>

    </div>
  );
}

export default App;