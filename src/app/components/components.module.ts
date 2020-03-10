import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PopifoComponent } from './popifo/popifo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PopifoComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PopifoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
