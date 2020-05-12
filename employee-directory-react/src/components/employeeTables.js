import React from "react";
import "../style.css";

function EmployeeTables(props){
    return (
      <table class="table employeeInfo">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {/* {this.props.map(result => (

          ))} */}
          <tr>
            <td>
              <div className="img-container">
                {/* <img alt={props.name} src={props.image} /> */}
              </div>
            </td>
            <td>John</td>
            <td>78766574</td>
            <td>john@example.com</td>
            <td>01/03/98</td>
          </tr>
        </tbody>
      </table>
    );
}

export default EmployeeTables;