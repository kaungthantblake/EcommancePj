import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'category', component:CategoryComponent },
  { path: 'login', component:LoginComponent },
  { path: 'signup', component:SignUpComponent },
  { path: 'profile', component:ProfileComponent },
  { path: 'detail', component: DetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
