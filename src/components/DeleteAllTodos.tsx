import { MouseEvent } from "react";

type DeleteAllTodosProps = {
	onDeleteAllTodos: (
		e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	) => void;
};

export const DeleteAllTodos = ({
	onDeleteAllTodos,
}: DeleteAllTodosProps): JSX.Element => {
	return (
		<button className="btn btn-danger my-1" onClick={onDeleteAllTodos}>
			Eliminar todos
		</button>
	);
};
