import { NgModule } from '@angular/core';
import { GridModule } from './grids/grids.module';

const DIRECTIVES = [
	GridModule
]

@NgModule({
	imports: DIRECTIVES,
	exports: DIRECTIVES,
})
export class DirectivesModule { }
