import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ShowBook = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/book/${id}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error('Error fetching book data:', error));
  }, [id]);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <div className='flex flex-col w-80 md:w-1/3 p-8 bg-white rounded-lg shadow-md'>
        <label htmlFor="title">Title</label>
        <div>{data.title}</div>
        <label htmlFor="author">Author</label>
        <div>{data.author}</div>
        <label htmlFor="publishYear">Publish Year</label>
        <div>{data.publishYear}</div>
      </div>
    </div>
  );
};

export default ShowBook;
