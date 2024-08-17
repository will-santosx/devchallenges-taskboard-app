import { useState, useEffect } from 'react';
import TaskItem, { TaskItemProps } from './TaskItem';

export default function TaskList() {
	const [tasks, setTasks] = useState<TaskItemProps[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('/api/tasks')
			.then((res) => res.json())
			.then((data) => {
				setTasks(data.tasks);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Failed to fetch tasks:', error);
				setLoading(false);
			});
	}, []);

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
						title={task.title}
						status={task.status}
						icon={task.icon}
					/>
				))}
		</div>
	);
}
