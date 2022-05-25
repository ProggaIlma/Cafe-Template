import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BannerComponent } from './components';
// import { LayoutComponent } from './layout/layout.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';


const routes: Routes = [
  {
    path: 'bb',
  component: PortfolioComponent,
  pathMatch: 'full'
  },
  {
    path: 'index',
    component: PortfolioComponent
  },
  {
    path: '',
  component: PortfolioComponent,
       
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/super-admin/super-admin.module').then((m) => m.SuperAdminModule)
  },
 
  {
    path: '**',
    redirectTo: 'index',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
