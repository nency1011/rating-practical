import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const AddNewRate = (props) => {
  const { onSubmitData, cancel } = props;
  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);

  const ratingChanged = (rate) => {
    setRate(rate);
  };

  const onSubmit = () => {
    const body = {
      name: name,
      rate: 5,
      fill: rate,
    };
    onSubmitData(body);
  };

  return (
    <>
      <div className="fixed flex items-center inset-0 z-50 outline-none focus:outline-none rounded-2xl">
        <div className="relative font-['Montserrat'] w-11/12 md:w-auto mx-auto max-w-3xl bg-white rounded px-10 py-6">
          <div className="text-primary text-center text-2xl font-bold">
            Add User
          </div>
          <div div className="grid grid-cols-2 mt-5">
            <label> user Name</label>
            <input
              type="text"
              className={`w-full placeholder-current bg-[#FFFFFF] text-sm xl:text-lg text-primary leading-none px-3 py-1 border border-solid focus:outline-none focus:bg-white  "border-primary"`}
              onChange={(e) => setName(e.target.value)}
            />
          </div>{" "}
          <div div className="grid grid-cols-2 mt-5 ">
            <label> user Rating</label>
            <ReactStars
              count={5}
              value={rate}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          <div className="justify-center flex mt-5">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onSubmit}
            >
              save
            </button>
            <button
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-5"
              onClick={cancel}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AddNewRate;
