import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ComponentButtonComponent } from './component-button.component';



@NgModule({
  declarations: [
    ComponentButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ComponentButtonComponent
  ]
})
export class ComponentButtonModule { }
