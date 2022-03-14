import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
		data: { breadcrumb: 'Home' }
	},
	{
		path: 'payments',
		loadChildren: () => import('./pages/payments/payments.module').then(m => m.PaymentsModule),
		data: { breadcrumb: 'Pagamentos' }
	},
	{
		path: 'tickets',
		loadChildren: () => import('./pages/tickets/tickets.module').then(m => m.TicketsModule),
		data: { breadcrumb: 'Boletos' }
	},
	{
		path: 'devedores',
		loadChildren: () => import('./pages/debtors/debtors.module').then(m => m.DebtorsModule),
		data: { breadcrumb: 'Devedores' }
	},
	{
		path: 'settings',
		loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule),
		data: { breadcrumb: 'Configuração' }
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	}
];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
