import { NgModule } from '@angular/core';

import { CardModule } from './components/card/card.module';
import { WalInputModule } from './components/forms/input/wal-input.module';
import { DirectivesModule } from './directives/directives.module';

const SHARED_MODULES = [
	CardModule,
	DirectivesModule,
	WalInputModule
]

@NgModule({
	imports: SHARED_MODULES,
	exports: SHARED_MODULES,
	providers: [],
})
export class SharedModule { }
