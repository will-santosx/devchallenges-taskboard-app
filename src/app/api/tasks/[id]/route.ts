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

export async function GET(req:Request, {params}: {params: Params}) {
  let taskByID = await prisma.task.findUnique({ where: { id: params.id } });
  if (!taskByID)
    return NextResponse.json(
      { msg: "invalid request. invalid task identifier" },
      { status: 400 }
    );
  return NextResponse.json({ msg: taskByID }, { status: 200 });
}

export async function PATCH(req: Request, {params}:{params: Params}){
  let taskByID = await prisma.task.findUnique({where: {id: params.id}})
  let body: RequestPayload = await req.json()
  if (!taskByID) return NextResponse.json({msg: "invalid request. invalid task identifier"}, {status: 400})
  let updatedTask = await prisma.task.update({
    where: { id: params.id },
    data: {
      title: body.title,
      description: body.description,
      status: body.status,
    },
  });
  return NextResponse.json({msg: updatedTask}, {status: 200})
}

export async function DELETE({params}:{params: Params}){
  let deletedTask = await prisma.task.delete({ where: { id: params.id } });
  return NextResponse.json({msg: deletedTask}, {status: 200})
}