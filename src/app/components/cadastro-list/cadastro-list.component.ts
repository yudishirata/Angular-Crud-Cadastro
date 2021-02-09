import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/services/cadastro.service';
import { CadastroModel } from '../../Models/CadastroModel';
import { TelefoneModel } from '../../Models/TelefoneModel';

@Component({
  selector: 'app-cadastro-list',
  templateUrl: './cadastro-list.component.html',
  styleUrls: ['./cadastro-list.component.css']
})
export class CadastroListComponent implements OnInit {
  cadastro: any;
  public currentCadastro: CadastroModel = new CadastroModel(0, '', '', '', [new TelefoneModel(0, 0, '')]);
  currentIndex = -1;
  nome = '';

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.readCadastro();
  }
  readCadastro(): void {
    this.cadastroService.readAll()
      .subscribe(
        cadastro => {
          this.cadastro = cadastro;
          console.log(cadastro);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readCadastro();
    this.currentCadastro = new CadastroModel(0, '', '', '', [new TelefoneModel(0, 0, '')]);
    this.currentIndex = -1;
  }
  setCurrentCadastro(cadastro: any, index: number): void {
    this.currentCadastro = cadastro;
    this.currentIndex = index;
  }
}
