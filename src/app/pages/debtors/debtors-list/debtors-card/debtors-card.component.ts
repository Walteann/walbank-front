import { Component, Input, OnInit } from '@angular/core';
import { Debtor } from 'src/app/shared/model';

@Component({
	selector: 'debtors-card',
	templateUrl: 'debtors-card.component.html',
	styleUrls: ['./debotrs-card.component.scss']
})

export class DebtorsCardComponent implements OnInit {

	@Input() debtor: Debtor;

	constructor() { }

	ngOnInit() { }
}
