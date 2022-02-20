import { Component, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ControlValueAccessorModel } from '../control-value-acessor.model';

@Component({
	selector: 'wal-input-text',
	templateUrl: 'wal-input-text.component.html',
	styleUrls: ['./wal-input-text.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => WalInputTextComponent),
			multi: true,
		}
	],
})
export class WalInputTextComponent extends ControlValueAccessorModel {
	@Input() label: string;
	@Input() placeholder = '';

	constructor(injector: Injector) {
		super(injector);
	}
}
