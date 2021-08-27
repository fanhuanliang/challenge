const urlGetUsers = "http://localhost:3000/getUsers";
const urlGetListOfData = "http://localhost:3000/getListOfAgesOfUsersWith";

//get users data
const fetchUsers = () => {
  return fetch(urlGetUsers).then((response) => response.json());
};

//get list of age of users and number of count
const fetchAgeOfUserWith = (item) => {
  return fetch(urlGetListOfData + `?item=${item}`).then((response) =>
    response.json()
  );
};

export { fetchUsers, fetchAgeOfUserWith };
