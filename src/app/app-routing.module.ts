import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';


const routes: Routes = [
  
  {
    path: 'cafe',
    component: BannerComponent
  },
  {
    path: 'shop',
  component: PortfolioComponent,
       
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/super-admin/super-admin.module').then((m) => m.SuperAdminModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
