import TaskItem, { TaskItemProps } from './TaskItem';

interface TaskListProps {
	tasks: TaskItemProps[];
	loading: boolean;
}

export default function TaskList({ tasks, loading }: TaskListProps) {
	return (
		<div className="space-y-6 w-full bg-black/5 p-2 rounded-xl h-[28rem] overflow-x-hidden overflow-y-auto">
			{loading && (
				<div className="w-full h-full flex justify-center items-center">
					<span className="text-[20px] animate-pulse">
						Carregando...
					</span>
				</div>
			)}
			{tasks.length > 0 &&
				tasks.map((task, index) => (
					<TaskItem
						key={index}
						id={task.id}
						title={task.title}
						status={task.status}
						icon={task.icon}
						description={task.description}
					/>
				))}
		</div>
	);
}
