import { NextResponse } from "next/server";
import prisma from "@/database";

type TaskPayload = {
    title: string,
    description: string,
    icon: 1 | 2 | 3 | 4,
    status: "todo" | "wontdo" | "progress" | "done"
}

export async function GET() {
    let tasks = await prisma.task.findMany()
    return NextResponse.json({msg: tasks})
}

export async function POST(req: Request) {
    const body: TaskPayload = await req.json()
    if (!body) {
        return NextResponse.json({msg: "invalid request. check the parameters"}, {status: 400})
    }
    let sameNameTask = await prisma.task.findFirst({where: {title: body.title}})
    if (sameNameTask) {return NextResponse.json({msg: "invalid request. a task with that name already exists"}, {status: 400})}
    const task = await prisma.task.create({ data: {
        title: body.title,
        description: body.description,
        icon: body.icon,
        status: body.status
    } });
    return NextResponse.json({msg: task}, {status: 201})
}