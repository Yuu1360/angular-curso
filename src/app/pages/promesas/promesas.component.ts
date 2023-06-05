import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-promesas',
    templateUrl: './promesas.component.html',
    styles: [],
})
export class PromesasComponent implements OnInit {
    ngOnInit(): void {
        this.getUsuarios().then((resp) => {
            console.log(resp);
        });
        /* 
        const promesa = new Promise((resolve, reject) => {
            if (false) {
                resolve('Hola Mundo');
            } else {
                reject('Algo Anda Mal');
            }
        });

        promesa
            .then((message) => {
                console.log(message);
            })
            .catch((error) => {
                console.log(error);
            });

        console.log('Fin OnInit'); */
    }

    getUsuarios() {
        const promise = new Promise((resolve) => {
            fetch('https://reqres.in/api/users')
                .then((resp) => resp.json())
                .then((body) => resolve(body.data));
        });

        return promise;
    }
}
