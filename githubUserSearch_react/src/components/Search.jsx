/* eslint-disable react/prop-types */
import React, { useState } from "react";
import iconSearch from "../assets/icon-search.svg";
function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const searchUser = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data);
    if (data.message === "Not Found") {
      setErrorMessage("User not found");
      setUsername("User not found");
    } else {
      onSearch(data);
    }
    setUsername("");
  };
  const handleChange = (e) => {
    if (errorMessage) setErrorMessage("");
    setUsername(e.target.value);
  };
  return (
    <>
      <div className="bg-white flex w-[50%] h-[50px] md:w-[70%] sm:w-[80%] xs:w-[90%] items-center mb-5 rounded-md dark:bg-darkBlue">
        <div className="searchLogo pr-3 pl-3 flex-shrink-0">
          <img src={iconSearch} alt="" />
        </div>
        <div className="inputButton flex-grow">
          <input
            className={`p-3 dark:text-lightWhite overflow-hidden truncate  w-full outline-none placeholder-blakishBlack dark:placeholder-lightWhite bg-white dark:bg-darkBlue ${
              errorMessage
                ? "placeholder-red-800 dark:placeholderbg-red-400"
                : ""
            }`}
            type="text"
            placeholder={errorMessage || "Search GitHub username.."}
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className="searchButtton flex-shrink-0">
          <button
            onClick={searchUser}
            className=" transition ease-in-out text-white lg:w-[100px] md:w-[100px] hover:bg-blue-400 bg-blue-600 p-2 rounded-md"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;
