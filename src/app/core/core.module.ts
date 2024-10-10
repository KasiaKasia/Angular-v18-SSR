import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  imports: [
    CoreRoutingModule,
    NotFoundComponent,
    MenuComponent,
    NavbarComponent,
    ContactComponent
  ],
  exports: [
    NotFoundComponent,
    MenuComponent,
    NavbarComponent,
    ContactComponent
  ]
})
export class CoreModule {}
