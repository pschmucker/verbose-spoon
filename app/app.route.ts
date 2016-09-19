import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormValidationsComponent } from './form-validations.component';
import { TodoListComponent } from './todo-list.component';
import { MainComponent } from './main.component';

const appRoutes: Routes = [
	{
		path: '', component: MainComponent, children: [
			{ path: 'todo', component: TodoListComponent, children: [
				{ path: 'form-validations', component: FormValidationsComponent },
				{ path: '' }
			]},
			{ path: '' }
		]
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

