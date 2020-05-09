import React from "react";
import API from "../API/API";
import "../style.css";

//Navbar with search input button
function SearchList(props){
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light bg-light justify-content-between">
          <a className="navbar-brand">
            <h2 className="navbarText">Employee Directory</h2>
            <h5 className="navbarMinorText">
              Use the search list box to narrow down your search
            </h5>
          </a>
          <form className="form-inline">
            <input
            //   onChange={someFunction()}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            //   aria-label="Search"
            />
            <button
            //   onClick={someFunction()}
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    );
};

export default SearchList;