import { NgModule } from '@angular/core';

import { WalTableComponent } from './wal-table.component';
import { TableModule } from 'primeng/table';

@NgModule({
	imports: [TableModule],
	exports: [WalTableComponent],
	declarations: [WalTableComponent],
	providers: [],
})
export class WalTableModule {}
