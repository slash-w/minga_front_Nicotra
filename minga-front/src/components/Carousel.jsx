import { React, useState, useEffect } from "react";
import axios from "axios";

export default function Carousel() {
  const [categories, setCategories] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/categories")
      .then((res) => {
        setCategories(res.data.response);
      })
      .catch((err) => console.log(err));
  }, []);

  const next = () => {
    counter !== categories.length - 1 ? setCounter(counter + 1) : setCounter(0);
  };

  const prev = () => {
    counter !== 0 ? setCounter(counter - 1) : setCounter(categories.length - 1);
  };

  if (categories.length === 0) {
    return null;
  }

  const currentCategory = categories[counter];


  return (
    <div className="h-[250px] w-full hidden pt-[7rem] mb-[6rem] md:block">
        <div className="w-full p-2 h-[200px] gap-5 justify-evenly items-center bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] rounded-lg text-white hidden md:flex">
        <img
            className="shadow-lg rotate-180 bg-white p-1 rounded-full"
            src="../public/goodies/arrow.svg"
            onClick={prev}
          ></img>
          <img
            className="h-[220px] mb-8"
            src={categories[counter].character_photo}
          ></img>
          <img
            className="h-[220px] mb-10"
            src={categories[counter].cover_photo}
          ></img>
          <div className="flex flex-col w-[50%] gap-2">
            <h3 className="text-white text-2xl font-medium">
            {categories[counter].name}:
            </h3>
            <p className="text-xs">
            {categories[counter].description}
            </p>
          </div>

          <img
            className="shadow-lg bg-white p-1 rounded-full"
            src="../public/goodies/arrow.svg"
            onClick={next}
          ></img>
        </div>
      </div>
  )
}
