import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useState, useEffect } from "react";

const AvailableMeals = (props) => {
  const [foodList, setFoodlist] = useState([]);

  useEffect(() => {
    const fetchFoodHandler = async () => {
      const response = await fetch(
        "https://food-app-10c79-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const data = await response.json();

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
      <Card>
        <ul>{mapDummy}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
