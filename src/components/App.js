import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const[sushis, setSushi] = useState([])
  const[plates, setPlates] = useState([])
  const[money, setMoney] = useState(100)

  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
      .then((sushi) => setSushi(sushi))
  }, [])

  return (
    <div className="app">
      <SushiContainer plates={plates} setPlates={setPlates}sushis={sushis} setSushi={setSushi} setMoney={setMoney} money={money}/>
      <Table money={money} plates={plates} setPlates={setPlates} sushis={sushis} />
    </div>
  );
}

export default App;
