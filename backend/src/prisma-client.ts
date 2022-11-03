import { PrismaClient } from 'database';

interface CustomNodeJsGlobal extends Global {
    prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient({ log: ['info', 'error', 'query'] });

if (process.env.NODE_ENV === 'development') {
    global.prisma = prisma;
}

export { prisma };
