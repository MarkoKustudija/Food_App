import Mealtem from "./MealItem/Mealtem";
import useHttp from "../../hook/useHttp";
import Error from "../UI/Error";

const requestConfig = {};

function AvailableMeals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <>
      <ul id="meals">
        {meals.map((meal) => (
          <Mealtem key={meal.id} meal={meal} />
        ))}
      </ul>
    </>
  );
}

export default AvailableMeals;
