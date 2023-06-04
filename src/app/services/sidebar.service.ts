import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SidebarService {
    menu: any[] = [
        {
            titulo: 'dashboard!!',
            icono: 'mdi mdi-gauge',
            subMenu: [
                { titulo: 'Main', url: '/' },
                { titulo: 'Progress', url: 'progress' },
                { titulo: 'Grafica', url: 'grafica1' },
            ],
        },
    ];

    constructor() {}
}
