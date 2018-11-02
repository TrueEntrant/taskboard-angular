import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';
import { TopCoreComponent } from './core/core.component';

const Components = [ButtonComponent, SelectComponent, TopCoreComponent];
const Exports = [TopCoreComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: Exports,
  declarations: Components,
})
export class TopNavigationModule { }
