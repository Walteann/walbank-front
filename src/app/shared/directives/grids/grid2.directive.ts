import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[wal-grid-2]' })
export class Grid2Directive {
	constructor(private el: ElementRef) {
		this.el.nativeElement.style.display = 'grid';
		this.el.nativeElement.style.gridTemplateColumns = 'repeat(2, 1fr)';
	}
}
