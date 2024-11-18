import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}
function App() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Failed to fetch data", err);
      }
    };

    fetchData();
    console.log(data);
  }, []);

  return (
    <>
      Hello World
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.id}</h3>
              <h4>{item.title} </h4>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
