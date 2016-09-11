import { IsNotEmpty, MaxLength, IsEmail } from 'class-validator';

export class User {
	@IsNotEmpty({
		message: 'Firstname is required'
	})
	@MaxLength(20, {
		message: 'Firstname is too long (20 characters max)'
	})
	firstname: string = '';

	@IsNotEmpty({
		message: 'Lastname is required'
	})
	@MaxLength(20, {
		message: 'Lastname is too long (20 characters max)'
	})
	lastname: string = '';

	@IsEmail()
	email: string = '';
}
