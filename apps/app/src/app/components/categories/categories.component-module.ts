import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { CategoriesComponent } from './categories.component';

@NgModule({
  imports: [MatChipsModule, CommonModule],
  declarations: [CategoriesComponent],
  providers: [],
  exports: [CategoriesComponent]
})
export class CategoriesComponentModule {
}
