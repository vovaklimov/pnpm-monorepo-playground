import * as dotenv from 'dotenv';
dotenv.config();
import Fastify from 'fastify';
import { userController } from './modules/user/user-controller';

if (typeof process.env.PORT !== 'string') throw new Error(`PORT env var is not specified`);
const PORT = parseInt(process.env.PORT);

const fastify = Fastify({
    logger: {
        level: 'info',
    },
});

fastify.register(userController);

export async function startServer(port: number) {
    try {
        await fastify.listen({ port, host: '0.0.0.0' });
        fastify.log.info(`Server started on port ${PORT} in ${process.env.NODE_ENV} mode!`);
    } catch (e) {
        fastify.log.error(e);
        process.exitCode = 1;
    }
}

startServer(PORT);
