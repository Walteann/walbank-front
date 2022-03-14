import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WalHeaderNavModule } from '../../core/layouts/header-nav/header-nav.module';
import { SharedModule } from '../../shared/shared.module';
import { DebtorsDetailComponent } from './debtors-detail/debtors-detail.component';
import { DebtorsCardComponent } from './debtors-list/debtors-card/debtors-card.component';
import { DebtorsListComponent } from './debtors-list/debtors-list.component';
import { DebtorsNewComponent } from './debtors-new/debtors-new.component';
import { DebtorsRoutingModule } from './debtors-routing.module';

@NgModule({
  declarations: [
    DebtorsListComponent,
    DebtorsNewComponent,
    DebtorsDetailComponent,
	DebtorsCardComponent
  ],
  imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	DebtorsRoutingModule,
	WalHeaderNavModule,
	SharedModule
  ]
})
export class DebtorsModule { }
