const uuid = require('uuid');
const database = require('../../dbParametres/db');

class Column {
   constructor(title, order) {
     this.id = uuid.v4();
     this.title = title || 'Column';
     this.order = order || 0;
   }
}

const {boards} = database.db;
const getAllBoards = async () => boards;
const getBoard = async (id) => {
   if (typeof id !== 'string') return null;
   return boards.find(board => board.id === id);
};
const setBoard = async (board) => {
   const { title, columns } = board;

   let columnsWithId;
 
   if (columns) {
     columnsWithId = columns.map(col => ({
         ...col,
         id: uuid.v4()
       }));
   } else {
     columnsWithId = [new Column()];
   }
 
   const boardData = {
     columns: columnsWithId,
     title,
     id: uuid.v4(),
   };
 
   boards.push(boardData);
 
   return boardData;
};
const updateBoard = async (id, boardData) => {
  let index;
  boards.forEach((element, i) => {
     if(element.id === id) {
        index = i;
     }
  });
  if (index >= 0) {
    const newBoard = { ...boardData, id };
    boards[index] = newBoard;
    return newBoard;
  }
  return index;
};
const deleteBoard = async (boardId) => {
   let index;
   boards.forEach((element, i) => {
      if(element.id === boardId) {
         index = i;
      }
   });
   if (index >= 0) {
     boards.splice(1, index);
   }
   return index;
};


module.exports = { getAllBoards, getBoard, setBoard, updateBoard, deleteBoard };