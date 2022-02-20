import { Input, OnInit, Injector, Component } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormControlName, FormGroupDirective, NgControl, ValidationErrors } from '@angular/forms';

@Component({
	template: ''
})
export class ControlValueAccessorModel implements ControlValueAccessor, OnInit {

	formControl: FormControl;

	onChange: any = (value: any) => {}
	onTouch: any = () => {}

	constructor(private injector: Injector) {}

	ngOnInit(): void {
		const ngControl = this.injector.get(NgControl);

		if (ngControl instanceof FormControlName) {
			this.formControl = this.injector.get(FormGroupDirective).getControl(ngControl);
		} else {
			this.formControl = (ngControl as any).form as any;
		}
	}

	writeValue(obj: any): void {
		this.onChange(obj);
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouch = fn;
	}

}
