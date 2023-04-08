import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ money, setMoney, sushis, setSushi, setPlates, plates }) {
  const[index, setIndex] = useState(0)

  function handleUpdatedItem(updatedItem) {
    const updatedItems = sushis.map((sushi) => {
      if (sushi.id === updatedItem.id) {
        return updatedItem;
      } else {
        return sushi;
      }
    });
    setSushi(updatedItems)
  }

  function addEmptyPlate() {
    setPlates([...plates, +1])
  }

  return (
    <div className="belt">
      {sushis.slice(index, index+4).map((sushi) => {
        return (
        <Sushi 
          id={sushi.id}
          key={sushi.id}
          name={sushi.name}
          image={sushi.img_url}
          price={sushi.price}
          createdAt={sushi.created_at}
          onUpdate={handleUpdatedItem}
          emptyPlate={addEmptyPlate}
          money={money}
          setMoney={setMoney}
          />
        )
      })}
      <MoreButton index={index} setIndex={setIndex} />
    </div>
  );
}

export default SushiContainer;
