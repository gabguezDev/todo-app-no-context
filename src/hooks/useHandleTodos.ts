import { useState, useEffect, useReducer } from "react";
import { EnumActionType } from "../interfaces";
import { TodoType } from "../interfaces/interfaces";
import { todoReducer } from "../store/reducer";
import { initialState, initStateCallback } from "../store/store";

export const useHandleTodos = () => {
	const [todos, dispatch] = useReducer(
		todoReducer,
		initialState,
		initStateCallback
	);

	const todosCounter = todos.length;
	const pendingTodos = todos.filter(todo => !todo.done && todo).length;

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleNewTodo = (newTodo: Partial<TodoType>) => {
		dispatch({
			type: EnumActionType.addTodo,
			payload: {
				done: false,
				id: `${Math.random() * 1000}`,
				task: newTodo.task!,
			},
		});
	};

	const handleDeleteAllTodos = () => {
		dispatch({
			type: EnumActionType.deleteAllTodos,
			payload: undefined,
		});
	};

	const handleDeleteTodo = (todo: TodoType) => {
		dispatch({
			type: EnumActionType.deleteTodo,
			payload: {
				...todo,
			},
		});
	};

	const handleChangeTodoStatus = (todo: TodoType) => {
		dispatch({
			type: EnumActionType.statusTodoChange,
			payload: {
				...todo,
			},
		});
	};

	return {
		handleNewTodo,
		handleDeleteAllTodos,
		handleDeleteTodo,
		handleChangeTodoStatus,
		todos,
		todosCounter,
		pendingTodos,
	};
};
