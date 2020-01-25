import { FightersService } from './services/fighters.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FightComponentComponent } from './fight-component/fight-component.component';
import { StatsComponent } from './stats/stats.component';
import { DetailsComponent } from './details/details.component';

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
    AppRoutingModule
  ],
  providers: [
    FightersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
