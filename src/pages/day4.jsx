import React from "react";
class Parent extends React.Component {
  
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.getUsers();
    }, 1000 * 5)
  }

  getUsers = () => {
    fetch("https://reqres.in/api/users?page=2")
    .then((res) => res.json())
    .then((json) => {
      this.setState({users: json.data});
    })
    .catch((err) => { console.log(err) });
  }

  render() {
    return (
      <>
        <h1>Information from API</h1>
        <table border="1" align="center">
          <tbody>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Avatar</th>
            </tr>
            {this.state.users.length !== 0 ?
            this.state.users.map((user)=>(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td><img src={user.avatar} alt="avatar"/></td>
                </tr>
            ))
            :
            <tr>
              <td colSpan={99}>No Records Found.</td>
            </tr>}
          </tbody>  
        </table> 
      </>
    );
  }
}
export default Parent;
