import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
	const setToDos = useSetRecoilState(toDoState);
	const onClick = (newCategory: IToDo["category"]) => {
		setToDos((oldToDos) => {
			const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
			const newToDo = { text, id, category: newCategory };
			return [
				...oldToDos.slice(0, targetIndex),
				newToDo,
				...oldToDos.slice(targetIndex + 1),
			];
		});
	};
	const anotherOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { name },
		} = event;
		setToDos((oldToDos) => {
			const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
			const newToDo = { text, id, category: name as IToDo["category"] };
			return [
				...oldToDos.slice(0, targetIndex),
				newToDo,
				...oldToDos.slice(targetIndex + 1),
			];
		});
	};
	return (
		<li>
			<span>{text}</span>
			{category !== Categories.DOING && (
				<button onClick={() => onClick(Categories.DOING)}>Doing</button>
			)}
			{category !== Categories.TO_DO && (
				<button onClick={() => onClick(Categories.TO_DO)}>To Do</button>
			)}
			{category !== Categories.DONE && (
				<button
					name={Categories.DONE}
					onClick={anotherOnClick}
				>
					Done
				</button>
			)}
		</li>
	);
}

export default ToDo;
