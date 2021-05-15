const uuid = require('uuid');
const database = require('../../dbParametres/db');

const {users} = database.db;
const getAll = async () => users;
const getUser = async (id) => {
   if (typeof id !== 'string') return null;
   return users.find(user => user.id === id);
};
const setUser = async (user) => {
   const newUser = { ...user, id: uuid.v4() };
   users.push(newUser);
   return newUser;
};
const updateUser = async (id, userData) => {
  let index;
  users.forEach((element, i) => {
     if(element.id === id) {
        index = i;
     }
  });
  if (index >= 0) {
    const newUser = { ...userData, id };
    users[index] = newUser;
    return newUser;
  }
  return index;
};
const deleteUser = async (id) => {
   let index;
   users.forEach((element, i) => {
      if(element.id === id) {
         index = i;
      }
   });
   if (index >= 0) {
     users.splice(1, index);
   }
   return index;
};


module.exports = { getAll, getUser, setUser, updateUser, deleteUser };