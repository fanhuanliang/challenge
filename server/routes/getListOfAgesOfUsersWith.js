'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
  //In get methods sending item in the query to fetch the list
  try {
    const itemToLookup = request.query;
    const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
    return response.status(200).send(JSON.stringify(data));
  } catch (error) {
    return response.status(500).send(error);
  }
};

module.exports = (app) => {
    app.get('/users/age', getListOfAgesOfUsersWithHandler);
};
