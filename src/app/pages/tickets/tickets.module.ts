import { WalHeaderInfoModule } from './../../shared/components/header-info/wal-header-info.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { TicketsComponent } from './tickets.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { WalHeaderNavModule } from 'src/app/core/layouts/header-nav/header-nav.module';

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
	declarations: [TicketsComponent, NewTicketComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		SharedModule,
		WalHeaderInfoModule,
		WalHeaderNavModule
	],
})
export class TicketsModule {}
