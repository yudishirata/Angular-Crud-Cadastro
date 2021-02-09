import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/services/cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroModel } from '../../Models/CadastroModel';
import { TelefoneModel } from '../../Models/TelefoneModel';

@Component({
  selector: 'app-cadastro-details',
  templateUrl: './cadastro-details.component.html',
  styleUrls: ['./cadastro-details.component.css']
})
export class CadastroDetailsComponent implements OnInit {
  public currentCadastro: CadastroModel = new CadastroModel(0, '', '', '', [new TelefoneModel(0, 0, '')]);
   message = '';

  constructor(
    private cadastroService: CadastroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
  this.getCadastro(this.route.snapshot.params.id);
  }
  getCadastro(id: number): void {
    this.cadastroService.read(id)
      .subscribe(
        cadastro => {
          this.currentCadastro = cadastro;
          console.log(cadastro);
        },
        error => {
          console.log(error);
        });

  }
    updateCadastro(): void {
      this.cadastroService.update(this.currentCadastro.Id, this.currentCadastro)
        .subscribe(
          response => {
            console.log(response);
            this.message = 'O cadastro foi Alterado!';
            //this.getCadastro(this.currentCadastro.Id);
            this.router.navigate(['/cadastro']);
          },
          error => {
            console.log(error);
          })
    }

  adicionarTelefone(): void {
    let newTelefone: TelefoneModel = new TelefoneModel(0, 0, '');
    newTelefone.CadastroId = this.currentCadastro.Id;
    this.currentCadastro.Telefone.push(newTelefone);
  }

  deletarTelefone(id:number): void {
    this.cadastroService.deleteTelefone(id)
        .subscribe(
          response => {
            console.log(response);
            this.getCadastro(this.currentCadastro.Id);
          },
          error => {
            console.log(error);
          })
  }

    deleteCadastro(): void {
      this.cadastroService.delete(this.currentCadastro.Id)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/cadastro']);
          },
          error => {
            console.log(error);
          })
  }
  voltar(): void {
    this.router.navigate(['/cadastro']);
  }

    

}
