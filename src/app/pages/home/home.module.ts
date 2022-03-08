import { WalHeaderNavModule } from './../../core/layouts/header-nav/header-nav.module';
import { WalBreadcrumbModule } from './../../core/layouts/breadcrumb/wal-breadcrumb.module';
import { WalHeaderInfoModule } from './../../shared/components/header-info/wal-header-info.module';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';

const routes = [
	{
		path: '',
		component: HomeComponent,
		data: { breadcrumb: 'Dashboard'}
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		SharedModule,
		TableModule,
		WalHeaderInfoModule,
		WalBreadcrumbModule,
		WalHeaderNavModule
	],
	declarations: [HomeComponent],
})
export class HomeModule {}
