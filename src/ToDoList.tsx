import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
// 	const [toDo, setToDo] = useState("");
// 	const [toDoError, setToDoError] = useState("");
// 	const onChange = (event: React.FormEvent<HTMLInputElement>) => {
// 		const {
// 			currentTarget: { value },
// 		} = event;
// 		setToDoError("");
// 		setToDo(value);
// 	};
// 	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// 		event.preventDefault();
// 		if (toDo.length < 10) {
// 			return setToDoError("Too short");
// 		}
// 		console.log(toDo);
// 	};
// 	return (
// 		<div>
// 			<form onSubmit={onSubmit}>
// 				<input
// 					onChange={onChange}
// 					value={toDo}
// 					placeholder="Write a to do"
// 				/>
// 				<button>Add</button>
// 				{toDoError !== "" ? toDoError : null}
// 			</form>
// 		</div>
// 	);
// }

function ToDoList() {
	const { register, watch, handleSubmit, formState } = useForm();
	const onValid = (data: any) => {
		console.log(data);
	};

	return (
		<div>
			<form
				style={{ display: "flex", flexDirection: "column" }}
				onSubmit={handleSubmit(onValid)}
			>
				<input
					{...register("Email", { required: true })}
					placeholder="Email"
				/>
				<input
					{...register("First Name", { required: true })}
					placeholder="First Name"
				/>
				<input
					{...register("Last Name", { required: true })}
					placeholder="Last Name"
				/>
				<input
					{...register("Username", {
						required: true,
						minLength: {
							value: 5,
							message: "Your username is too short",
						},
					})}
					placeholder="Username"
				/>
				<input
					{...register("Password", {
						required: "Password is required",
						minLength: {
							value: 5,
							message: "Your password is too short",
						},
					})}
					placeholder="Password"
				/>
				<input
					{...register("Password1", { required: true, minLength: 5 })}
					placeholder="Password1"
				/>
				<button>Add</button>
			</form>
		</div>
	);
}

export default ToDoList;
