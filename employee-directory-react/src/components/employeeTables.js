import React from "react";
import "../style.css";

function EmployeeTables(props){
    return (
      <table class="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img/> </td>
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