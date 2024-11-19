import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Card, Space } from "antd";

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
    <h1>Hello World</h1>
      
      <ul>
        {data.map((item) => {
          return (
            <Space direction="vertical" size
            ={16} > 
              <Card
                title={item.title}
                extra={<a href="www.google.co.th/">More</a>}
                style={{ width: 300 }}
              >
                <p>
                  {item.id} {item.body}
                </p>
              </Card>
            </Space>
          );
        })}
      </ul>
    </>
  );
}

export default App;
