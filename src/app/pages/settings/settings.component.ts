import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

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
			nome: [''],
			sobreNome: [''],
			ultimoNome: new FormControl({value: 'dsadsad', disabled: true})
		})
	}

	onSend(): void {
		console.log(this.formGroup.value);
		console.log('===========');
		console.log(this.formGroup.getRawValue());
	}
}
