import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {


	formGroup: FormGroup;
	constructor(
		formBuilder: FormBuilder
	) {
		this.formGroup = formBuilder.group({
			nome: [null, [Validators.required]],
			sobreNome: ['', [Validators.maxLength(3)]],
			ultimoNome: new FormControl({value: 'dsadsad', disabled: true})
		})
	}


	onSubmit(): void {
		console.log(this.formGroup);
		if (this.validate(this.formGroup)) {
			console.log(true);
		} else {
			return;
		}
	}

	private validate(form: FormGroup | FormArray | any): boolean {
		Object.keys(form.controls).forEach((key: string) => {
		  const control = form.controls[key];
		  control.markAsTouched();
		  control.markAsDirty();
		  control.updateValueAndValidity({ emitEvent: true });

		  if (control instanceof FormGroup || control instanceof FormArray) {
			this.validate(control);
		  }
		});

		return !form.invalid;
	  }
}
