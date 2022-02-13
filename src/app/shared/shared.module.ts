import { NgModule } from '@angular/core';
import { CardModule } from './components/card/card.module';
import { DirectivesModule } from './directives/directives.module';

const SHARED_MODULES = [
	CardModule,
	DirectivesModule
]

@NgModule({
	imports: SHARED_MODULES,
	exports: SHARED_MODULES,
	providers: [],
})
export class SharedModule { }
