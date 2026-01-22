import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule } from '@angular/router';
import { WalInputModule } from 'src/app/shared/components/forms/input/wal-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

const routes = [
	{
		path: '',
		component: SettingsComponent,
	},
];

@NgModule({
	declarations: [SettingsComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes),
		SharedModule,
		WalInputModule,
		SelectModule
	],
})
export class SettingsModule {}
