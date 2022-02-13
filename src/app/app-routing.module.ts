import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'payments',
		loadChildren: () => import('./pages/payments/payments.module').then(m => m.PaymentsModule)
	},
	{
		path: 'tickets',
		loadChildren: () => import('./pages/tickets/tickets.module').then(m => m.TicketsModule)
	},
	{
		path: 'settings',
		loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule)
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
