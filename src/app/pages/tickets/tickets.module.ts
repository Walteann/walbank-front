import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { TicketsComponent } from './tickets.component';

const routes = [
	{
		path: '',
		component: TicketsComponent,
	},
];

@NgModule({
	declarations: [TicketsComponent],
	imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class TicketsModule {}
