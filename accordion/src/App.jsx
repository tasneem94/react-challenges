import { useState } from "react";
import Tiles from "./components/Tiles";
import data from "./data/tilesData";

function App() {
  const [enable, setEnable] = useState(false);
  const [currIndex, setCurrIndex] = useState(null);
  const onClickHandler = () => {
    setEnable((prevEnable) => !prevEnable);
  };
  return (
    <div className="container">
      <div className="switch-btn" onClick={onClickHandler}>
        {enable ? "Disable Multiple Accordion" : "Enable Multiple Accordion"}
      </div>
      {data &&
        data.map((item, index) => (
          <Tiles
            key={index}
            index={item.id}
            title={item.title}
            body={item.body}
            enable={enable}
            setEnable={setEnable}
            currIndex={currIndex}
            setCurrIndex={setCurrIndex}
          />
        ))}
    </div>
  );
}

export default App;
