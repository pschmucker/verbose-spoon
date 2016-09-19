import { Component } from '@angular/core';

const template = require('./todo-list.template.html');

@Component({
	selector: 'todo-list',
	template: template
})
export class TodoListComponent {

	constructor() {
	}
}

