import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { MenuCoreComponent } from './core/core.component';

const Components = [FormComponent, MenuCoreComponent];
const Exports = [MenuCoreComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: Exports,
  declarations: Components
})
export class MenuModule { }
