import sqlite3 from 'sqlite3';

class Database {
  private static instance: sqlite3.Database | null = null;

  private constructor() {}

  static getInstance(): sqlite3.Database {
    if (!Database.instance) {
      Database.instance = new sqlite3.Database('database.db');
    }
    return Database.instance;
  }
}

export default Database;