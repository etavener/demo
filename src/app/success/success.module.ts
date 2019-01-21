import { NgModule } from '@angular/core';
import { SuccessContainer } from './success.container';
import { CoreModule } from '../core/core.module';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    SuccessContainer
  ],
  imports: [
    CoreModule,
    MatCardModule
  ],
  providers: []
})
export class SuccessModule { }
