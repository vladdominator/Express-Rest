const usersRepo = require('./tasks.memory.repository');

const getAll = () => usersRepo.getAll();
const getUser = (id) => usersRepo.getUser(id);
const setUser = (user) => usersRepo.setUser(user);
const updateUser = (id, user) => usersRepo.updateUser(id, user);
const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAll, getUser, setUser, updateUser, deleteUser };
