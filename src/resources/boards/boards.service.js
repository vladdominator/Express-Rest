const usersRepo = require('./boards.memory.repository');

const getAllBoards = () => usersRepo.getAllBoards();
const getBoard = (id) => usersRepo.getBoard(id);
const setBoard = (user) => usersRepo.setBoard(user);
const updateBoard = (id, user) => usersRepo.updateBoard(id, user);
const deleteBoard = (id) => usersRepo.deleteBoard(id);

module.exports = { getAllBoards, getBoard, setBoard, updateBoard, deleteBoard };
