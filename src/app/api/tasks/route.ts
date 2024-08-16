import { NextResponse } from "next/server";
import prisma from "@/database";

type TaskPayload = {
    title: string,
    description: string,
    icon: 1 | 2 | 3 | 4,
    status: "todo" | "wontdo" | "progress" | "done"
}

export async function GET() {
    try {
        const tasks = await prisma.task.findMany();
        return NextResponse.json({ tasks });
    } catch (error) {
        return NextResponse.json({ error: "Failed to retrieve tasks" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body: TaskPayload = await req.json();

        if (!body.title || !body.description || !body.icon || !body.status) {
            return NextResponse.json(
                { error: "Invalid request. Check the parameters." },
                { status: 400 }
            );
        }

        const sameNameTask = await prisma.task.findFirst({ where: { title: body.title } });

        if (sameNameTask) {
            return NextResponse.json(
                { error: "A task with the same name already exists." },
                { status: 400 }
            );
        }

        const task = await prisma.task.create({
            data: {
                title: body.title,
                description: body.description,
                icon: body.icon,
                status: body.status,
            },
        });

        return NextResponse.json({ task }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create task" }, { status: 500 });
    }
}