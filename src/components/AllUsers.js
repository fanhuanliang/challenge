import React, {useState, useEffect} from 'react'
import { fetchUsers } from '../apiHandler'
import User from './User'
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

const AllUsers = () => {
  const [users, setUsers] = useState([])
  
  useEffect(() => fetchUsers().then((data) => setUsers(data)), []);

  return (
    <section>
      <h2>All Users</h2>
      <div>Users and their age</div>
      <Table responsive="md" hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user.username} username={user.username} age={user.age} />
          ))}
        </tbody>
      </Table>
    </section>
  );
}

export default AllUsers
