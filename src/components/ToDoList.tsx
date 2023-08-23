import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";

function ToDoList() {
	const [toDos, doings, dones] = useRecoilValue(toDoSelector);
	return (
		<div>
			<h1>To Dos</h1>
			<hr />
			<CreateToDo />
			<h2>To Do</h2>
			<ul>
				{toDos.map((toDo) => (
					<ToDo
						{...toDo}
						key={toDo.id}
					/>
				))}
			</ul>
			<hr />
			<h2>Doing</h2>
			<ul>
				{doings.map((doing) => (
					<ToDo
						{...doing}
						key={doing.id}
					/>
				))}
			</ul>
			<hr />
			<h2>Done</h2>
			<ul>
				{dones.map((done) => (
					<ToDo
						{...done}
						key={done.id}
					/>
				))}
			</ul>
		</div>
	);
}

export default ToDoList;
