import { atom } from "recoil";

export interface IToDo {
	text: string;
	id: number;
	category: "To_DO" | "DOING" | "Done";
}

export const toDoState = atom<IToDo[]>({
	key: "toDo",
	default: [],
});
