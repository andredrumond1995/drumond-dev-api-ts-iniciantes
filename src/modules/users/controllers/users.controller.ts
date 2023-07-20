import { NextFunction, Request, Response } from 'express';

import { IUser, IUserAddResponse } from '../interfaces/users.interfaces';
import { UsersService } from '../services/users.service';
import { get } from 'lodash';
import { joiValidator } from '../../../shared/joi/validator';
import { userAddJoiSchema } from '../validators/joi/add.validator.joi';
import { HTTP_CODES } from '../../../shared/constants/http.codes';
import { updateAddJoiSchema } from '../validators/joi/update.validator.joi';

export class UsersController {
  private usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  public async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users: IUser[] = await this.usersService.get();
      
      res.json(users);
    } catch (error) {
      next(error);
    }
  }

  public async add(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const bodyValidated = joiValidator<IUser>(userAddJoiSchema, get(req, 'body'));
      const userAddResponse: IUserAddResponse = await this.usersService.add(bodyValidated);

      res.status(HTTP_CODES.CREATED).json(userAddResponse);
    } catch (error) {
      next(error);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = get(req, 'params.id') as unknown as number;

      await this.usersService.delete(id);

      res.sendStatus(HTTP_CODES.NO_CONTENT);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = get(req, 'params.id') as unknown as number;
      const body = get(req, 'body') as IUser;

      const bodyValidated = joiValidator<IUser>(updateAddJoiSchema, body);

      await this.usersService.update(id, bodyValidated);

      res.sendStatus(HTTP_CODES.NO_CONTENT);
    } catch (error) {
      next(error);
    }
  }
}

export default UsersController;
