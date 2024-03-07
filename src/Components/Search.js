import { useState } from "react";
import "./search.css";

export default function SearchTask({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <form>
      <div className="flex">
        <div className="searchBar">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="search"
            id="search-dropdown"
            placeholder="Search Task"
            required
          />
          <button
            onClick={handleClick}
            type="submit"
            className="searchBtn"
         
          >
            <svg
              //   className="h-4 w-4"
              className="searchImg"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="searchText">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
