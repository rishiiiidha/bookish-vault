import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-8 ">
      <button
        className="btn w-full h-32 text-2xl bg-gray-950 text-white  border rounded-lg border-gray-700  font-light "
        onClick={() => setShow(true)}
      >
        {book.title}
      </button>
      {show && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="modal-box bg-gray-800 max-w-md mx-auto p-4 rounded-lg shadow-lg text-white">
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold mb-2">Book Information</p>
              <button
                className="btn bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
                onClick={() => setShow(false)}
              >
                Close
              </button>
            </div>
            <div className="flex flex-col text-sm">
              <p>
                <span className="font-bold">Author:</span> {book.author}
              </p>
              <p>
                <span className="font-bold">Created At:</span> {book.createdAt}
              </p>
              <p>
                <span className="font-bold">Publish Year:</span>{" "}
                {book.publishYear}
              </p>
              <p>
                <span className="font-bold">Title:</span> {book.title}
              </p>
              <p>
                <span className="font-bold">Updated At:</span> {book.updatedAt}
              </p>
              <div className="flex mt-4">
                <button
                  className="btn bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded mr-2"
                  onClick={() => {
                    navigate(`/book/edit/${book._id}`);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded mr-2"
                  onClick={() => {
                    navigate(`/book/delete/${book._id}`);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
