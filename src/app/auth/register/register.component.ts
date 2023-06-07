import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
    public formSubmitted = false;
    public registerForm = this.fb.group(
        {
            username: ['', Validators.required],
            nombre: ['', [Validators.required, Validators.minLength(3)]],
            apellido: ['', Validators.required],
            apellido2: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['asd', Validators.required],
            password2: ['asd', Validators.required],
            terminos: [false, Validators.required],
        },
        { Validators: this.passwordIguales('password', 'password2') }
    );

    constructor(
        private fb: FormBuilder,
        private usuarioService: UsuarioService
    ) {}

    crearUsuario() {
        this.formSubmitted = true;
        console.log(this.registerForm.value);

        if (this.registerForm.invalid) {
            return;
        }

        this.usuarioService.crearUsuario(this.registerForm.value).subscribe(
            (resp) => {
                console.log('Usuario Creado');
                console.log(resp);
            },
            (err) => {
                console.log(err);
                Swal.fire('Error', err.error.message, 'error');
            }
        );
    }

    campoNoValido(campo: string): boolean {
        return this.registerForm.get(campo)!.invalid && this.formSubmitted;
    }

    contrasenasNoIguales() {
        const pass1 = this.registerForm.get('password')?.value;
        const pass2 = this.registerForm.get('password2')?.value;

        if (pass1 !== pass2 && this.formSubmitted) {
            return true;
        } else {
            return false;
        }
    }

    aceptaTerminos() {
        return !this.registerForm.get('terminos')?.value && this.formSubmitted;
    }

    passwordIguales(campo1: string, campo2: string) {
        return (formGroup: FormGroup) => {
            const campo1Control = formGroup.get(campo1);
            const campo2Control = formGroup.get(campo2);

            if (campo1Control?.value === campo2Control?.value) {
                campo2Control?.setErrors(null);
            } else {
                campo2Control?.setErrors({ noEsIgual: true });
            }
        };
    }
}
