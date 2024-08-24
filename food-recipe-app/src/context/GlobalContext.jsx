import { Children, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { commonSearchParam } from "../data/commonSearchParam";

const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
  const randomSearchParam =
    commonSearchParam[Math.floor(Math.random() * commonSearchParam.length)];

  const [searchParam, setSearchParam] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (searchQuery, event) => {
    event.preventDefault();

    if (searchParam.trim() !== "") {
      setSubmitted(true);
    } else {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();
      //   console.log(searchParam, data);

      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setLoading(false);
        setSearchParam("");
        setError(null);
      } else {
        setRecipeList([]);
        setError("No recipes found.");
      }

      navigate("/");
    } catch (e) {
      console.log(e);
      setError(e);
      setLoading(false);
      setSearchParam("");
      setRecipeList([]);
    }
  };
  console.log(loading, recipeList);

  useEffect(() => {
    handleSubmit();
  }, [randomSearchParam]);

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
        submitted,
        recipeDetails,
        setRecipeDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
