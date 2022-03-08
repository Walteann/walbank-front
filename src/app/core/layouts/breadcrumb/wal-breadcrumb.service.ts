import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Data, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import { Breadcrumb } from 'src/app/shared/model';

@Injectable({providedIn: 'root'})
export class WalBreadCcrumbService {

	private readonly breadcrumbBehavior = new BehaviorSubject<Breadcrumb[]>([]);

	readonly breadcrumbs$ = this.breadcrumbBehavior.asObservable();

	constructor(private router: Router) {
		this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd)
		).subscribe(event => {
			const root = this.router.routerState.snapshot.root;
			const breadcrumbs: Breadcrumb[] = [];

			this.addBreadCrumb(root, [], breadcrumbs);

			this.breadcrumbBehavior.next(breadcrumbs);
		})
	}

	// private addBreadCrumb(route: ActivatedRouteSnapshot, parentUrl: string[], breadcrumbs: Breadcrumb[]) {
	private addBreadCrumb(route: any, parentUrl: string[], breadcrumbs: Breadcrumb[]) {
		if (route) {

			const routerUrl = parentUrl.concat(route.url.map((url: any) => url.path));
			// const routerUrl = parentUrl.concat(route.url.map(url => url.path));

			if (route.data.breadcrumb) {
				const breadcrumb = {
					label: this.getLabel(route.data),
					url: '/' + routerUrl.join('/')
				};

				breadcrumbs.push(breadcrumb);
			}

			this.addBreadCrumb(route.firstChild, routerUrl, breadcrumbs);

		}
	}

	// Verificar Tipagem
	private getLabel(data: any): any  {
		return typeof data.breadcrumb === 'function' ? data.breadcrumb(data) : data.breadcrumb;
	}

}
