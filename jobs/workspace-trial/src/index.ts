import { PrismaClient } from 'database';

const prismaClient = new PrismaClient({
  log: ['info', 'query'],
});

export async function run() {
  const deleted = await prismaClient.user.deleteMany();

  console.info(`[${new Date()}] Deleted ${deleted.count}`)
}

run();
