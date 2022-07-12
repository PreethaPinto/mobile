import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDialogComponent } from './products/product-dialog/product-dialog.component';
import { ProductsComponent } from './products/products.component';
import { UserDialogComponent } from './users/user-dialog/user-dialog.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'product-dialog', component: ProductDialogComponent },
  { path: 'products', component: ProductsComponent },
  //{ path: 'user-dialog', component: UserDialogComponent }
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
