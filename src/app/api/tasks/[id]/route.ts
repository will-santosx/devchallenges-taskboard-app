import { NextResponse } from "next/server";
import prisma from "@/database";

interface Params {
  id: string;
}

type RequestPayload = {
  title?: string,
  description?: string,
  icon: 1 | 2 | 3 | 4,
  status?: "todo" | "wontdo" | "progress" | "done"
}

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const taskByID = await prisma.task.findUnique({ where: { id: params.id } });

    if (!taskByID) {
      return NextResponse.json(
        { error: "Invalid request. Invalid task identifier." },
        { status: 404 }
      );
    }

    return NextResponse.json({ task: taskByID }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to retrieve task." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request, { params }: { params: Params }) {
  try {
    const taskByID = await prisma.task.findUnique({ where: { id: params.id } });

    if (!taskByID) {
      return NextResponse.json(
        { error: "Invalid request. Invalid task identifier." },
        { status: 404 }
      );
    }

    const body: RequestPayload = await req.json();

    const updatedTask = await prisma.task.update({
      where: { id: params.id },
      data: {
        title: body.title,
        description: body.description,
        icon: body.icon,
        status: body.status,
      },
    });

    return NextResponse.json({ task: updatedTask }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update task." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, { params }: { params: Params }) {
  try {
    const deletedTask = await prisma.task.delete({ where: { id: params.id } });

    return NextResponse.json({ task: deletedTask }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete task." },
      { status: 500 }
    );
  }
}