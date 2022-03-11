import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarSearchComponent } from './components/car/car-search/car-search.component';
import { ResultDetailsComponent } from './components/car/result-details/result-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/car-search', pathMatch: 'full'},
  { path: 'car-search', component: CarSearchComponent },
  { path: 'report-details', component: ResultDetailsComponent },
  { path: '**', redirectTo: '/car-search', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
