import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { DebtorsService } from 'src/app/core/http/debtors.service';
import { Debtor } from 'src/app/shared/model';

@Component({
	selector: 'app-debtors-list',
	templateUrl: './debtors-list.component.html',
	styleUrls: ['./debtors-list.component.scss'],
})
export class DebtorsListComponent implements OnInit {
	formFilter: FormGroup;

	debtors$: Observable<Debtor[]>;

	constructor(
		private debtorsService: DebtorsService,
		formBuilder: FormBuilder
	) {
		this.builderFilterForm(formBuilder);
	}

	ngOnInit(): void {
		this.getDebtors();
	}

	private getDebtors(): void {
		this.debtors$ = this.debtorsService.getDebtors();
	}

	private builderFilterForm(formBuilder: FormBuilder): void {
		this.formFilter = formBuilder.group({
			name: [null],
		});
	}
}
