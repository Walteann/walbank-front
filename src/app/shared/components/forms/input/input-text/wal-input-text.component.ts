import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'wal-input-text',
	templateUrl: 'wal-input-text.component.html',
	styleUrls: [ './wal-input-text.component.scss']
})

export class WalInputTextComponent implements OnInit {

	@Input() label: string;
	@Input() placeholder = '';

	constructor() { }

	ngOnInit() { }
}
