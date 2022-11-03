import { PrismaUserRepository } from './prisma-user-repository';
import type { CreateUserData, User, UserRepository } from './user-types';

export class UserService {
    constructor(private readonly userRepository: UserRepository = new PrismaUserRepository()) {}

    async getUsers(): Promise<User[]> {
        return this.userRepository.getUsers();
    }

    async createUser(data: CreateUserData): Promise<User> {
        return this.userRepository.createUser(data);
    }
}
