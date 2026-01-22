import { Pipe, PipeTransform } from '@angular/core';
import { TICKET_STATUS } from './status-ticket.const';

@Pipe({
    name: 'ticketStatusIcon',
    standalone: false
})

export class TicketStatusIconPipe implements PipeTransform {
	transform(value: string): string {
		return TICKET_STATUS[value].icon || null
	}
}
