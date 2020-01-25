import { DetailsComponent } from './details/details.component';
import { StatsComponent } from './stats/stats.component';
import { FightComponentComponent } from './fight-component/fight-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'fight', component: FightComponentComponent},
  {path: 'stats', component: StatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
