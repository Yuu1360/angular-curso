import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
    selector: 'app-dona',
    templateUrl: './dona.component.html',
    styles: [],
})
export class DonaComponent implements OnInit {
    @Input() title: string = 'Sin Titulo';
    // Doughnut
    @Input() labels: string[] = [];

    @Input() data: number[] = [350, 450, 100];

    private datasets = [{ data: this.data }];

    public doughnutChartData: ChartData<'doughnut'> = {
        labels: this.labels,
        datasets: this.datasets,
    };

    ngOnInit(): void {
        this.doughnutChartData.labels = this.labels;
        this.doughnutChartData.datasets = [{ data: this.data }];
    }
}
