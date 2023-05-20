import React from "react";
import Reviews from "./Reviews";

function App() {


  return (
    <main >
      <div className="container">
        <div className="title">
          <h2>
            موفق ترین افراد
          </h2>
          <div className="title-border"></div>
        </div>
        <Reviews />
      </div>
    </main>
  );
}

export default App;
