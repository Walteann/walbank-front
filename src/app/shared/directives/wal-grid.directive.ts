import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[walGrid]' })
export class WalGridDirective {

	@Input() set walGrid(value: number) {
		this.el.nativeElement.style.display = 'grid';
		this.el.nativeElement.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
	}
	constructor(private el: ElementRef) {}
}
