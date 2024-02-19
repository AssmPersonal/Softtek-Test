import { UserService } from '../../../src/application/services/user.service';
import { UserUseCase } from '../../../src/application/use_cases/user.usecase';
import { User } from '../../../src/domain/model/user.model';

describe('UserUseCase', () => {
  let userUseCase: UserUseCase;
  let mockUserService: UserService;

  beforeEach(() => {
    mockUserService = {
      createUser: jest.fn(),
      findAllUsers: jest.fn()
    } as unknown as UserService;

    userUseCase = new UserUseCase(mockUserService);
  });

  it('should call userService.createUser with the provided user', async () => {
    const user: User = {
      username: 'JohnDoe',
      email: 'john@example.com',
      password: '123'
    };

    await userUseCase.createUser(user);

    expect(mockUserService.createUser).toHaveBeenCalledWith(user);
  });

  it('should call userService.findAllUsers when findAllUsers is called', async () => {
    await userUseCase.findAllUsers();

    expect(mockUserService.findAllUsers).toHaveBeenCalled();
  });
});