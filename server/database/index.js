'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = ({item}) => {
    const dataAccessMethod = () => {
        // fill me in :)
        //resultsData will look like[{age: 90, count: 2}, {age:29, count: 1}]
        let resultsData = [];
        //use hash map to store the age and count
        let map = new Map();
        //helper function to look up the age by name
        const getAgeByName = (userName) => {
          for (let value of Object.values(db.usersById)) {
            if (value.username === userName) return value.age;
          }
        }
        //iterate itemsOfUserByUsername and check if the item belongs to whom
        for(let [key, value] of Object.entries(db.itemsOfUserByUsername)) {
          //check if user has item
          if (value.indexOf(item) !== -1) {
            let age= getAgeByName(key)
            //add to map
            if (!map.has(age)) {
              map.set(age, 1)
            } else {
              map.set(age, map.get(age)+1)
            }
          }
        }
        //organize the map data.
        map.forEach((val, key)=>resultsData.push({age: key, count: val}))
        return resultsData;
    }
    return mockDBCall(dataAccessMethod);
}

//add a function to get all the items, avoid duplicate
const getItems = () => {
    const dataAccessMethod = () => {
      let items = [];
      //add all the items from all the users
      _.forEach(db.itemsOfUserByUsername, (item=>items=items.concat(...item)))
      console.log(items)
      //filter the duplicate items and return 
      return _.filter(items, (item, idx)=>items.indexOf(item) === idx)
    }
    return mockDBCall(dataAccessMethod);  
}

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
  getItems,
};
