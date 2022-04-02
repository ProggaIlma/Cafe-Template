import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';


@NgModule({
  declarations: [BannerComponent],
  imports: [
    CommonModule,
    NgxPageScrollModule,NgxPageScrollCoreModule
    
  ],
  exports:[BannerComponent]
})
export class BannerModule { }
