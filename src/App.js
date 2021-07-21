import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      setFetchedData(data);
    };
    getData();
  }, []);

  console.log("data: ", fetchedData);

  return (
    <div className="App">
      <h1>test</h1>
      {fetchedData.data ? <h2>title: {fetchedData.data.title}</h2> : null}
    </div>
  );
}

export default App;
