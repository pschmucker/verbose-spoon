import { Validator } from "validator.ts/Validator";
import { Contains, IsInt, IsLength, IsEmail, IsFQDN, IsDate } from "validator.ts/decorator/Validation";

export class Post {
	@IsLength(10, 20)
	title: string;

	@Contains('hello')
	text: string;

	@IsInt({ min: 0, max: 10 })
	rating: number;

	@IsEmail()
	email: string;

	@IsFQDN()
	site: string;

	@IsDate()
	createDate: Date;
}

let post = new Post();
post.title = 'Hello'; // should not pass 
post.text = 'this is a great post about hell world'; // should not pass 
post.rating = 11; // should not pass 
post.email = 'google.com'; // should not pass 
post.site = 'googlecom'; // should not pass 

let validator = new Validator();
let errors = validator.validate(post, {
	skipMissingProperties: true
}); // returns you array of errors 

console.log(errors);
