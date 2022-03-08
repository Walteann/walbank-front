import { NgModule } from '@angular/core';
import { DirectivesModule } from '../../directives/directives.module';
import { CardModule } from '../card/card.module';

import { WalHeaderInfoComponent } from './wal-header-info.component';

@NgModule({
	imports: [CardModule, DirectivesModule],
	exports: [WalHeaderInfoComponent],
	declarations: [WalHeaderInfoComponent],
	providers: [],
})
export class WalHeaderInfoModule { }
