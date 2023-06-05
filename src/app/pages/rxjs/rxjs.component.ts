import { Component, OnDestroy } from '@angular/core';
import {
    Observable,
    Subscription,
    filter,
    interval,
    map,
    retry,
    take,
} from 'rxjs';

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styles: [],
})
export class RxjsComponent implements OnDestroy {
    public intervalSuscription: Subscription;

    constructor() {
        const obs$ = this.retornalObserver();
        /* 
        obs$.pipe(retry()).subscribe({
            next: (valor) => {
                console.log(valor);
            },
            error: (error) => {
                console.warn(error);
            },
            complete: () => {
                console.log('Todo Bien');
            },
        }); */

        this.intervalSuscription = this.retornalIntervalo().subscribe(
            console.log
        );
    }
    ngOnDestroy(): void {
        this.intervalSuscription.unsubscribe();
    }

    retornalIntervalo(): Observable<number> {
        return interval(100).pipe(
            /*             take(10), */
            map((valor) => valor + 1),
            filter((valor) => (valor % 2 === 0 ? true : false))
        );
    }

    retornalObserver(): Observable<number> {
        let i = 0;

        return new Observable<number>((observer) => {
            const intervalo = setInterval(() => {
                i++;
                observer.next(i);

                if (i >= 5) {
                    clearInterval(intervalo);
                    observer.complete();
                }

                if (i == 2) {
                    clearInterval(intervalo);
                    observer.error('Boom');
                }
            }, 1000);
        });
    }
}
