import React from 'react'

const AgeDemographicOfUser = ({age, count}) => {
  return (
    <tr>
      <th>{age}</th>
      <th>{count}</th>
    </tr>
  );
}

export default AgeDemographicOfUser
