import { Component, forwardRef, Injector, Input, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ControlValueAccessorModel } from '../control-value-acessor.model';

@Component({
	selector: 'wal-select',
	template: `
		<div class="wal-select">
			<label>{{ label }}</label>
			<p-dropdown
				[formControl]="formControl"
				[options]="options"
				[name]="name"
				[optionLabel]="optionLabel"
				[optionValue]="optionValue"
			>
			</p-dropdown>
			<wal-error [control]="formControl"></wal-error>
		</div>
	`,
	styleUrls: ['./wal-select.component.scss'],
	encapsulation: ViewEncapsulation.None,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => WalSelectComponent),
			multi: true,
		},
	],
})
export class WalSelectComponent extends ControlValueAccessorModel {
	@Input() label: string;
	@Input() options: any[] = [];
	@Input() optionLabel = 'label';
	@Input() optionValue = 'value';
	@Input() name: string;

	constructor(injector: Injector) {
		super(injector);
	}
}
