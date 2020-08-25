import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { VisitTimelineComponent } from './Timeline/visit-timeline/visit-timeline.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'visit-timeline',
    component: VisitTimelineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
