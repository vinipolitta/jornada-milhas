import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService, LoginData } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public routerLink = '/cadastro'
  constructor(
    private fb: FormBuilder,
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required],
    });
  }

  login() {
    console.log("teste login", this.loginForm.value);

    this.autenticacaoService.login(this.loginForm.value).subscribe({
      next: (value: LoginData) => console.log('Success:', value),
      error: (error) => console.error('Error ao realizar o login:', error),
      complete: () => {
        console.log("complete login");

        this.router.navigateByUrl('/');
      }
    });
  }
}
