import React, { useEffect, useState } from "react";

const dummy_meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function AvailableMeals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        if (!response.ok) {
          throw new Error("Something went wrong...");
        }

        const meals = await response.json();
        setMeals(meals);
        console.log(meals);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMeals();
  }, []);

  return (
    <>
      <ul id="meals">
        {meals.map((meal, index) => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </>
  );
}

export default AvailableMeals;
