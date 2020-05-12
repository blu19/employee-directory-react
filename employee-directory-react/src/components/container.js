import React from "react";
import API from "../API/API";
import EmployeeTables from "./EmployeeTables"
// import Search from "./SearchList";
import "../style.css";

class Container extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {

    API.getUsers()
    .then((res) =>{
        console.log(res)
        this.setState({
            employees: res,
        })
    })
    .catch((err) => console.log(err));
  }



  render(){
      return(
        <p>Hello</p>
        //render employee table component
        //pass props
        //mapping
      )
  }

}

export default Container;