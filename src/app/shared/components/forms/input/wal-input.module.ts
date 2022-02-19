import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WalCheckboxComponent } from './checkbox/wal-checkbox.component';
import { ControlValueAccessorConnector } from './control-value-acessor-connector';
import { WalInputTextComponent } from './input-text/wal-input-text.component';
import { WalRadioComponent } from './radio/wal-radio.component';

const INPUTS_COMPONENTS = [
	WalCheckboxComponent,
	WalInputTextComponent,
	WalRadioComponent,
	ControlValueAccessorConnector,
];

@NgModule({
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	exports: INPUTS_COMPONENTS,
	declarations: INPUTS_COMPONENTS,
	providers: [],
})
export class WalInputModule {}
