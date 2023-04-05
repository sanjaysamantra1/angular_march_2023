import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  {
    path: 'careers',
    component: CareersComponent,
    children: [
      { path: '', component: PermanentJobsComponent }, // default child route
      { path: 'permanent', component: PermanentJobsComponent },
      { path: 'contract', component: ContractJobsComponent },
    ],
  },
  { path: 'products', component: ProductListComponent },
  {
    path: 'productdetails/:id',
    component: ProductDetailsComponent,
    canActivate: [AuthGuard],
  }, //path-param
  { path: 'productinfo', component: ProductInfoComponent }, //query-param
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
