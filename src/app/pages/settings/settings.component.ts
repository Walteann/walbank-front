import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl, Validators, UntypedFormArray } from '@angular/forms';

interface City {
    name: string,
    code: string
}
@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {

	cities: City[];

    selectedCity: City;


	formGroup: UntypedFormGroup;
	constructor(
		formBuilder: UntypedFormBuilder
	) {
		this.formGroup = formBuilder.group({
			nome: [null, [Validators.required]],
			city: [null, [Validators.required]],
			sobreNome: ['', [Validators.maxLength(3)]],
			ultimoNome: new UntypedFormControl({value: 'dsadsad', disabled: true})
		});

		this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
	}


	onSubmit(): void {
		console.log(this.formGroup);
		if (this.validate(this.formGroup)) {
			console.log(true);
		} else {
			return;
		}
	}

	private validate(form: UntypedFormGroup | UntypedFormArray | any): boolean {
		Object.keys(form.controls).forEach((key: string) => {
		  const control = form.controls[key];
		  control.markAsTouched();
		  control.markAsDirty();
		  control.updateValueAndValidity({ emitEvent: true });

		  if (control instanceof UntypedFormGroup || control instanceof UntypedFormArray) {
			this.validate(control);
		  }
		});

		return !form.invalid;
	  }
}
