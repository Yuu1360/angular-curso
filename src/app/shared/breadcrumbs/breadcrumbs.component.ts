import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
    public titulo: string | undefined;
    public tituloSubs$: Subscription;

    constructor(private router: Router) {
        this.tituloSubs$ = this.getTitulo().subscribe(({ titulo }) => {
            this.titulo = titulo;
            document.title = titulo;
        });
    }
    ngOnDestroy(): void {
        this.tituloSubs$.unsubscribe();
    }

    getTitulo() {
        return this.router.events.pipe(
            filter(
                (event): event is ActivationEnd =>
                    event instanceof ActivationEnd
            ),
            filter(
                (event: ActivationEnd) => event.snapshot.firstChild === null
            ),
            map((event: ActivationEnd) => event.snapshot.data)
        );
    }
}
