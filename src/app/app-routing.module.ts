import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';


const routes: Routes = [
  {
    path: '',
  component: BannerComponent,
        
  },
  {
    path: 'portfolio',
  component: PortfolioComponent,
       
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
