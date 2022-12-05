import { TodoType } from "../interfaces";

export const initStateCallback = () => {
	return localStorage.getItem("todos")
		? JSON.parse(localStorage.getItem("todos")!)
		: [];
};

export const initialState: TodoType[] = [];
