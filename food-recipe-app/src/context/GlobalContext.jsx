import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { commonSearchParam } from "../data/commonSearchParam";

const GlobalContext = createContext(null);

const randomSearchParam =
  commonSearchParam[Math.floor(Math.random() * commonSearchParam.length)];

export const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);

  const navigate = useNavigate();

  const fetchRecipes = async (queryParam) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${queryParam}`
      );

      if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
      }

      const data = await response.json();

      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setError(null);
      } else {
        setRecipeList([]);
        setError("No recipes found.");
      }
    } catch (e) {
      console.log(e);
      setError(e.message || "Something went wrong.");
      setRecipeList([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (searchParam.trim() !== "") {
      fetchRecipes(searchParam);
      navigate("/");
    }
  };

  useEffect(() => {
    fetchRecipes(randomSearchParam);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        error,
        recipeList,
        setRecipeList,
        recipeDetails,
        setRecipeDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
