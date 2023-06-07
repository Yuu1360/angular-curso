import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { RegisterForm } from '../interfaces/register-form.interfaces';
import { LoginForm } from '../interfaces/login-form.interfaces';

const base_url = environment.API_URL;

@Injectable({
    providedIn: 'root',
})
export class UsuarioService {
    constructor(private http: HttpClient) {}

    crearUsuario(formData: RegisterForm) {
        return this.http.post(`${base_url}/users`, formData);
    }

    login(formData: any) {
        return this.http.post(`${base_url}/login_check`, formData).pipe(
            tap((resp: any) => {
                localStorage.setItem('token', resp.token);
            })
        );
    }
}
