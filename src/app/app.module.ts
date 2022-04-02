import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportModule } from './import.module';
import { LayoutComponent } from './layout/layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,LayoutComponent
  ],
  imports: [
    BrowserModule,ImportModule,
    AppRoutingModule,NgxPageScrollModule,NgxPageScrollCoreModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LayoutComponent, ImportModule],
})
export class AppModule { }
