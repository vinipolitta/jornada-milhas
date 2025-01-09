import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';
import { PessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  public perfilComponent = true;
  public titulo = 'Ola ';
  public textoBtn = 'ATUALIZAR';
  public token = '';
  public cadastro!: PessoaUsuaria;
  public nome: string = '';
  public form!: FormGroup<any> | null;

  constructor(
    private tokenService: TokenService,
    private cadastroService: CadastroService,
    private formularioService: FormularioService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro(this.token).subscribe({
      next: (resposta: PessoaUsuaria) => {
        this.cadastro = resposta;
        this.nome = resposta.nome;
        this.carregarForm();
      },
      error: (error) => {
        console.error('Erro ao buscar cadastro', error);
      },
    });
  }

  carregarForm() {
    this.form = this.formularioService.getCadastro();
    this.form?.patchValue({
      nome: this.cadastro.nome,
      nascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      telefone: this.cadastro.telefone,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      genero: this.cadastro.genero,
      cidade: this.cadastro.cidade,
      estado: this.cadastro.estado,
    });
  }
  deslogar() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
  atualizar() {
    const dadosAtualizados = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      genero: this.form?.value.genero,
      cidade: this.form?.value.cidade,
      estado: this.form?.value.estado,
    };

    this.cadastroService
      .editarCadastro(dadosAtualizados, this.token)
      .subscribe({
        next: () => {
          alert('Cadastro atualizado com sucesso!');
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Erro ao atualizar cadastro', error);
        },
      });
  }
}
