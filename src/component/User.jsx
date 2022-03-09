import React from "react";
import "./user.css";

class User extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <>
        <div align="center">
          <table border="1">
            <tbody>
              <tr>
                <th>First Name</th>
                <td>{info.FirstName}</td>
              </tr>
              <tr>
                <th>Last Name</th>
                <td>{info.LastName}</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>{info.Age}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{info.Gender}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{info.City}</td>
              </tr>
              <tr>
                <th>State</th>
                <td>{info.State}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{info.Country}</td>
              </tr>
              <tr>
                <th>Mobile Number</th>
                <td>{info.MobileNumber}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default User;
