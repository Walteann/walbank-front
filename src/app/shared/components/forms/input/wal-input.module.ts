import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WalCheckboxComponent } from './checkbox/wal-checkbox.component';

import { WalInputTextComponent } from './input-text/wal-input-text.component';
import { WalRadioComponent } from './radio/wal-radio.component';

const INPUTS_COMPONENTS = [
	WalCheckboxComponent,
	WalInputTextComponent,
	WalRadioComponent,
];

@NgModule({
	imports: [FormsModule, ReactiveFormsModule],
	exports: INPUTS_COMPONENTS,
	declarations: INPUTS_COMPONENTS,
	providers: [],
})
export class WalInputModule { }
