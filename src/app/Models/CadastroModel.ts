import { TelefoneModel } from './TelefoneModel';

export class CadastroModel
{
  constructor
    (
    Id: number,
    Nome: string,
    Cpf: string,
    DtNascimento: string,
    Telefone: TelefoneModel[]
  ) { }

  public Id: number = 0;
  public Nome: string = '';
  public Cpf: string = '';
  public DtNascimento: string = '';
  public Telefone: TelefoneModel[] = []; 

}
