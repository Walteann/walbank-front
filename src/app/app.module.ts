import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './core/layouts/layouts-module';
import { CardModule } from './shared/components/card/card.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import {
	provideHttpClient,
	withInterceptorsFromDi,
} from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

@NgModule({
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		AppRoutingModule,
		LayoutModule,
		SharedModule,
	],
	providers: [
		provideHttpClient(withInterceptorsFromDi()),
		providePrimeNG({
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: false, // Desativa modo escuro se não quiser
                cssLayer: false // Se tiver problemas com CSS legado, deixe false
            }
        }
    })
	],
})
export class AppModule {}
