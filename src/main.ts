import serverless from 'serverless-http';
import { Server } from './adapters/express/server';
import { MySQLUserRepository } from './infrastructure/mysql/repositories/user.repository';
import { PrismaClient } from './infrastructure/mysql/generated';
import { UserService } from './application/services/user.service';
import { UserUseCase } from './application/use_cases/user.usecase';
import { UserController } from './adapters/express/controllers/user.controller';
import { SwapiHttpRepository } from './infrastructure/swapi/swapi.repository';
import { SwapiService } from './application/services/swapi.service';
import { SwapiUseCase } from './application/use_cases/swapi.usecase';
import { SwapiController } from './adapters/express/controllers/swapi.controller';

const prismaClient = new PrismaClient();
const userRepository = new MySQLUserRepository(prismaClient);
const swapiRepository = new SwapiHttpRepository();

const userService = new UserService(userRepository);
const swapiService = new SwapiService(swapiRepository);

const userUseCase = new UserUseCase(userService);
const swapiUseCase = new SwapiUseCase(swapiService);

const userController = new UserController("/users", userUseCase);
const swapiController = new SwapiController("/swapi", swapiUseCase)

const server = new Server([
  userController,
  swapiController
]);

module.exports.handler = serverless(server.app);