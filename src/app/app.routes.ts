import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: "about", component: AboutComponent},
    { path: "home", component: HomeComponent},
    { path: "contact", component: ContactComponent},
    { path: 'project/:title', component: ProjectDetailsComponent},
    { path: 'portfolio', component: PortfolioComponent},
];
