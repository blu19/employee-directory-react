import React from "react";
import Moment from "react-moment";
import "../style.css";

function EmployeeTables(props) {
      return (
        <table>
          <thead>
            <tr>
              <th></th>
              <th onClick={props.sortByName}>Name</th>
              <th>Phone</th>
              <th onClick={props.sortByEmail}>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {props.results.map(
              ({ login, picture, name, phone, email, dob }) => (
                <tr key={login.uuid}>
                  <td>
                    <img src={picture.thumbnail} alt=''></img>
                  </td>
                  <td>
                    {name.first} {name.last}
                  </td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td><Moment format="MM/DD/YYYY">{dob.date}</Moment></td>
                </tr>
              )
            )}
          </tbody>
        </table>
      );
}

export default EmployeeTables;