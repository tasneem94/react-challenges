import { ScrollIndicator } from "./components/ScrollIndicator";

function App() {
  return (
    <div className="container">
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
