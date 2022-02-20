import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[walGrid]' })
export class WalGridDirective {

	@Input() set walGrid(value: number | string ) {
		this.el.nativeElement.style.display = 'grid';
		this.el.nativeElement.style.gridTemplateColumns = typeof value === 'number' ? `repeat(${value}, 1fr)` : `${value}`;
	}
	constructor(private el: ElementRef) {}
}
