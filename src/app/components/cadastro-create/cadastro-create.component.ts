import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/services/cadastro.service';
import { CadastroModel } from '../../Models/CadastroModel';
import { TelefoneModel } from '../../Models/TelefoneModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

  public cadastro: CadastroModel = new CadastroModel(0, '', '', '', [new TelefoneModel(0, 0, '')]);

 
  public nome: string = '';
  public cpf: string = '';
  public dtnascimento: string = '';
  //public telefones: Array<string> = [''];
  public telefones: any[] = [
    {
      "telefone": ""
    }
   
  ];

  constructor(private cadastroService: CadastroService, private router: Router) { }

  ngOnInit(): void {
  }
  createCadastro(): void {

    this.cadastro.Nome = this.nome;
    this.cadastro.Cpf = this.cpf;
    this.cadastro.DtNascimento = this.dtnascimento;
    this.telefones.forEach(t => {
      if (t != '') {
        
        let newTelefone = new TelefoneModel(0, 0, '');
        newTelefone.Telefone1 = t.telefone;
        this.cadastro.Telefone.push(newTelefone);
      }
    });

    this.cadastroService.create(this.cadastro)
      .subscribe(
        response => {
          console.log(response);
          this.limpar();
        },
        error => {
          console.log(error);
        });
  }
  newCadastro(): void {
    this.cadastro = new CadastroModel(0, '', '', '', []);
  }

  adicionarTelefone(): void {
    let newTelefone = {
      "telefone": ""
    };
    this.telefones.push(newTelefone);
  }

  limpar(): void {
    this.nome = '';
    this.cpf = '';
    this.dtnascimento = '';
    this.telefones = [{
      "telefone": ""
    }];
    this.newCadastro();
  }
  voltar(): void {
    this.router.navigate(['/cadastro']);
  }
}
