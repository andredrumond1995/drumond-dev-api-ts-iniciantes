import { UsersController } from '../../modules/users/controllers/users.controller';
import { NextFunction, Request, Response } from 'express';
import { UsersService } from '../../modules/users/services/users.service';
import { usersMocked } from './__mocks__/users.unit.mocks';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersServiceMock = { get: jest.fn() } as unknown as jest.Mocked<UsersService>;
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    usersController = new UsersController();
    usersController['usersService'] = usersServiceMock;

    req = {} as Request;
    res = {
      json: jest.fn(),
    } as any;
    next = jest.fn();
  });

  describe('FEATURE: get', () => {
    it('should return an array of users', async () => {
      jest.spyOn(usersServiceMock, 'get').mockResolvedValueOnce(usersMocked);

      await usersController.get(req, res, next);

      expect(res.json).toHaveBeenCalledWith(usersMocked);
    });
  });
});
