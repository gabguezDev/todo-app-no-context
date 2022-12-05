import { EnumActionType, TodoType } from "../interfaces";

import { initialState } from "./store";

export const todoReducer = (
	state: typeof initialState,
	action:
		| {
				type: EnumActionType;
				payload: TodoType;
		  }
		| {
				type: EnumActionType;
				payload: undefined;
		  }
) => {
	switch (action.type) {
		case EnumActionType.addTodo:
			return [action.payload, ...state];

		case EnumActionType.deleteTodo:
			return state.filter(todo => todo.id !== action.payload?.id);

		case EnumActionType.statusTodoChange:
			return [
				...state.map(todo =>
					todo.id === action.payload.id
						? { ...todo, done: !action.payload.done }
						: todo
				),
			];

		case EnumActionType.deleteAllTodos:
			return [];

		default:
			return initialState;
	}
};
