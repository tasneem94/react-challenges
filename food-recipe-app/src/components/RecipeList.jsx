import { Link } from "react-router-dom";
const RecipeList = ({ item }) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden bg-white/75 shadow-xl gap-5 p-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt="recipe-item" className="w-full" />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <div className="text-2xl font-bold truncate">{item?.title}</div>
        <Link
          to={`/item-details/${item?.id}`}
          className="text-sm mt-5 px-8 py-3 rounded-lg uppercase font-medium tracking-widest inline-block shadow-md bg-black hover:bg-gray-800 duration-100 text-white"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeList;
