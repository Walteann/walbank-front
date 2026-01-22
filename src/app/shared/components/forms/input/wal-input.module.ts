import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WalCheckboxComponent } from './checkbox/wal-checkbox.component';
import { WalErrorComponent } from './error/wal-error.component';
import { WalInputTextComponent } from './input-text/wal-input-text.component';
import { WalRadioComponent } from './radio/wal-radio.component';
import { WalSelectComponent } from './select/wal-select.component';
import { AutoCompleteModule } from 'primeng/autocomplete';

const INPUTS_COMPONENTS = [
	WalCheckboxComponent,
	WalInputTextComponent,
	WalRadioComponent,
	WalErrorComponent,
	WalSelectComponent
];

@NgModule({
	imports: [CommonModule, FormsModule, ReactiveFormsModule, AutoCompleteModule],
	exports: INPUTS_COMPONENTS,
	declarations: INPUTS_COMPONENTS,
	providers: [],
})
export class WalInputModule {}
