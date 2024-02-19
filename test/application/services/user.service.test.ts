import { UserService } from '../../../src/application/services/user.service'
import { User } from '../../../src/domain/model/user.model';
import { UserRepository } from '../../../src/domain/repositories/user.repository.interface';

describe('UserService', () => {
  let userService: UserService;
  let mockUserRepository: UserRepository;

  beforeEach(() => {
    mockUserRepository = {
      create: jest.fn(),
      findAll: jest.fn()
    };

    userService = new UserService(mockUserRepository);
  });

  it('should call userRepository.create with the provided user when createUser is called', async () => {
    const user: User = {
      username: 'JohnDoe',
      email: 'john@example.com',
      password: '123'
    };

    await userService.createUser(user);

    expect(mockUserRepository.create).toHaveBeenCalledWith(user);
  });

  it('should call userRepository.findAll when findAllUsers is called', async () => {
    await userService.findAllUsers();

    expect(mockUserRepository.findAll).toHaveBeenCalled();
  });
});