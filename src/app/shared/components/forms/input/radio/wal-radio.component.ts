import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'wal-radio',
	templateUrl: 'wal-radio.component.html',
	styleUrls: ['./wal-radio.component.scss']
})

export class WalRadioComponent implements OnInit {
	@Input() name: string;
	constructor() { }

	ngOnInit() { }
}
