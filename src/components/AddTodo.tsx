import { FormEvent } from "react";
import { useForm } from "../hooks";
import { IAddTodoProps } from "../interfaces/interfaces";

export const AddTodo = ({ onNewTodo }: IAddTodoProps): JSX.Element => {
	const { formState, onInputChange, onResetForm } = useForm({ task: "" });

	const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onNewTodo({
			...formState,
		});
		onResetForm();
	};

	return (
		<form className="gap-2 d-flex my-1" onSubmit={onFormSubmit}>
			<input
				type="text"
				name="task"
				placeholder="¿Cuál es la tarea?"
				className="form-control"
				value={formState?.task}
				onChange={onInputChange}
			/>
			<button className="btn btn-primary" type="submit">
				Agregar
			</button>
		</form>
	);
};
