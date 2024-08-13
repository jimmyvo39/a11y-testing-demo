import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageWithoutIssuesComponent } from './page-without-issues/page-without-issues.component';
import { PageWithIssuesComponent } from './page-with-issues/page-with-issues.component';
import { ResourceComponent } from './resource/resource.component';

@NgModule({
  declarations: [
    AppComponent,
    PageWithoutIssuesComponent,
    PageWithIssuesComponent,
    ResourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
