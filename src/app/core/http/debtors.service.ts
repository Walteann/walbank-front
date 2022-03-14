import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Debtor } from 'src/app/shared/model';

const ENDPOINT = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class DebtorsService {

	constructor(
		private http: HttpClient
	) { }

	getDebtors(): Observable<Debtor[]> {
		return this.http.get<Debtor[]>(`${ENDPOINT}/devedores`);
	}


	getDebtor(idDevedor: number): Observable<Debtor> {
		return this.http.get<Debtor>(`${ENDPOINT}/devedor/${idDevedor}`);
	}
}
