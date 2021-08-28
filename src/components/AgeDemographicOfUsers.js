import React, { useState, useEffect } from "react";
import { fetchItems, fetchAgeOfUserWith } from "../apiHandler";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AgeDemographicOfUsers = () => {
  const [items, setItems] = useState([])
  const ageOfUserWithHandler = (e) => {
    console.log(e.target.name)
  }

  useEffect(() => fetchItems().then(data=>setItems(data)), []);
  // fetchAgeOfUserWith('tv').then(data=>console.log(data));
  console.log(items)
  return (
    <section>
      <h1>Age Demographic of Users With ___</h1>
      <DropdownButton id="dropdown-item-button" title="Items">
        {items.map((item) => (
          <Dropdown.Item key={item} name={item} onClick={ageOfUserWithHandler}>
            {item}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </section>
  );
}

export default AgeDemographicOfUsers
