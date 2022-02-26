import { NgModule } from '@angular/core';
import { WalButtonModule } from './components/button/wal-button.module';

import { CardModule } from './components/card/card.module';
import { WalInputModule } from './components/forms/input/wal-input.module';
import { WalTableModule } from './components/table/wal-table.module';
import { DirectivesModule } from './directives/directives.module';



const SHARED_MODULES = [
	CardModule,
	DirectivesModule,
	WalInputModule,
	WalButtonModule,
	WalTableModule
]

@NgModule({
	imports: SHARED_MODULES,
	exports: SHARED_MODULES,
	providers: [],
})
export class SharedModule { }
