import React, { useState, useEffect } from "react";
import { fetchItems } from '../apiHandler'

const AgeDemographicOfUsers = () => {
  const [items, setItems] = useState([])

  useEffect(() => fetchItems().then(data=>setItems(data)), []);
  console.log(items)
  return (
    <div>
      age
    </div>
  )
}

export default AgeDemographicOfUsers
