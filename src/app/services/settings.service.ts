import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SettingsService {
    public cssTema = document.querySelector('#theme');
    constructor() {
        const theme =
            localStorage.getItem('theme') ||
            './assets/css/colors/default-dark.css';

        this.cssTema?.setAttribute('href', theme);
    }

    ChangeTheme(theme: string) {
        const url = `./assets/css/colors/${theme}.css`;

        this.cssTema?.setAttribute('href', url);

        localStorage.setItem('theme', url);

        this.checkCurrentSelector();
    }

    checkCurrentSelector() {
        const links = document.querySelectorAll('.selector');

        links.forEach((elem) => {
            elem.classList.remove('working');

            const btnTheme = elem.getAttribute('data-theme');
            const btnUrl = `./assets/css/colors/${btnTheme}.css`;
            const currentTheme = this.cssTema?.getAttribute('href');

            if (btnUrl === currentTheme) {
                elem.classList.add('working');
            }
        });
    }
}
