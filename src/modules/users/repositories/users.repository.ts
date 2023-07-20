import sqlite3 from 'sqlite3';
import Database from '../../../config/database';
import { IUser } from '../interfaces/users.interfaces';

export class UsersRepository {
  private db: sqlite3.Database;

  constructor() {
    this.db = Database.getInstance();
  }

  get(): Promise<IUser[]> {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM users', (err, rows: IUser[]) => {
        if (err) {
          console.log({err})
          reject({ msg: 'Erro ao tentar obter os usuários' });
        } else {
          resolve(rows);
        }
      });
    });
  }

  add(user: IUser): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.db.run('INSERT INTO users (name, email) VALUES (?, ?)', [user.name, user.email], function (err) {
        if (err) {
          reject({ msg: 'Erro ao adicionar usuário' });
        } else {
          resolve(this.lastID);
        }
      });
    });
  }

  getByProp(prop: string, value: any): Promise<IUser[]> {
    return new Promise((resolve, reject) => {
      this.db.all(`SELECT * FROM users where ${prop} = ?`, [value], (err, rows: IUser[]) => {
        if (err) {
          reject({ msg: 'Erro ao obter os usuários' });
        } else {
          resolve(rows);
        }
      });
    });
  }

  public deleteById(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run('DELETE FROM users WHERE id = ?', [id], function (err) {
        if (err) {
          reject({ msg: 'Erro ao deletar usuário' });
        } else {
          resolve();
        }
      });
    });
  }

  public updateById(id: number, user: IUser): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run('UPDATE users SET name = ?, email = ? WHERE id = ?', [user.name, user.email, id], function (err) {
        if (err) {
          reject({ msg: 'Erro ao atualizar usuário' });
        } else {
          resolve();
        }
      });
    });
  }
}
