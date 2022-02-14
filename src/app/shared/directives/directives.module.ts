import { NgModule } from '@angular/core';
import { WalDirectionHorizontalDirective } from './wal-direction-horizontal.directive';
import { WalGridDirective } from './wal-grid.directive';

const DIRECTIVES = [
	WalGridDirective,
	WalDirectionHorizontalDirective
]

@NgModule({
	declarations: DIRECTIVES,
	exports: DIRECTIVES,
})
export class DirectivesModule { }
