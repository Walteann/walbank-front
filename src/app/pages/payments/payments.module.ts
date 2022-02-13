import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes = [
	{
		path: '',
		component: PaymentsComponent,
	},
];

@NgModule({
	declarations: [PaymentsComponent],
	imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PaymentsModule {}
