import React from "react";
import API from "../API/API";
import SearchList from "./SearchList"
import EmployeeTables from "./EmployeeTables"
import "../style.css";

class Container extends React.Component {
  state = {
    search: "",
    employees: [],
    employeeFilter: [],
    order: ""
  };

  componentDidMount() {

    API.getUsers()
    .then(res => {
      this.setState({
        employees: res.data.results,
        employeeFilter: res.data.results,
      })
    }
    )
    .catch(err => console.log(err));
  };

  employeeList = () => {
      API.getUsers().then(res => this.setState({
          employeeFilter: res.data.results,
          employees: res.data.results
      })).catch(err => console.log(err))
  };

  sortByName = () => {
    const theFilter = this.state.employeeFilter;
    if (this.state.order === "asc") {
      const theSort = theFilter.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
      console.log(theSort)

      this.setState({
        employeeFilter: theSort,
        order: "desc"
      })
    } else {
      const theSort = theFilter.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
      console.log(theSort)

      this.setState({
        employeeFilter: theSort,
        order: "asc"
      })
    }
  }

  employeeSearch = event => {
      event.preventDefault();
      if (!this.state.search) {
          alert("Enter name")
      }
      const { employees, search } = this.state;
      const employeeFilter = employees.filter(employee => employee.name.first.toLowerCase().includes(search.toLowerCase()));
      this.setState({
          employeeFilter
      })
  }

  render(){
    console.log(this.state.employees)
      return(
          <div>
              <SearchList
                employee = {this.state.employees}
                employeeList = {this.employeeList}
                //render employee table component
                //pass props
                //mapping
              />
              <EmployeeTables
                results = {this.state.employeeFilter}
              />
          </div>
      )
  }
}

export default Container;