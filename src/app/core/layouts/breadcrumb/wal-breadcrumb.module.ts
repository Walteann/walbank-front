import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WalBreadcrumbComponent } from './wal-breadcrumb.component';

@NgModule({
	imports: [
		CommonModule
	],
	exports: [WalBreadcrumbComponent],
	declarations: [WalBreadcrumbComponent],
	providers: [],
})
export class WalBreadcrumbModule { }
