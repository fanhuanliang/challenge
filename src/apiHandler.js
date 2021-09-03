const urlBase = "http://localhost:3000";

//get users data
const fetchUsers = () => {
  return fetch(urlBase + "/users").then((response) => response.json());
};

//get users items
const fetchItems = () => {
  return fetch(urlBase + "/items").then((response) => response.json());
};

//get list of age of users and number of count
const fetchAgeOfUserWith = (item) => {
  return fetch(urlBase + `/users/age?item=${item}`).then((response) =>
    response.json()
  );
};

export { fetchUsers, fetchAgeOfUserWith, fetchItems };
