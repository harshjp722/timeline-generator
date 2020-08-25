import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitTimelineComponent } from './Timeline/visit-timeline/visit-timeline.component';
import { HomeComponent } from './Home/home/home.component';
import { FooterComponent } from './Home/footer/footer.component';
import { ToolbarComponent } from './Home/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitTimelineComponent,
    HomeComponent,
    FooterComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
