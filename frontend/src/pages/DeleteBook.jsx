import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // Import axios

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [publishYear, setPublishYear] = useState("");

  useEffect(() => {
    fetch(`https://bookish-vaulttt.onrender.com/book/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setAuthor(data.author);
        setTitle(data.title);
        setPublishYear(data.publishYear);
      })
      .catch((error) => console.error("Error fetching book data:", error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`https://bookish-vaulttt.onrender.com/book/${id}`)
      .then((res) => {
        alert(res.data.message);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error deleting book data:", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-full mt-10 text-white">
      <div className="flex flex-col w-80 md:w-1/3 p-8 bg-gray-950 rounded-lg shadow-md">
        <h1 className="text-center text-2xl font-bold mb-6">Book Details</h1>
        <div className="text-lg mb-4">
          <span className="font-bold">Title:</span> {data.title}
        </div>
        <div className="text-lg mb-4">
          <span className="font-bold">Author:</span> {data.author}
        </div>
        <div className="text-lg mb-4">
          <span className="font-bold">Publish Year:</span> {data.publishYear}
        </div>

        <button
          className="btn bg-gray-800 text-white py-2 px-4 rounded "
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
