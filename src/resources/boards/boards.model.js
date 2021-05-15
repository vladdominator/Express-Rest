const uuid = require('uuid');
const Column = require('./boards.column');

class Board {
  constructor({ title, columns } = {}) {
    this.id = uuid.v4();
    this.title = title || 'Board';
    this.column = columns || [new Column()];
  }
}

module.exports = Board;