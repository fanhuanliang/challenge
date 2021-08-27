import React, {useState, useEffect} from 'react'
import { fetchUsers } from '../apiHandler'
const AllUsers = () => {
  const [users, setUsers] = useState([])
  
  useEffect(() => fetchUsers().then((data) => setUsers(data)), []);
  
  return (
    <div>
      users
    </div>
  )
}

export default AllUsers
