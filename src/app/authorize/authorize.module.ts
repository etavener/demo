import { NgModule } from '@angular/core';
import { AuthorizeContainer } from './authorize.container';
import { CoreModule } from '../core/core.module';
import {MatCardModule} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AuthorizeContainer
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatCardModule
  ],
  providers: []
})
export class AuthorizeModule { }
