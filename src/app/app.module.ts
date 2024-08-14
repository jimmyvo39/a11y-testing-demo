import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageWithoutIssuesComponent } from './page-without-issues/page-without-issues.component';
import { PageWithIssuesComponent } from './page-with-issues/page-with-issues.component';
import { ResourceComponent } from './resource/resource.component';
import { NgOptimizedImage } from "@angular/common";
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageWithoutIssuesComponent,
    PageWithIssuesComponent,
    ResourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
