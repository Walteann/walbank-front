import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DebtorsDetailComponent } from './debtors-detail/debtors-detail.component';
import { DebtorsListComponent } from './debtors-list/debtors-list.component';
import { DebtorsNewComponent } from './debtors-new/debtors-new.component';
import { DebtorsResolverService } from './debtors-resolver.service';

export const routes: Routes = [
	{
		path: 'novo',
		component: DebtorsNewComponent,
		data: { breadcrumb: 'Novo devedor' }
	},
	{
		path: 'detalhe/:id',
		component: DebtorsDetailComponent,
		data: { breadcrumb: (data: any) => `${data.debtor.id}` },
		resolve: {
			debtor: DebtorsResolverService
		}


	},
	{
		path: '',
		pathMatch: 'full',
		component: DebtorsListComponent,
		data: { breadcrumb: 'Lista'}
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class DebtorsRoutingModule {}
