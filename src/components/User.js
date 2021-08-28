import React from 'react'

const User = ({username, age}) => {
  return (
    <tr>
      <th>
        {username}  
      </th>
      <th>
        {age}
      </th>
    </tr>
  )
}

export default User
