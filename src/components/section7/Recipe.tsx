export default function Recipe({
  recipes,
  handleDelete,
}: {
  recipes: { id: string; name: string; ingredients: string[] }[];
  handleDelete: (id: string) => void;
}) {
  return (
    <>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <>
            <li key={recipe.id}>
              <h3>{recipe.name}</h3>
              {recipe.ingredients.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </li>
            <button onClick={() => handleDelete(recipe.id)}>삭제</button>
          </>
        ))}
      </ul>
    </>
  );
}
