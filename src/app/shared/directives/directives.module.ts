import { NgModule } from '@angular/core';
import { WalGridDirective } from './wal-grid.directive';

const DIRECTIVES = [
	WalGridDirective
]

@NgModule({
	declarations: DIRECTIVES,
	exports: DIRECTIVES,
})
export class DirectivesModule { }
