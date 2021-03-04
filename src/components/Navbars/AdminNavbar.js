import React, { useState } from "react";
import {Redirect} from 'react-router-dom'
import UserDropdown from "components/Dropdowns/UserDropdown.js";

const admin_layout = [
  'dashboard',
  'settings',
  'tables',
  'maps'
]

const local_href = "/admin/"
export default function Navbar() {
  const [searchTerm,setSearchTerm] = React.useState("")
  const [searchResults,setSearchResults] = React.useState([])
  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  React.useEffect(()=>{
    const results = admin_layout.filter( admin=> 
      admin.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results)
  },[searchTerm])
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                value={searchTerm}
                onChange={handleChange}
                className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
              />
            </div>
            <ul>
              {searchResults.map(item => (
                <li><a href={local_href+item}>{item}</a></li>
              ))}
            </ul>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
