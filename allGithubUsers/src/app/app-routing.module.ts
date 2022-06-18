import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { FindUserComponent } from './components/pages/find-user/find-user.component';
import { GithubUserComponent } from './components/pages/github-user/github-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", pathMatch:"full", component:GithubUserComponent}, // sadece domain ismi 
  {path: "find-user", component:FindUserComponent}, // find-user'da FindUserComponent'e git
  {path: "**", component:NotFoundComponent}, // url'ye geçersiz birşey girildiğinde not-found'getir.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
