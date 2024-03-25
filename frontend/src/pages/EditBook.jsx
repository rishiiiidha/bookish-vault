import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // Import axios

const EditBook = () => {
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

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handlePublishYearChange = (e) => {
    setPublishYear(e.target.value);
  };
  

  const handleSave = () => {
    const updatedBookData = {
      title: title,
      author: author,
      publishYear: publishYear,
    };
    
    axios
      .put(`https://bookish-vaulttt.onrender.com/book/${id}`, updatedBookData)
      .then((res) => {
        alert(res.data.message);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating book data:", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-full mt-12 text-white ">
      <div className="flex flex-col  md:w-1/3 p-8 bg-gray-900 rounded-lg shadow-md">
        <h1 className="text-center text-2xl font-bold mb-6">Edit Book</h1>
        <div className="flex mb-4">
          <label htmlFor="title" className="text-lg w-1/3">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            className="border-2 border-gray-500 mb-4 px-2 py-1 rounded bg-gray-700 text-white"
            onChange={handleTitleChange}
          />
        </div>
        <div className="flex mb-4">
          <label htmlFor="author" className="text-lg w-1/3">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            className="border-2 border-gray-500 mb-4 px-2 py-1 rounded bg-gray-700 text-white"
            onChange={handleAuthorChange}
          />
        </div>
        <div className="flex mb-4">
          <label htmlFor="publishYear" className="text-lg w-1/3">
            Publish Year
          </label>
          <input
            type="text"
            id="publishYear"
            value={publishYear}
            className="border-2 border-gray-500 mb-4 px-2 py-1 rounded bg-gray-700 text-white"
            onChange={handlePublishYearChange}
          />
        </div>
        <button className="p-2 bg-gray-400 ml-16 w-2/3" onClick={handleSave}>
          Save
        </button>
        
      </div>
    </div>
  );
};

export default EditBook;
