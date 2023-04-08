import React, { useState } from "react";

function Sushi({
  id,
  name,
  image,
  price,
  onUpdate,
  emptyPlate,
  money,
  setMoney,
}) {
  const[eaten, setEaten] = useState(false)
  const[broke, setBroke] = useState(false)

  function handleEaten() {
    if (money < price) {
      setBroke(true) 
    } else if(eaten === false) {
      setEaten(true)
      handleUpdatedEaten()
      emptyPlate()
      setMoney(money - price)
    }
  }

  function handleUpdatedEaten() {
    const itemData = {
      id: id,
      name: name,
      img_url: image,
      price: price,
      isEaten: true,
    }
    fetch(`http://localhost:3001/sushis/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
    .then((r) => r.json())
    .then((updatedItem) => onUpdate(updatedItem));
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEaten}>
        {broke ? <div>NOT ENOUGH MONEY</div> : null}
        {eaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
