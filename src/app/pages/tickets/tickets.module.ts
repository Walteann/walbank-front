import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { WalHeaderNavModule } from 'src/app/core/layouts/header-nav/header-nav.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { WalHeaderInfoModule } from '../../shared/components/header-info/wal-header-info.module';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketsComponent } from './tickets.component';
import { CardTicketComponent } from './card-ticket/card-ticket.component';
import { TicketStatusIconPipe } from './card-ticket/ticket-status-icon.pipe';

const routes = [
	{
		path: '',
		component: TicketsComponent,
		data: { breadcrumb: 'Lista' }
	},
	{
		path: 'new-ticket',
		component: NewTicketComponent,
		data: { breadcrumb: 'Novo Boleto' }
	}
];

@NgModule({
	declarations: [TicketsComponent, NewTicketComponent, CardTicketComponent, TicketStatusIconPipe],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		WalHeaderInfoModule,
		WalHeaderNavModule
	],
})
export class TicketsModule {}
