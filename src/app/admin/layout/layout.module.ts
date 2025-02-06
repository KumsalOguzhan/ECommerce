import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from './components/components.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SidebarComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
