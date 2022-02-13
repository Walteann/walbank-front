import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar/sidebar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';

const LAYOUTS_COMPONENTS = [
	TopBarComponent,
	SidebarComponent
]
@NgModule({
  imports: [RouterModule],
exports: LAYOUTS_COMPONENTS,
  declarations: LAYOUTS_COMPONENTS,
  providers: [],
})
export class LayoutModule { }
