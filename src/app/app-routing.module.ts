import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'product', component:ProductComponent},
  {path: 'shop', component:ShopComponent},
  {path: 'user', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
