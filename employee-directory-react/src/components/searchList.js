import React from "react";
import "../style.css";

function SearchList(props) {
  return (
    <div className="container-fluid">
      <header>
        <div>
          <div>
            <h3>Associate Directory</h3>
          </div>
          <div>
            <div>
              <input
                onChange = {props.handleInputChange}
                value = {props.value}
                id = "employees"
                type = "text"
                name = "search"
                list = "employee"
                placeholder = "Search by name"
              />
            </div>
            <div>
              <button type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default SearchList;