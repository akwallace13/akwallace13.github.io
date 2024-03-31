import ListHeader from "./components/ListHeader";
import { useEffect } from "react";

const App = () => {

  const getData = async () => {
    try{
      const response = await fetch('http://localhost:8000/food_and_drink')
      const json = await response.json()
      console.log(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => getData, [])

  return (
    <div className="app">
      <ListHeader listName={'Holiday Tick List'}/>
    </div>
  )
}

export default App;
