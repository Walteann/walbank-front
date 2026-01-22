import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TICKETS_MOCK } from './tickets-mock.const';

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.scss'],
    host: { 'class': 'tickets' },
    standalone: false
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

	formFilter: UntypedFormGroup;

	constructor(
		formBuilder: UntypedFormBuilder
	) {
		this.builderFormFilter(formBuilder);
	}

	onSubmit(): void {
		// TODO: Continuar aqui
	}

	private builderFormFilter(formBuilder: UntypedFormBuilder): void {
		this.formFilter = formBuilder.group({
			description: [null],
			amount: [null],
			category: [null],
			dueDate: [null]
		});
		// TODO: Adicionar Validação
	}
}

