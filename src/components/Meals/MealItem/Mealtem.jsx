import { currencyFormatter } from "../../../util/formatting";
import Button from "../../UI/Button";

function Mealtem({ meal}) {

    const addToCartHandler = () => {
    }

  return (
    <li id="meal-item">
      <article className="meal-item article">
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3 className="meal-item-h3">{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions ">
          <Button onClick = {addToCartHandler}>Add to Cart </Button>
        </p>
      </article>
    </li>
  );
}

export default Mealtem;
