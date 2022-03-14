import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { DebtorsService } from 'src/app/core/http/debtors.service';
import { Debtor } from 'src/app/shared/model';


@Injectable({providedIn: 'root'})
export class DebtorsResolverService implements Resolve<Debtor> {

	constructor(private debtorsService: DebtorsService, private router: Router) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Debtor>  {

		const idDebtor = route.params['id'];

		if(!idDebtor) {
			this.router.navigate(['']);
			return of({} as any);
		}

		return this.debtorsService.getDebtor(idDebtor).pipe(
			catchError(error => {
				this.router.navigate(['']);
				throw Error(error)
			})
		)

	}

}
