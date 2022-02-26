import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';

const routes = [
	{
		path: '',
		component: HomeComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule, TableModule],
	declarations: [HomeComponent],
})
export class HomeModule {}
