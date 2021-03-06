import { Validator, Contains, IsInt, Length, Min, Max, IsEmail, IsFQDN, IsDate } from 'class-validator';
import { User } from './user';

export class Post {
	@Length(10, 20)
	title: string;

	@Contains('hello')
	text: string;

	@IsInt()
	@Min(0)
	@Max(10)
	rating: number;

	@IsEmail()
	email: string;

	@IsFQDN()
	site: string;

	@IsDate()
	createDate: Date;
}

// let post = new Post();
// post.title = 'Hello'; // should not pass 
// post.text = 'this is a great post about hell world'; // should not pass 
// post.rating = 11; // should not pass 
// post.email = 'google.com'; // should not pass 
// post.site = 'googlecom'; // should not pass 
// 
// let validator = new Validator();
// let errors = validator.validate(post, {
// 	skipMissingProperties: true
// }); // returns you array of errors 
// 
// console.log(errors);

let user = new User();
user.firstname = 'Hello zefhiuefhiuzehfiuuzihefiuzfz'; // should not pass 
user.lastname = 'this is a great post about hell world'; // should not pass 
user.email = 'coucou'; // should not pass 

let validator = new Validator();
validator.validate(user, {
	skipMissingProperties: true
}).then(errors => {// returns you array of errors 
	console.error(errors);
});
