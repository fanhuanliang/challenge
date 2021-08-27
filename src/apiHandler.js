const urlBase = "http://localhost:3000";
const urlGetListOfData = "http://localhost:3000/getListOfAgesOfUsersWith";

//get users data
const fetchUsers = () => {
  return fetch(urlBase + "/users").then((response) => response.json());
};

//get list of age of users and number of count
const fetchAgeOfUserWith = (item) => {
  return fetch(urlBase + `/users/age?item=${item}`).then((response) =>
    response.json()
  );
};

export { fetchUsers, fetchAgeOfUserWith };
