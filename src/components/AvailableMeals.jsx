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

  const [meals, setMeals]= useState([]);

  useEffect(() => {
     setMeals(dummy_meals);
  }, []);

  console.log(meals);
  
  return (
    <>
      <ul>
        {meals.map((meal, index) => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </>
  );
}

export default AvailableMeals;