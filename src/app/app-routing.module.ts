import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [
  {
    path: '',
  component: LayoutComponent,
        // children: [
        //   {
        //     path: 'dashboard',
        //     loadChildren: () => import('./pages/super-admin/super-admin.module').then((m) => m.SuperAdminModule)
        //   },
        // ],
  },
 
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/super-admin/super-admin.module').then((m) => m.SuperAdminModule)
  },
 
  {
    path: '**',
    redirectTo: 'super-admin',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
