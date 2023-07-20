import {  head, merge } from 'lodash';
import { IUser, IUserAddResponse } from '../interfaces/users.interfaces';
import { UsersRepository } from '../repositories/users.repository';
import { HTTP_CODES } from '../../../shared/constants/http.codes';

export class UsersService {
  private usersRepository: UsersRepository;
  constructor() {
    this.usersRepository = new UsersRepository();
  }
  public async get(): Promise<IUser[]> {
    const users: IUser[] = await this.usersRepository.get();

    return users;
  }
  public async add(body: IUser): Promise<IUserAddResponse> {
    const shouldAddUser = !!head(await this.getByProp('email', body.email));

    if (shouldAddUser)
      throw { msg: `Email '${body.email}' já cadastrado. Escolha outro email.`, statusCode: HTTP_CODES.BAD_REQUEST };

    const userId: number = await this.usersRepository.add(body);

    return { userId };
  }

  public async getByProp(prop: string, value: any): Promise<IUser[]> {
    const users: IUser[] = await this.usersRepository.getByProp(prop, value);

    return users;
  }

  public async delete(id: number): Promise<void> {
    const shouldDeleteUser = !!head(await this.getByProp('id', id));

    if (!shouldDeleteUser) throw { msg: `Id '${id}' não encontrado.`, statusCode: HTTP_CODES.NOT_FOUND };

    await this.usersRepository.deleteById(id);
  }

  public async update(id: number, user: IUser): Promise<void> {
    const foundUser: IUser | undefined = head(await this.getByProp('id', id));
    const shouldUpdateUser = !!foundUser;

    if (!shouldUpdateUser) throw { msg: `Id '${id}' não encontrado.`, statusCode: HTTP_CODES.NOT_FOUND };

    const mergedUserData = merge(foundUser, user);

    await this.usersRepository.updateById(id, mergedUserData);
  }
}
