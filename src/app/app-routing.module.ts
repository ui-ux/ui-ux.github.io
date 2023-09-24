import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { UsefulComponent } from './useful/useful.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full'},
  { path: '', component: ProfileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'useful', component: UsefulComponent },
  { path: '**', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
