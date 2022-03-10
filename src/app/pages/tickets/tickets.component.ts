import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TICKETS_MOCK } from './tickets-mock.const';

@Component({
	selector: 'app-tickets',
	templateUrl: './tickets.component.html',
	styleUrls: ['./tickets.component.scss'],
	host: {'class': 'tickets'}
})
export class TicketsComponent {

	categories = [
		{
			label: 'Educação',
			value: 1
		},
		{
			label: 'Saude',
			value: 2
		},
		{
			label: 'Supermercado',
			value: 3
		},
		{
			label: 'Entreterimento',
			value: 4
		}
		// TODO: Criar um banco de dados com essas categorias
	];

	tickets = TICKETS_MOCK;

	formFilter: FormGroup;

	constructor(
		formBuilder: FormBuilder
	) {
		this.builderFormFilter(formBuilder);
	}

	onSubmit(): void {
		// TODO: Continuar aqui
	}

	private builderFormFilter(formBuilder: FormBuilder): void {
		this.formFilter = formBuilder.group({
			description: [null],
			amount: [null],
			category: [null],
			dueDate: [null]
		});
		// TODO: Adicionar Validação
	}
}

