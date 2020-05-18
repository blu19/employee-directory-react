import React from "react";
import API from "../API/API";
import SearchList from "./SearchList"
import EmployeeTables from "./EmployeeTables"
import "../style.css";

//setting initial state; starts search as an empty string; 
//opens empty arrays cause those datas will be in form of arrays;
class Container extends React.Component {
  state = {
    search: "",
    employees: [],
    employeeFilter: [],
    order: ""
  };

  componentDidMount() {
    //initializing what's displayed on the page
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

  //API call that happens when page is loaded/refreshed/reloaded
  employeeList = () => {
      API.getUsers().then(res => this.setState({
          employeeFilter: res.data.results,
          employees: res.data.results
      })).catch(err => console.log(err))
  };

  //sorting employees by name in asc or desc order
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

  //sorting employees by email in asc or desc order


  //shows names that match user input
  //changes state of employeeFilter to hold employees that match user input
  handleInputChange = event => {
    const employees = this.state.employees;
    const InputValue = event.target.value;
    const employeeFilter = employees.filter(employee => employee.name.first.toLowerCase().indexOf(InputValue.toLowerCase()) > -1)

    this.setState({
      employeeFilter
    });
  };

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
                handleInputChange = {this.handleInputChange}
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