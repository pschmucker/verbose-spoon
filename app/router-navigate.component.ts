import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

const template = require('./router-navigate.template.html');

@Component({
	selector: 'router-navigate',
	template: template
})
export class RouterNavigateComponent implements OnInit {

	mode: 'consultation' | 'edition' = 'consultation';

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {}
	
	ngOnInit() {
		let param = this.route.snapshot.params['mode'];
		this.mode = param ? param : 'consultation';
	}
	
	switch() {
		if (this.mode === 'edition') {
			console.log('edition => consultation');
			this.router.navigate(['.', {}], {relativeTo: this.route});
		}
		else {
			console.log('consultation => edition');
			this.router.navigate(['.', {mode: 'edition'}], {relativeTo: this.route});
		}
		
		this.mode = (this.mode === 'edition') ? 'consultation' : 'edition';
	}
}


