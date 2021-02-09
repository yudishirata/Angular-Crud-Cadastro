import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroCreateComponent } from './components/cadastro-create/cadastro-create.component';
import { CadastroDetailsComponent } from './components/cadastro-details/cadastro-details.component';
import { CadastroListComponent } from './components/cadastro-list/cadastro-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    CadastroCreateComponent,
    CadastroDetailsComponent,
    CadastroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
