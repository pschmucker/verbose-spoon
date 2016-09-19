
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routing } from './app.route';

import { AppComponent } from './app.component';
import { FormValidationsComponent } from './form-validations.component';
import { RouterNavigateComponent } from './router-navigate.component';
import { TodoListComponent } from './todo-list.component';
import { MenuComponent } from './menu.component';
import { MainComponent } from './main.component';

import { ValidatedClass } from './validated-class.directive';


@NgModule({
	declarations: [
		AppComponent,
		FormValidationsComponent,
		RouterNavigateComponent,
		TodoListComponent,
		MenuComponent,
		MainComponent,
		
		ValidatedClass
	],
	providers: [
	],
	imports: [BrowserModule, HttpModule, routing],
	bootstrap: [AppComponent]
})
export class AppModule {}

