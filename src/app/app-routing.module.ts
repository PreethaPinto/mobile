import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { DashbordComponent } from './dashboard/dashbord.component';
import { LoginDialogComponent } from './header/login/login.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginDialogComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashbordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
