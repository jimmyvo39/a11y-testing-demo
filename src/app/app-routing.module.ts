import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageWithIssuesComponent } from './page-with-issues/page-with-issues.component';
import { PageWithoutIssuesComponent } from './page-without-issues/page-without-issues.component';
import {ResourceComponent} from "./resource/resource.component";

const routes: Routes = [
  { path: 'with-issues', component: PageWithIssuesComponent },
  { path: 'without-issues', component: PageWithoutIssuesComponent },
  { path: 'resource', component: ResourceComponent },
  { path: '', redirectTo: '/resource', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
