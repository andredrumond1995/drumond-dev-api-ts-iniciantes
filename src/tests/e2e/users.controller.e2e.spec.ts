import request from 'supertest';
import server from '../../server';
import { usersMocked } from '../unit/__mocks__/users.unit.mocks';
import UsersController from '../../modules/users/controllers/users.controller';
import { UsersService } from '../../modules/users/services/users.service';
import { ICustomResponse } from '../../shared/interfaces/custom.response.interfaces';
import { get } from 'lodash';

describe('UsersRoutes', () => {
  let usersController: UsersController;

  beforeEach(() => {
    usersController = new UsersController();
  });
  describe('GET /users', () => {
    it('should return an array of users', async () => {
      jest.spyOn(UsersService.prototype, 'get').mockResolvedValueOnce(usersMocked);

      const response = await request(server).get('/users');
      const sut: ICustomResponse = JSON.parse(get(response, 'text'))

      expect(sut.httpCode).toBe(200);
      expect(sut.routePath).toBe('/users');
      expect(sut.data).toEqual(usersMocked);
    });
  });
});
