/* eslint-disable react/prop-types */
import React from "react";
import iconNoUser from "../assets/nouser.svg";
import iconLocation from "../assets/icon-location.svg";
import iconCompany from "../assets/icon-company.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconWebsite from "../assets/icon-website.svg";
function Output({ userData }) {
  let joinedDate = "";

  if (userData && userData.created_at) {
    const date = new Date(userData.created_at);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    joinedDate = `${day}/${month}/${year}`;
  }
  return (
    <>
      <div className="w-[50%] md:w-[70%] sm:w-[80%] xs:w-[90%] bg-white p-5 rounded-md dark:bg-darkBlue text-black dark:text-lightWhite">
        <div className="flex p-3">
          <div className="mr-3 h-full flex-shrink-0">
            <img
              className="rounded-full lg:w-[200px] lg:h-[200px] xs:w-[100px] xs:h-[100px] "
              src={
                userData !== null
                  ? userData.avatar_url !== "" || null
                    ? userData.avatar_url
                    : iconNoUser
                  : iconNoUser
              }
              alt=""
            />
          </div>
          <div className="flex flex-col w-full pl-3 ">
            <div className="flex justify-between w-full ">
              <h1 className="text-xl">
                {userData !== null ? userData.name : "invalidUser"}
              </h1>
              <p className="sm:hidden lg:block xs:hidden md:hidden">
                Joined {joinedDate || "28/06/2002"}{" "}
              </p>
            </div>
            <p className="text-blue-400 pb-3">
              {userData !== null ? "@" + userData.login : "@invalidUser"}
            </p>
            <p className="lg:hidden mb-3">Joined {joinedDate || "28/06/2002"} </p>
            <p className="mb-3 sm:hidden xs:hidden md:block lg:block ">
              {userData !== null
                ? userData.bio === null
                  ? "No bio is available for this user"
                  : userData.bio
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum aliquid, sed autem dolores commodi distinctio mollitia saepe quaerat odit aliquam in! Cupiditate laboriosam iusto mollitia tempora perferendis perspiciatis ratione!"}
            </p>
          </div>
        </div>

        <p className="mb-3 md:hidden lg:hidden sm:block xs:block ">
          {userData !== null
            ? userData.bio === null
              ? "No bio is available for this user"
              : userData.bio
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum aliquid, sed autem dolores commodi distinctio mollitia saepe quaerat odit aliquam in! Cupiditate laboriosam iusto mollitia tempora perferendis perspiciatis ratione!"}
        </p>

        <div className="flex justify-around p-4 bg-lightGray dark:bg-customBlack rounded-md mb-6">
          <div className="mr-3">
            <p>Repos</p>
            <p>{userData !== null ? userData.public_repos : "0"}</p>
          </div>
          <div className="mr-3">
            <p>Followers</p>
            <p> {userData !== null ? userData.followers : "0"}</p>
          </div>
          <div className="mr-3">
            <p>Following</p>
            <p> {userData !== null ? userData.following : "0"}</p>
          </div>
        </div>

        <div className="flex md:flex-row lg:flex-row sm:flex-row xs:flex-col justify-between w-[100%]  mb-4">
          <div className="flex items-center space-x-4 w-full xs:pb-4 ">
            <img className="" src={iconLocation} alt="" />
            <p className="">
              {userData !== null ? userData.location : "Jaipur"}
            </p>
          </div>
          <div className="flex items-center space-x-4 w-full">
            <img src={iconTwitter} alt="" />
            <p>
              {userData !== null
                ? userData.twitter_username === null
                  ? "NA"
                  : userData.twitter_username
                : "admin"}
            </p>
          </div>
        </div>
        <div className="flex md:flex-row lg:flex-row sm:flex-row xs:flex-col  justify-between w-[100%]">
          <div className="flex items-center space-x-4 w-full xs:pb-4 ">
            <img className="" src={iconWebsite} alt="" />
            <p className="w-[200px] break-words">
              {userData !== null
                ? userData.url === null
                  ? "NA"
                  : userData.url
                : "https://google.com"}
            </p>
          </div>
          <div className="flex items-center space-x-4 w-full xs:pb-4 ">
            <img src={iconCompany} alt="" />
            <p>
              {userData !== null
                ? userData.company === null
                  ? "NA"
                  : userData.company
                : "admin tech"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Output;
