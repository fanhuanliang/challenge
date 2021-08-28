import React, { useState, useEffect } from "react";
import { fetchItems, fetchAgeOfUserWith } from "../apiHandler";

const AgeDemographicOfUsers = () => {
  const [items, setItems] = useState([])

  useEffect(() => fetchItems().then(data=>setItems(data)), []);
  // fetchAgeOfUserWith('tv').then(data=>console.log(data));

  return (
    <div>
      age
    </div>
  )
}

export default AgeDemographicOfUsers
