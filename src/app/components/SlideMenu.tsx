'use client';
import { useState } from 'react';
import { Clock, CheckCheck, X, Check, Trash } from 'lucide-react';

interface SlideMenuProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	description: string;
	status: string;
	icon: number;
    id: string;
	onSave: (
		title: string,
		status: string,
		icon: number,
        id: string,
		description: string,
	) => void;
	onDelete: (id:string) => void;
}

const SlideMenu = ({
	isOpen,
	onClose,
	title,
	description,
	status,
	icon,
    id,
	onSave,
	onDelete,
}: SlideMenuProps) => {
	const [inputTitle, setTitle] = useState(title);
	const [inputDescription, setDescription] = useState(description);
	const [inputStatus, setStatus] = useState(status);
	const [inputIcon, setIcon] = useState(icon);

	function handleSave() {
		onSave(inputTitle, inputStatus, inputIcon, id, inputDescription);
		onClose();
	}

	function handleDelete() {
		onDelete(id);
		onClose();
	}

	return (
		<div>
			<div
				className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
					isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
				}`}
				onClick={onClose}
			/>
			<div
				className={`fixed overflow-auto bottom-0 left-1/2 transform -translate-x-1/2 h-[650px] flex flex-col gap-7 w-11/12 max-w-lg bg-white p-2 rounded-t-2xl shadow-lg transition-transform duration-300 ${
					isOpen ? 'translate-y-0' : 'translate-y-full'
				}`}
			>
				<div className="flex justify-between">
					<h3 className="text-description font-taskButton">
						Detalhes da Atividade
					</h3>
					<button
						className="border rounded-md p-1 border-black/10"
						onClick={onClose}
					>
						<X className="w-3 h-3 text-newTaskIcon bg-newTaskButton rounded-full" />
					</button>
				</div>
				<div className="space-y-5">
					<div className="flex flex-col">
						<label
							className="text-buttonText opacity-70"
							htmlFor="input-tasktitle"
						>
							Nome da Tarefa
						</label>
						<input
							id="input-tasktitle"
							type="text"
							className="bg-toDoBackground border p-2 border-black/10 rounded-lg"
							placeholder="Insira o nome da tarefa"
							value={inputTitle}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="flex flex-col">
						<label
							className="text-buttonText opacity-70"
							htmlFor="input-taskdescription"
						>
							Descrição
						</label>
						<input
							id="input-taskdescription"
							type="text"
							className="bg-toDoBackground h-[100px] border p-2 border-black/10 rounded-lg"
							placeholder="Insira uma curta descrição"
							value={inputDescription}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					<div className="flex flex-col">
						<label
							className="text-buttonText opacity-70"
							htmlFor="icon-choose"
						>
							Icone
						</label>
						<div id="icon-choose" className="flex gap-5 flex-wrap">
							{['💻', '💬', '☕️', '💪', '📚', '⏰'].map(
								(iconEmoji, index) => (
									<button
										key={index}
										className={`bg-toDoBackground rounded-xl w-[50px] h-[50px] text-[25px] flex items-center justify-center ${
											inputIcon === index + 1
												? 'border border-selectedColor'
												: ''
										}`}
										onClick={() => setIcon(index + 1)}
									>
										{iconEmoji}
									</button>
								),
							)}
						</div>
					</div>
					<div className="flex flex-col">
						<label
							className="text-buttonText opacity-70"
							htmlFor="status-choose"
						>
							Status
						</label>
						<div
							id="status-choose"
							className="flex gap-5 flex-wrap"
						>
							{[
								{
									label: 'Em progresso',
									value: 'progress',
									iconBg: 'newTaskIcon',
									icon: (
										<Clock className="w-[24px] h-[24px] p-1 rounded-full bg-white/30" />
									),
								},
								{
									label: 'Não Farei',
									value: 'wontdo',
									iconBg: 'wontDoIcon',
									icon: (
										<X className="w-[24px] h-[24px] p-1 rounded-full bg-white/30" />
									),
								},
								{
									label: 'Finalizada',
									value: 'done',
									iconBg: 'doneIcon',
									icon: (
										<CheckCheck className="w-[24px] h-[24px] p-1 rounded-full bg-white/30" />
									),
								},
							].map((statusOption) => (
								<button
									key={statusOption.value}
									className={`border border-black/10 rounded-xl p-1 pr-10 text-description font-taskButton gap-x-5 flex items-center justify-center ${
										inputStatus === statusOption.value
											? 'border-selectedColor'
											: ''
									}`}
									onClick={() =>
										setStatus(statusOption.value)
									}
								>
									<div
										className={`bg-${statusOption.iconBg} text-white rounded-xl w-[50px] h-[50px] flex justify-center items-center`}
									>
										{statusOption.icon}
									</div>
									{statusOption.label}
								</button>
							))}
						</div>
					</div>
				</div>
				<div className="w-full flex gap-3 justify-end">
					<button
						className="bg-wontDoIcon text-white p-2 flex gap-1 items-center rounded-2xl"
						onClick={handleDelete}
					>
						Apagar <Trash className="w-4 h-4" />
					</button>
					<button
						className="bg-selectedColor text-white p-2 flex gap-1 items-center rounded-2xl"
						onClick={handleSave}
					>
						Salvar <Check className="w-4 h-4" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default SlideMenu;
