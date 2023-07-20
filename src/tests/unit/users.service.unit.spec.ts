import { UsersRepository } from '../../modules/users/repositories/users.repository';
import { UsersService } from '../../modules/users/services/users.service';
import { usersMocked } from './__mocks__/users.unit.mocks';

describe('UsersService', () => {
  let usersService: UsersService;
  let usersRepositoryMock = { get: jest.fn() } as unknown as jest.Mocked<UsersRepository>;

  beforeEach(() => {
    usersService = new UsersService();
    usersService['usersRepository'] = usersRepositoryMock;
  });

  it('should return an array of users', async () => {
    const expectedUsers = usersMocked

    jest.spyOn(usersRepositoryMock, 'get').mockResolvedValueOnce(usersMocked)

    const sut = await usersService.get();

    expect(sut).toEqual(expectedUsers);
    expect(usersRepositoryMock.get).toHaveBeenCalled();
  });
});