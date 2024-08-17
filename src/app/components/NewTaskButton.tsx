import { PlusCircle } from 'lucide-react';

export default function NewTaskButton() {
	async function createNewTask() {
		return await fetch('/api/tasks', { method: 'POST' });
	}

	return (
		<button
			type="button"
			onClick={createNewTask}
			className="w-full bg-newTaskButton h-[75px] transition-all hover:scale-[102%] rounded-2xl space-x-5 hover:ring hover:ring-selectedColor/40 focus:ring focus:ring-selectedColor text-taskButton font-taskButton flex items-center justify-start p-5"
		>
			<div className=" bg-newTaskIcon text-newTaskButton rounded-xl w-[50px] h-[50px] text-[25px] flex items-center justify-center">
				<PlusCircle className="bg-newTaskIcon/30 rounded-full" />
			</div>
			<span>Nova Tarefa</span>
		</button>
	);
}
