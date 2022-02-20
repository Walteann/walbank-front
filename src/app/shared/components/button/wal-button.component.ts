import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wal-button',
  templateUrl: './wal-button.component.html',
  styleUrls: ['./wal-button.component.scss']
})
export class WalButtonComponent {

	@Input() disabled: boolean;
	@Input() buttonClass = 'primary';
	@Input() type = 'button';

}
