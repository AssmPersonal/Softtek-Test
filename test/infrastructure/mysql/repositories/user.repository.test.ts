import { MySQLUserRepository } from '../../../../src/infrastructure/mysql/repositories/user.repository';
import { PrismaClient } from '../../../../src/infrastructure/mysql/generated';
import { User } from '../../../../src/domain/model/user.model';

describe('MySQLUserRepository', () => {
  let mySQLUserRepository: MySQLUserRepository;
  let mockPrismaClient: PrismaClient;

  beforeEach(() => {
    mockPrismaClient = {
      user: {
        create: jest.fn(),
        findMany: jest.fn(),
      }
    } as unknown as PrismaClient;

    mySQLUserRepository = new MySQLUserRepository(mockPrismaClient);
  });

  it('should call prismaClient.user.create with the provided user', async () => {
    const user: User = {
      username: 'JohnDoe',
      email: 'john@example.com',
      password: '123'
    };

    await mySQLUserRepository.create(user);

    expect(mockPrismaClient.user.create).toHaveBeenCalledWith({
      data: user
    });
  });

  it('should call prismaClient.user.findMany for findAll', async () => {
    await mySQLUserRepository.findAll();

    expect(mockPrismaClient.user.findMany).toHaveBeenCalled();
  });
});