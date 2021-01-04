import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./../Style/About.css";

function About() {
  useEffect(() => {
    fetchApi();
  }, []);

  const [items, setItem] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );

    const data = await response.json();
    const arrOfData = data.meals;
    console.log(arrOfData);
    setItem(arrOfData);
  };

  return (
    <div className="about">
      {items.map((item) => {
        return (
          <Card
            key={item.idMeal}
            title={item.strMeal}
            image={item.strMealThumb}
          />
        );
      })}
    </div>
  );
}

export default About;
