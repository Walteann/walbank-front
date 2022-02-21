import {
	ChangeDetectorRef,
	Component,
	Input,
	OnDestroy,
	OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Observable, of, Subscription, tap } from 'rxjs';
import { ERROR_VALIDATOR } from './error-validator.constant';

@Component({
	selector: 'wal-error',
	template: `
		<small *ngIf="show | async" class="error-text">{{ text }}</small>
	`,
	styles: [
		`
			.error-text {
				color: red;
				display: block;
				font-size: 12px;
				margin: 0 0 10px 0;
			}
		`,
	],
})
export class WalErrorComponent implements OnInit, OnDestroy {
	@Input() control: FormControl;
	show: Observable<boolean>;

	private subscription: Subscription;

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	ngOnInit(): void {
		if (this.control) {
			this.subscription = this.control.statusChanges
				.subscribe((status) => {
					const { invalid, touched, dirty } = this.control;
					this.show = of(invalid && (touched || dirty)).pipe(
						tap((result) => console.log(result))
					);
				});
		}
	}

	get text(): string | null {
		for (const propertyName in this.control.errors) {
			if (
				this.control.errors.hasOwnProperty(propertyName) &&
				(this.control.touched || this.control.dirty)
			) {
				return this.findByErrorName(propertyName);
			}
		}

		return null;
	}

	private findByErrorName(propertyName: string): string {
		return ERROR_VALIDATOR[propertyName];
	}
}
