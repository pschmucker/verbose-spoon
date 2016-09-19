
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ValidatedClass } from './validated-class.directive';

@NgModule({
	declarations: [
		AppComponent,
		ValidatedClass
	],
	providers: [
	],
	imports: [BrowserModule, HttpModule],
	bootstrap: [AppComponent]
})
export class AppModule {}
