import { Component } from '@angular/core';
import { User } from './user';

const template = require('./form-validations.template.html');

@Component({
	selector: 'form-validations',
	template: template
})
export class FormValidationsComponent {
	user: User;
	
	constructor() {
		this.user = new User();
	}
}

