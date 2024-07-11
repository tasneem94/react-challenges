import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  return (
    <div className="container">
      <ThemeSwitch />
      <div className="content-section">
        <div className="txt">Hi, there!</div>
        <img className="image" src="/forest-trees.jpeg" alt="forrest-trees" />
      </div>
    </div>
  );
}

export default App;
