import { FightersService } from './services/fighters.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FightComponentComponent } from './fight-component/fight-component.component';
import { StatsComponent } from './stats/stats.component';
import { DetailsComponent } from './details/details.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FightComponentComponent,
    StatsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [
    FightersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
