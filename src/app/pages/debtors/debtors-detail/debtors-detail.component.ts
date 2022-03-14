import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DebtorsService } from './../../../core/http/debtors.service';
import { Debtor } from './../../../shared/model/debtor.model';

@Component({
	selector: 'app-debtors-detail',
	templateUrl: './debtors-detail.component.html',
	styleUrls: ['./debtors-detail.component.scss'],
})
export class DebtorsDetailComponent implements OnInit {
	debtor: Debtor = new Debtor();

	constructor(
		private activatedRouter: ActivatedRoute,
		private debtorService: DebtorsService
	) {}

	ngOnInit(): void {

		// const idDebtor = this.activatedRouter.snapshot.params['id'];
		// console.log(this.activatedRouter.snapshot.params);
		// console.log(idDebtor);
		// if (idDebtor) {
		// 	this.debtorService.getDebtor(idDebtor).subscribe(data => {
		// 		this.debtor = data;
		// 	});
		// }

		this.activatedRouter.data.subscribe(result => {
			console.log(result);
			this.debtor = result['debtor'];
		})
	}
}
