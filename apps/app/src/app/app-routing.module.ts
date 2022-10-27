import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductFormServiceModule } from './services/product-form.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'categories', component: CategoriesComponent }, { path: 'add-product', component: ProductFormComponent }]), CategoriesComponentModule, CategoriesServiceModule, ProductFormComponentModule, ProductFormServiceModule],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
