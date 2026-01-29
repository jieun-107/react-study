import { useState } from "react";
import Recipe from "./Recipe";
import { initailRecipes } from "../../data/InitialData";

export default function RecipeList() {
  const [recipes, setRecipes] = useState(initailRecipes);

  const handleDelete = (id: string) => {
    setRecipes((recipes) => 
      recipes.filter((recipe) => id !== recipe.id)
    );
  }

  return (
    <>
      <Recipe recipes={recipes} handleDelete={handleDelete} />
    </>
  )
}
