import { useEffect, useState } from "react";
import fetchData from "../hooks/fetchData";

const Search = ({ fetchWeatherData }) => {
  const [search, setSearch] = useState("Rajshahi");
  const handleClick = () => {
    fetchWeatherData(search);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="search-container">
      <input
        type="text"
        name="search-bar"
        placeholder="Search city..."
        // value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};
export default Search;
