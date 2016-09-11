import {Directive, ElementRef, Input, DoCheck} from '@angular/core';
import { validate } from 'class-validator';

@Directive({
	selector: '[validatedClass]'
})
export class ValidatedClass implements DoCheck {
	@Input('validatedClass')
	validatedClass: [any, string];
	oldValue: any;
	constructor(private elementRef: ElementRef) { }
	ngDoCheck() {
		const object = this.validatedClass[0];
		const property = this.validatedClass[1];
		const value = object[property];
		if (value === this.oldValue) {
			return;
		}
		this.oldValue = value;

		validate(object, {
			skipMissingProperties: true
		}).then(errors => {
			let error = errors.find(v => {
				return v.property === property;
			});
			const el: Element = this.elementRef.nativeElement;
			if (!error) {
				el.className = 'valid';
			} else {
				el.className = 'not-valid';
			}
		});
	}
}
