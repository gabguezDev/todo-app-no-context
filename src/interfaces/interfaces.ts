export interface TodoType {
	id: string | number;
	task: string;
	done: boolean;
}

export type TodoActionType = TodoActionNoPayloadType | TodoActionPayloadType;

export type TodoActionPayloadType = {
	type: EnumActionType;
	payload: TodoType;
};
export type TodoActionNoPayloadType = {
	type: EnumActionType;
};

export enum EnumActionType {
	addTodo = "[TO DO] Add TODO",
	deleteTodo = "[TO DO] Delete TODO",
	deleteAllTodos = "[TO DO] Delete All TODOs",
	statusTodoChange = "[TO DO] Change Status TODO",
}

export interface IAddTodoProps {
	onNewTodo: (todo: Partial<TodoType>) => void;
}

// export interface IDeleteTodoProps {
// 	onDeleteAllTodos: (
// 		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
// 	) => void;
// }

// export interface  TodoType {
// 	onDeleteTodo: (
// 		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
// 		id: string | number
// 	) => void;
// }

export interface ITodoListProps {
	todos: TodoType[];
	onDeleteTodo: (todo: TodoType) => void;
	onStatusTodoChange: (todo: TodoType) => void;
}
