import "./styles.css";
import { useState } from "react";

export default function App() {
  const [category, setCategory] = useState([]);

  const primaryTextColor = "#374151";
  const secondaryTextColor = "#FFF";
  const miniBg = "#60A5FA";
  const headerBg = "#fff";

  const foodCategories = {
    Fruits: [
      { name: "Apple", rating: "tasty" },
      { name: "Grapes", rating: "very tasty" },
      { name: "Banana", rating: "tasty" },
      { name: "Cherry", rating: "its ok" },
      { name: "Strawberry", rating: "not so tasty" }
    ],
    Veggies: [
      { name: "Cabbage", rating: "mild" },
      { name: "Brocolli", rating: "no so tasty" },
      { name: "Tomato", rating: "tasty" },
      { name: "Carrot", rating: "ok" },
      { name: "Cauliflower", rating: "mild" }
    ],
    Dairy: [
      { name: "Milk", rating: "tasty" },
      { name: "Butter", rating: "tasty" },
      { name: "Cheese", rating: "not so tasty" },
      { name: "Curd", rating: "tasty" },
      { name: "Ghee", rating: "bad" }
    ],
    Protein: [
      { name: "Egg", rating: "tasty" },
      { name: "Chicken", rating: "tasty" },
      { name: "Peanut", rating: "tasty" },
      { name: "Fish", rating: "not so much" },
      { name: "Soya chunks", rating: "mild" }
    ],
    Grains: [
      { name: "Bread", rating: "tasty" },
      { name: "Cereal", rating: "tasty" },
      { name: "oats", rating: "ok" },
      { name: "Pasta", rating: "tasty" },
      { name: "Cornmeal", rating: "ok" }
    ]
  };

  const allCategories = Object.keys(foodCategories);

  const categoryClickHandler = (category) => {
    const matchedCategory = foodCategories[category];
    setCategory(matchedCategory);
  };

  return (
    <div
      className="App"
      style={{
        minHeight: 700,
        justifyContent: "center",
        alignItem: "center",
        alignContent: "center",
        maxWidth: 600,
        margin: "auto",
        backgroundColor: headerBg,
        padding: "0rem 2rem"
      }}
    >
      <div
        style={{
          backgroundColor: headerBg,
          padding: "2rem 0rem"
        }}
      >
        <h1
          style={{
            color: primaryTextColor,
            textAlign: "left",
            margin: 0
          }}
        >
          <span role="img" aria-label="">
            🥗
          </span>{" "}
          Food Categories
        </h1>
      </div>
      <h3
        style={{
          color: primaryTextColor,
          fontSize: "1.2rem",
          fontWeight: "bold",
          textAlign: "left"
        }}
      >
        Check out my taste for different types of foods
      </h3>
      <div
        style={{
          textAlign: "left"
        }}
      >
        {allCategories.map((item) => {
          return (
            <span
              key={item}
              onClick={() => categoryClickHandler(item)}
              style={{
                fontSize: "1.4rem",
                padding: "0.5rem",
                cursor: "pointer",
                display: "inline-block",
                borderRadius: "10px",
                margin: "5px",
                color: secondaryTextColor,
                backgroundColor: miniBg
              }}
            >
              {item}
            </span>
          );
        })}

        <hr style={{ margin: "1rem 0rem" }} />

        <div
          style={{
            color: primaryTextColor,
            fontSize: "1.5rem",
            paddingBottom: 20
          }}
        >
          {category.length > 0 ? (
            category.map((item, index) => {
              return (
                <div
                  key={item.name}
                  style={{
                    border: "1px solid #D1D5DB",
                    padding: "1rem",
                    borderRadius: "10px",
                    marginTop: 20
                  }}
                >
                  <p style={{ margin: 0, color: primaryTextColor }}>
                    {item.name}
                  </p>
                  <p
                    style={{
                      margin: 1,
                      fontSize: "0.6em",
                      backgroundColor: miniBg,
                      display: "inline",
                      padding: "0.2rem 0.5rem",
                      color: secondaryTextColor,
                      borderRadius: "5px"
                    }}
                  >
                    {item.rating}
                  </p>
                </div>
              );
            })
          ) : (
            <div style={{ marginTop: 50 }}>
              Select a category to check what's in it!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
