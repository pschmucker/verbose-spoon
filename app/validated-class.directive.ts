import {Directive, ElementRef, Input, AfterViewChecked, AfterViewInit, SimpleChanges, OnChanges, DoCheck} from '@angular/core';
import { Validator } from 'validator.ts/Validator';


let validator = new Validator();

@Directive({
	selector: '[validatedClass]'
})
export class ValidatedClass implements DoCheck {
	@Input('validatedClass')
	validatedClass: [any, string];
	constructor(private elementRef: ElementRef) { }
	ngDoCheck() {
		let errors = validator.validate(this.validatedClass[0], {
			skipMissingProperties: true
		});
		let error = errors.find(v => {
			return v.property === this.validatedClass[1];
		});
		const el:Element = this.elementRef.nativeElement;
		if (!error) {
			el.className = "valid";
		} else {
			el.className = "not-valid";
		}
	}
}
