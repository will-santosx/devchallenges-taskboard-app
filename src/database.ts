import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export async function deleteTask(id: string) {
	const deleted = await fetch('/api/tasks/' + id, { method: 'DELETE' });
	window.location.reload();
}

export async function updateTask(
	id: string,
	title?: string,
	description?: string,
	status?: string,
	icon?: number,
) {
	const updated = await fetch('/api/tasks/' + id, {
		method: 'PATCH',
		body: JSON.stringify({ title, description, status, icon }),
	});
	window.location.reload()
}

export default prisma;
