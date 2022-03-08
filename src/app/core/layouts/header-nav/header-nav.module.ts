import { NgModule } from '@angular/core';
import { WalButtonModule } from 'src/app/shared/components/button/wal-button.module';

import { WalBreadcrumbModule } from './../breadcrumb/wal-breadcrumb.module';
import { WalHeaderNavComponent } from './header-nav.component';

@NgModule({
	imports: [WalBreadcrumbModule, WalButtonModule],
	exports: [WalHeaderNavComponent],
	declarations: [WalHeaderNavComponent],
	providers: [],
})
export class WalHeaderNavModule { }
