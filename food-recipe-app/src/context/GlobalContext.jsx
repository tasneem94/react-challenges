import { Children, createContext, useState } from "react";

const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipeList, setRecipeList] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchParam.trim() !== "") setSubmitted(true);

    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();
      //   console.log(searchParam, data);

      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setLoading(false);
        // setSearchParam("");
        setError(null);
      }
    } catch (e) {
      console.log(e);
      setError(e);
      setLoading(false);
      //   setSearchParam("");
      setRecipeList([]);
    }
  };
  console.log(loading, recipeList);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        error,
        recipeList,
        submitted,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
