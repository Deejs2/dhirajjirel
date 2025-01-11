import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectShowcaseComponent } from './project-showcase/project-showcase.component';
import { SingleProjectShowcaseComponent } from './single-project-showcase/single-project-showcase.component';

const routes: Routes = [
  { path: '', component: ProjectShowcaseComponent },
  { path: ':id', component: SingleProjectShowcaseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
