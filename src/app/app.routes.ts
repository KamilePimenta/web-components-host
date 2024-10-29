import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CartComponent } from './pages/cart/cart.component';
import { ExampleMfeComponent } from './pages/example-mfe/example-mfe.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'example',
    component: ExampleMfeComponent,
  },
];
