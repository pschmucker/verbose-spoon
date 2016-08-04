import { NotEmpty, MaxLength, IsEmail } from "validator.ts/decorator/Validation";

export class User {
	@NotEmpty({
		message: 'Firstname is required'
	})
	@MaxLength(20, {
		message: 'Firstname is too long (20 characters max)'
	})
	firstname: string;

	@NotEmpty({
		message: 'Lastname is required'
	})
	@MaxLength(20, {
		message: 'Lastname is too long (20 characters max)'
	})
	lastname: string;

	@IsEmail()
	email: string;
}

