export interface User {
    id: number;
    email: string;
    name: string;
}

export type CreateUserData = Omit<User, 'id'>;

export interface UserRepository {
    createUser(data: CreateUserData): Promise<User>;
    getUsers(): Promise<User[]>;
}
