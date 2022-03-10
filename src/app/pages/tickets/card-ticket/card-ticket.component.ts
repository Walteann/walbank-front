import { Component, Input, OnInit } from '@angular/core';

interface Ticket {
	id: number;
	title: string;
	amount: number;
	dueDate: string;
	status: string;
	datePaid?: string;
}

@Component({
	selector: 'card-ticket',
	templateUrl: './card-ticket.component.html',
	styleUrls: ['./card-ticket.component.scss']
})
export class CardTicketComponent implements OnInit {
	@Input() ticket: Ticket;

	constructor() {}

	ngOnInit(): void {}
}
