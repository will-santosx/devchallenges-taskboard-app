import { Clock, CheckCheck, X } from 'lucide-react';

export interface TaskItemProps {
	status: 'todo' | 'wontdo' | 'progress' | 'done';
	title: string;
	decription?: string;
	icon: number;
}

export default function TaskItem(props: TaskItemProps) {
	function infosByStatus(status: string): [string, string, JSX.Element] {
		switch (status) {
			case 'todo':
				return ['bg-toDoBackground', 'bg-toDoIcon', <></>];
			case 'wontdo':
				return [
					'bg-wontDoBackground',
					'bg-wontDoIcon',
					<X
						key={0}
						className="text-white w-[24px] h-[24px] bg-wontDoBackground/30 rounded-full"
					/>,
				];
			case 'progress':
				return [
					'bg-inProgressBackground',
					'bg-newTaskButton',
					<Clock
						key={0}
						className="text-white w-[24px] h-[24px] bg-inProgressBackground/30 rounded-full"
					/>,
				];
			case 'done':
				return [
					'bg-doneBackground',
					'bg-doneIcon',
					<CheckCheck
						key={0}
						className="text-white w-[24px] h-[24px] bg-doneBackground/30 rounded-full"
					/>,
				];
			default:
				return ['bg-toDoBackground', 'bg-toDoIcon', <></>];
		}
	}
	function iconByNumber(icon: number) {
		switch (icon) {
			case 1:
				return '💻';
			case 2:
				return '💬';
			case 3:
				return '☕️';
			case 4:
				return '💪';
			case 5:
				return '📚';
			case 6:
				return '⏰';
			default:
				return '🙂';
		}
	}
	const status = infosByStatus(props.status);
	const icon = iconByNumber(props.icon);

	return (
		<button
			className={`${status[0]} outline-none transition-all flex-col gap-3 flex justify-center min-h-[75px] p-5 rounded-2xl w-full hover:ring hover:ring-selectedColor/40 focus:ring focus:ring-selectedColor`}
		>
			<div className="flex justify-between items-center w-full">
				<div className="flex gap-[25px] items-center">
					<div className="bg-white rounded-xl w-[50px] h-[50px] text-[25px] flex items-center justify-center">
						{icon}
					</div>
					<span className="text-taskTitle font-taskTitle">
						{props.title}
					</span>
				</div>
				<div
					className={`${status[1]} rounded-xl w-[50px] h-[50px] flex justify-center items-center`}
				>
					{status[2]}
				</div>
			</div>
			{props.decription && (
				<div
					className={`${status[1]} bg-opacity-20 rounded-lg w-full flex p-2`}
				>
					<p className="text-description font-description">
						{props.decription}
					</p>
				</div>
			)}
		</button>
	);
}
