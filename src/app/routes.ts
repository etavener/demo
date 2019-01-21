import { Routes } from '@angular/router';
import { AuthorizeContainer } from './authorize/authorize.container';
import {SuccessContainer} from './success/success.container';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'payment-authorize',
    pathMatch: 'full'
  },
  {
    path: 'payment-authorize',
    canActivate: [],
    component: AuthorizeContainer
  },
  {
    path: 'success',
    canActivate: [],
    component: SuccessContainer
  }
];
