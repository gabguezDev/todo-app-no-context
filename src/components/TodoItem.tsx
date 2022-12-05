import React, { useEffect } from "react";
import { TodoType } from "../interfaces";

export type TodoItemType = {
	todo: TodoType;
	onDeleteTodo: (todo: TodoType) => void;
	onStatusTodoChange: (todo: TodoType) => void;
};

export const TodoItem = ({
	todo,
	onDeleteTodo,
	onStatusTodoChange,
}: TodoItemType) => {
	return (
		<li className="d-flex align-items-center justify-content-between list-group-item">
			<span>
				{todo.task}

				{todo.done ? (
					<span
						className="badge rounded-pill bg-success mx-1 cursor-pointer"
						onClick={() => onStatusTodoChange(todo)}
					>
						DONE
					</span>
				) : (
					<span
						className="badge rounded-pill bg-danger mx-1 cursor-pointer"
						onClick={() => onStatusTodoChange(todo)}
					>
						PENDING
					</span>
				)}
			</span>
			<button
				className="btn btn-sm btn-danger"
				onClick={() => onDeleteTodo(todo)}
			>
				Eliminar
			</button>
		</li>
	);
};
