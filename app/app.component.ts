import { Component } from '@angular/core';
import { User } from './user';

const template = require('./app.template.html');

@Component({
	selector: 'my-app',
	template: template
})
export class AppComponent {
	user: User;
	constructor() {
		this.user = new User();
	}
}
