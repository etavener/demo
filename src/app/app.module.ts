import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import {AuthorizeModule} from './authorize/authorize.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {WorldPayInterceptor} from './interceptor';
import {SuccessModule} from './success/success.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AuthorizeModule,
    SuccessModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WorldPayInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
