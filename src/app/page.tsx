'use client';
import { useState, useEffect } from 'react';
import AppLogo from './components/Logo';
import NewTaskButton from './components/NewTaskButton';
import { TaskItemProps } from './components/TaskItem';
import TaskList from './components/TaskList';

export default function Home() {
	const [tasks, setTasks] = useState<TaskItemProps[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
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

	const handleTaskAdded = async (newTask: TaskItemProps) => {
		setTasks((prevTasks) => [...prevTasks, newTask]);
	};

	return (
		<div className="xl:px-[25%] lg:px-[25%] sm:px-[15%] px-[5%] pt-[2.5rem] flex flex-col gap-10">
			<AppLogo />
			<TaskList tasks={tasks} loading={loading} />
			<NewTaskButton onTaskAdded={handleTaskAdded} />
		</div>
	);
}
