import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { HomeComponent } from '../component/home/home.component';
import { AboutComponent } from '../component/about/about.component';
import { ResumeComponent } from '../component/resume/resume.component';
import { ServiceComponent } from '../component/service/service.component';
import { ContactComponent } from '../component/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomepageComponent , children: [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'services', component: ServiceComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'portfolio', loadChildren: () => import('../portfolio/portfolio.module').then(m => m.PortfolioModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
