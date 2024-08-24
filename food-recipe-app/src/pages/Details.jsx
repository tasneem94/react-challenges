import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../context/globalContext";

const Details = () => {
  const { recipeDetails, setRecipeDetails } = useContext(GlobalContext);
  const { id } = useParams();
  const getRecipeDetails = async () => {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await response.json();
    console.log(data);
    if (data?.data) {
      setRecipeDetails(data.data);
    }
  };

  useEffect(() => {
    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto ">
        <div className="h-96 overflow-hidden rounded-xl  group">
          <img
            src={recipeDetails?.recipe?.image_url}
            alt="img"
            className="w-full h-full object-cover group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetails?.recipe?.publisher}
        </span>
        <div className="text-2xl font-bold truncate">
          {recipeDetails?.recipe?.title}
        </div>
        <div>
          <button className="px-8 py-3 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white hover:bg-gray-800">
            Save as Favorites
          </button>
        </div>
        <div>
          <div className="text-2xl font-bold text-cyan-900 mb-3">
            Ingredients:
          </div>
          <ul className="flex flex-col gap-3">
            {recipeDetails?.recipe?.ingredients.map((ingredient) => (
              <li>
                <span className="text-2xl font-semibold">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-2xl font-semibold">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
