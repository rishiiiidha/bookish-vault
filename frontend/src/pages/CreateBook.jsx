import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    axios
      .post("https://bookish-vaulttt.onrender.com/book", data)
      .then(() => {
        alert("Book added successfully");

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-full m-8 ">
      <div className="flex flex-col border-2 p-10 bg-gray-950 w-96 text-white">
        <label htmlFor="title" className="mb-2">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          className="border-2 border-gray-500 mb-4 px-2 py-1 rounded bg-gray-700 text-white"
        />

        <label htmlFor="author" className="mb-2">
          Author
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          id="author"
          className="border-2 border-gray-500 mb-4 px-2 py-1 rounded bg-gray-700 text-white"
        />

        <label htmlFor="publishYear" className="mb-2">
          Publish Year
        </label>
        <input
          type="number"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          id="publishYear"
          className="border-2 border-gray-500 mb-4 px-2 py-1 rounded bg-gray-700 text-white"
        />

        <button className="p-2 bg-gray-400 m-8" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
