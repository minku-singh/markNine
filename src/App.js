import { useState } from "react";
import "./styles.css";

export default function App() {
  const [food, setFood] = useState("Indian");
  // object
  const foods = {
    Indian: { "Pani-Puri": "4.5/5", Samosa: "4/5", "Aloo Chop": "5/5" },
    Chinese: {
      Dumplings: "4/5",
      "Chow Mein": "3/5",
      Tofu: "2/5",
      "Hot Pot": "3/5"
    },
    Japanese: { Sushi: "3/5", Ramen: "2/5", Tempura: "3/5" },
    Italian: { "Mushroom Risotto": "3/5", "Margherita Pizza": "4.5/5" }
  };

  // array
  const foodsArr = Object.keys(foods);
  const foodList = Object.keys(foods[food]);

  function handleClick(food) {
    setFood(food);
  }

  return (
    <div className="App">
      <article style={{ width: "80vw", margin: "auto" }}>
        <h2>GOOD FOOD</h2>
        <p>Find my favourite foods here. Select a cuisine to get started.</p>

        <section>
          {foodsArr.map((food) => (
            <button
              onClick={() => handleClick(food)}
              style={{
                margin: "0.3rem",
                padding: "0.5rem 0.8rem",
                cursor: "pointer",
                border: "2px solid black",
                borderRadius: "5px",
                backgroundColor: "#FFD5CC"
              }}
              key={food}
            >
              {food}
            </button>
          ))}
        </section>
        <hr />
        <section>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "4rem"
            }}
          >
            {foodList.map((item) => {
              return (
                <li
                  style={{
                    padding: "1rem",
                    border: "2px solid #FFD5CC",
                    listStyle: "none",
                    borderRadius: "5px",
                    margin: "0.5rem",
                    width: "50vw",
                    textAlign: "start",
                    fontSize: "1.5rem"
                  }}
                  key={item}
                >
                  {item}
                  <br />
                  <small>{foods[food][item]}</small>
                </li>
              );
            })}
          </ul>
        </section>
      </article>
    </div>
  );
}
