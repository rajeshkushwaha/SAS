// ====================================================
// More Templates: rajesh.kushwaha@softvision.com
// Email: rajesh.kushwaha@softvision.com
// ====================================================

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { QuestiontabComponent } from "./components/questionadmin/questiontab/questiontab.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { AboutComponent } from "./components/about/about.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { InstructionsComponent } from './components/instructions/instructions.component';


const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard], data: { title: "Home" } },
  { path: "instruction", component: InstructionsComponent, canActivate: [AuthGuard], data: { title: "Instructions" } },
  { path: "login", component: LoginComponent, data: { title: "Login" } },  
  { path: "questions", component: QuestiontabComponent, canActivate: [AuthGuard], data: { title: "Questions" } },    
  { path: "settings", component: SettingsComponent, canActivate: [AuthGuard], data: { title: "Settings" } },
  { path: "about", component: AboutComponent, data: { title: "About Us" } },
  { path: "home", redirectTo: "/", pathMatch: "full" },
  { path: "**", component: NotFoundComponent, data: { title: "Page Not Found" } }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard]
})
export class AppRoutingModule { }
