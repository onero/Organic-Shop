import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {CheckOutComponent} from './check-out/check-out.component';
import {OrderSuccessComponent} from './order-success/order-success.component';
import {LoginComponent} from './login/login.component';
import {AdminProductsComponent} from './admin/admin-products/admin-products.component';
import {AdminOrdersComponent} from './admin/admin-orders/admin-orders.component';
import {MyOrdersComponent} from './my-orders/my-orders.component';
import {AuthGuard} from './auth.guard';

export const AppRoutes = RouterModule.forRoot([
  // Anonymous routes
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},

  // Standard user routes
  {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
  {path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard]},
  {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},

  // Admin routes
  {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard]},
  {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard]},
]);
