import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    public formSubmitted = false;
    public loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        remember: [false],
    });
    constructor(
        private router: Router,
        private fb: FormBuilder,
        private usuarioService: UsuarioService
    ) {}

    login() {
        if (this.loginForm.invalid) {
            return;
        }

        this.usuarioService.login(this.loginForm.value).subscribe(
            (resp) => {
                console.log('Usuario logeado');
                console.log(resp);
            },
            (err) => {
                console.log(err);
                Swal.fire('Error', err.error.message, 'error');
            }
        );
    }
}
