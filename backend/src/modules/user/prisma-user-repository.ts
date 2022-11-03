import { PrismaClient } from 'database'; 
import type { UserRepository, User, CreateUserData } from './user-types';
import { prisma as defaultClient } from '../../prisma-client';

export class PrismaUserRepository implements UserRepository {
    constructor(private readonly prisma: PrismaClient = defaultClient) {}

    async createUser(data: CreateUserData): Promise<User> {
        return this.prisma.user.create({
            data,
        });
    }

    async getUsers(): Promise<User[]> {
        return this.prisma.user.findMany();
    }
}
