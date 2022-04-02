import { NgModule } from '@angular/core';
import { BannerModule } from './components/index';


@NgModule({
  exports: [
    BannerModule
  ],
  imports: [BannerModule
  ]
})
export class ImportModule { }
