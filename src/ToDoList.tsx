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

interface IForm {
	email: string;
	firstname: string;
	lastname: string;
	username: string;
	password: string;
	password1: string;
}

function ToDoList() {
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm<IForm>({
		defaultValues: {
			email: "@naver.com",
		},
	});
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
					{...register("email", {
						required: "Email is required",
						pattern: {
							value: /^[A-Za-z0-9._%+-]+@naver.com$/,
							message: "Only naver email is allowed",
						},
					})}
					placeholder="Email"
				/>
				<span>{errors?.email?.message as string}</span>
				<input
					{...register("firstname", { required: "First Name is required" })}
					placeholder="First Name"
				/>
				<span>{errors?.firstname?.message as string}</span>
				<input
					{...register("lastname", { required: "Last Name is required" })}
					placeholder="Last Name"
				/>
				<span>{errors?.lastname?.message as string}</span>
				<input
					{...register("username", {
						required: "Username is required",
						minLength: {
							value: 5,
							message: "Your username is too short",
						},
					})}
					placeholder="Username"
				/>
				<span>{errors?.username?.message as string}</span>
				<input
					{...register("password", {
						required: "Password is required",
						minLength: {
							value: 5,
							message: "Your password is too short",
						},
					})}
					placeholder="Password"
				/>
				<span>{errors?.password?.message as string}</span>
				<input
					{...register("password1", {
						required: "Password Check is required",
						minLength: {
							value: 5,
							message: "Your password is too short",
						},
					})}
					placeholder="Password Check"
				/>
				<span>{errors?.password1?.message as string}</span>
				<button>Add</button>
			</form>
		</div>
	);
}

export default ToDoList;
