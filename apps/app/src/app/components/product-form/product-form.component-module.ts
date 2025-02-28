import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductFormComponent } from './product-form.component';
import {RouterLink} from "@angular/router";

@NgModule({
    imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatCardModule, RouterLink],
  declarations: [ProductFormComponent],
  providers: [],
  exports: [ProductFormComponent]
})
export class ProductFormComponentModule {
}
