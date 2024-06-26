import { useState } from "react";
import Tiles from "./components/Tiles";
import data from "./data/tilesData";

function App() {
  return (
    <div className="container">
      {data &&
        data.map((item, index) => (
          <Tiles
            key={index}
            index={index}
            title={item.title}
            body={item.body}
          />
        ))}
    </div>
  );
}

export default App;
