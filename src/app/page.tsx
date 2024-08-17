'use client';
import AppLogo from './components/Logo';
import NewTaskButton from './components/NewTaskButton';
import TaskList from './components/TaskList';

export default function Home() {
	return (
		<div className="xl:px-[25%] lg:px-[25%] sm:px-[15%] px-[5%] pt-[2.5rem] flex flex-col gap-10">
			<AppLogo />
			<TaskList />
			<NewTaskButton />
		</div>
	);
}
