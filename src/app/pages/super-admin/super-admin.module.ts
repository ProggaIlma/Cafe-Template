import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin.component';
import {ImportModule} from '../../import.module'
import {SuperAdminRoutingModule} from './super-admin-routing.module'

@NgModule({
  declarations: [SuperAdminComponent],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    ImportModule
  ],
  exports:[ImportModule,SuperAdminComponent],
})
export class SuperAdminModule { }
