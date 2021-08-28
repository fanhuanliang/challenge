import React, { useState, useEffect } from "react";
import { fetchItems, fetchAgeOfUserWith } from "../apiHandler";
import AgeDemographicOfUser from "./AgeDemographicOfUser";
import { DropdownButton, Dropdown, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AgeDemographicOfUsers = () => {
  const [items, setItems] = useState([])
  const [ageDemographic, setAgeDemographic] = useState([])

  const ageOfUserWithHandler = (e) => {
    fetchAgeOfUserWith(e.target.name).then((data) => setAgeDemographic(data));
  }

  useEffect(() => fetchItems().then(data=>setItems(data)), []);

  return (
    <section>
      <h2>Age Demographic of Users With ___</h2>
      <DropdownButton id="dropdown-item-button" title="Items">
        {items.map((item) => (
          <Dropdown.Item key={item} name={item} onClick={ageOfUserWithHandler}>
            {item}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <Table responsive="md" hover>
        <thead>
          <tr>
            <th>Age</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {ageDemographic.map((data) => (
            <AgeDemographicOfUser
              key={data.age}
              age={data.age}
              count={data.count}
            />
          ))}
        </tbody>
      </Table>
    </section>
  );
}

export default AgeDemographicOfUsers
