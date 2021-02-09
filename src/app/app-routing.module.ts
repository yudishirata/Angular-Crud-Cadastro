import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroListComponent } from './components/cadastro-list/cadastro-list.component';
import { CadastroDetailsComponent } from './components/cadastro-details/cadastro-details.component';
import { CadastroCreateComponent } from './components/cadastro-create/cadastro-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroListComponent },
  { path: 'cadastro/:id', component: CadastroDetailsComponent },
  { path: 'create', component: CadastroCreateComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
