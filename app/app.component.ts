import { Component } from '@angular/core';
import { User } from './user';
import { ValidatedClass } from './validated-class.directive';

const template = require('./app.template.html');

@Component({
	selector: 'my-app',
	directives: [ValidatedClass],
	template: template
})
export class AppComponent {
	user: User;
	constructor() {
		this.user = new User();
	}
}
