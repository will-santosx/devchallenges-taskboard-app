import { NextResponse } from "next/server";
import prisma from "@/database";

export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    return NextResponse.json({ tasks });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to retrieve tasks" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const task = await prisma.task.create({
      data: {
        title: "Nova Tarefa",
        description: "",
        icon: 1,
        status: "todo",
      },
    });

    return NextResponse.json({ task }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create task" },
      { status: 500 }
    );
  }
}
