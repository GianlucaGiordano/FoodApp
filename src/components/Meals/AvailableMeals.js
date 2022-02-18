import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useState, useEffect } from "react";

const AvailableMeals = (props) => {
  const [foodList, setFoodlist] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodHandler = async () => {
      try {
        const response = await fetch(
          "https://food-app-10c79-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
        );

        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const data = await response.json();
        if (data === null) {
          throw new Error("something went wrong");
        }
        const foodsData = [];
        for (const item in data) {
          foodsData.push({
            id: item,
            name: data[item].name,
            description: data[item].description,
            price: data[item].price,
          });
        }
        setFoodlist(foodsData);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchFoodHandler();
  }, []);

  const mapDummy = foodList.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      tutto={meal}
      orderList={props.orderList}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>{error ? <p>{error}</p> : <ul>{mapDummy}</ul>}</Card>
    </section>
  );
};

export default AvailableMeals;
