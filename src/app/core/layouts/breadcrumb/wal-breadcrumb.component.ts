import { Breadcrumb } from './../../../shared/model/breadcrumb.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WalBreadCcrumbService } from './wal-breadcrumb.service';

@Component({
	selector: 'wal-breadcrumb',
	template: `
		<ul>
			<li *ngFor="let breadcrumb of breadcrumbs$ | async">
				<span class="arrow-right material-icons-outlined">chevron_right</span>
				<a [href]="breadcrumb.url">{{ breadcrumb.label }}</a>
			</li>
		</ul>
	`,
	styles: [
		`
		@import 'variables';
		@import url('https://fonts.googleapis.com/css?family=Material+Icons');

			ul {
				& {
					list-style: none;
					margin: 0;
					padding: 0;
				}

				li {
					& {
						display: inline;
					}

					& .arrow-right {
						text-align: center;
						vertical-align: middle;
						color: $primary-color;
					}

					&:first-child .arrow-right {
						display: none;
					}

					a {
						text-decoration: none;
    					color: $secondary-color;
						font-weight: bold;
					}

					a:hover {
						cursor: pointer;
						text-decoration: underline;
					}

					&:last-child a {
						opacity: 0.5;

						&:hover {
							text-decoration: none;
							cursor: default;
						}
					}
				}

			}
		`,
	],
})
export class WalBreadcrumbComponent {
	breadcrumbs$: Observable<Breadcrumb[]>;

	constructor(readonly breadcrumbService: WalBreadCcrumbService) {
		this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
	}
}
