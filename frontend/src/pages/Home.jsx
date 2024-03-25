import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/book")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="h-screen w-100vh">
      <div className="flex flex-wrap justify-center p-4">
        {data.map((book, index) => (
          <Card
            key={index}
            book={book}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
