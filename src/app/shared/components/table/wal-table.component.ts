import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'wal-table',
	templateUrl: 'wal-table.component.html',
	styleUrls: ['./wal-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class WalTableComponent implements OnInit {

	@Input() dataSource: any[] = [];

	constructor() { }

	ngOnInit() { }
}
