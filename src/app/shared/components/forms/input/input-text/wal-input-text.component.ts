import {
	Component,
	forwardRef,
	Input,
	Optional,
	SkipSelf,
} from '@angular/core';
import {
	ControlValueAccessor,
	FormControl,
	NG_VALUE_ACCESSOR,
	NgControl,
} from '@angular/forms';

@Component({
	selector: 'wal-input-text',
	templateUrl: 'wal-input-text.component.html',
	styleUrls: ['./wal-input-text.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => WalInputTextComponent),
			multi: true,
		},
	],
})
export class WalInputTextComponent implements ControlValueAccessor {
	@Input() label: string;
	@Input() placeholder = '';

	onChange: any = () => {}
	onTouch: any = () => {}

	input = new FormControl();

	writeValue(obj: any): void {
		this.input.setValue(obj);
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouch = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		isDisabled ? this.input.disable() : this.input.enable();
	}
}
