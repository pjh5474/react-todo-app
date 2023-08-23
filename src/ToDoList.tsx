import { useForm } from "react-hook-form";

interface IForm {
	email: string;
	firstname: string;
	lastname: string;
	username: string;
	password: string;
	password1: string;
	extraError?: string;
}

function ToDoList() {
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<IForm>({
		defaultValues: {
			email: "@naver.com",
		},
	});
	const onValid = (data: IForm) => {
		if (data.password !== data.password1) {
			setError(
				"password1",
				{
					message: "Password not matched",
				},
				{ shouldFocus: true }
			);
		}

		// setError("extraError", {
		// 	message: "Server Offline",
		// });
	};

	const invalidStrings = ["nico", "las"];

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
							message: "Only naver emails allowed",
						},
					})}
					placeholder="Email"
				/>
				<span>{errors?.email?.message as string}</span>
				<input
					{...register("firstname", {
						required: "First Name is required",
						validate: {
							noNico: (value) =>
								value.includes("nico") ? "Dont use 'nico'" : true,
							noLas: (value) =>
								value.includes("las") ? "Dont use 'las'" : true,
						},
					})}
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
						validate: {
							noInvalidStrings: (value) => {
								let isValid = true;
								let wrongstring = "";
								invalidStrings.forEach((invalidString) => {
									if (value.includes(invalidString)) {
										wrongstring = invalidString;
										isValid = false;
									}
								});
								return isValid || `${wrongstring} is not allowed`;
							},
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
				<span>{errors?.extraError?.message as string}</span>
			</form>
		</div>
	);
}

export default ToDoList;
