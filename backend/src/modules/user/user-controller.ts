import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { UserService } from './user-service';

const userService = new UserService();

export async function userController(fastify: FastifyInstance, _: FastifyPluginOptions): Promise<void> {
    fastify.get('/users', async (_, res) => {
        const users = await userService.getUsers();

        res.status(200).send(users);
    });

    fastify.route({
        url: '/users',
        method: 'POST',
        handler: async (req, res) => {
            const { name, email } = req.body as { name: string; email: string };

            const user = await userService.createUser({ name, email });

            res.status(200).send(user);
        },
    });
}
