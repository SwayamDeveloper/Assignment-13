import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [{path: '', component: AboutComponent},
{path:'skills', component: SkillsComponent},
{path:'app', component: AppComponent},
{path:'experience', component: ExperienceComponent},
{path:'education', component: EducationComponent},
{path:'certificates', component: CertificatesComponent},
{path:'contact', component: ContactComponent},
{path:'services', component: ServicesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
