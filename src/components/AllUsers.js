import React, {useState, useEffect} from 'react'
import { fetchUsers } from '../apiHandler'
import User from './User'

const AllUsers = () => {
  const [users, setUsers] = useState([])
  
  useEffect(() => fetchUsers().then((data) => setUsers(data)), []);
  console.log(users)
  return (
    <div>
      users
      {users.map(user=>(<User key={user.username} username={user.username} age={user.age}/>))}
    </div>
  )
}

export default AllUsers
