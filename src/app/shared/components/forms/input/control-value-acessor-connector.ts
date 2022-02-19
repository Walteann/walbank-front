import {
	ControlContainer,
	ControlValueAccessor,
	FormControl,
	FormControlDirective,
} from '@angular/forms';
import { Component, Injector, Input, Optional, Self, ViewChild } from '@angular/core';

@Component({
	template: '',
})
export class ControlValueAccessorConnector implements ControlValueAccessor {
	@ViewChild(FormControlDirective, { static: true })
	formControlDirective: FormControlDirective;

	@Input()
	formControl: FormControl;

	@Input()
	formControlName: string;

	constructor(@Optional() @Self() private injector: Injector, @Optional() private controlCtr: ControlContainer) {
		console.log(injector)
	}

	writeValue(obj: any): void {
		console.log('writeValue: ' + obj)
		if (
			this.formControlDirective &&
			this.formControlDirective.valueAccessor
		) {
			this.formControlDirective.valueAccessor.writeValue(obj);
		}
	}

	registerOnTouched(fn: any): void {
		if (
			this.formControlDirective &&
			this.formControlDirective.valueAccessor
		) {
			this.formControlDirective.valueAccessor.registerOnTouched(fn);
		}
	}

	registerOnChange(fn: any): void {
		if (
			this.formControlDirective &&
			this.formControlDirective.valueAccessor
		) {
			this.formControlDirective.valueAccessor.registerOnChange(fn);
		}
	}

	// setDisabledState(isDisabled: boolean): void {
	// 	if (this.formControlDirective?.valueAccessor) {
	// 		this.formControlDirective.valueAccessor.setDisabledState(
	// 			isDisabled
	// 		);
	// 	}
	// }

	get controlContainer() {
		return this.injector.get(this.controlCtr);
	}

	get control() {
		return (
			this.formControl ||
			this.controlContainer?.control?.get(this.formControlName)
		);
	}
}
