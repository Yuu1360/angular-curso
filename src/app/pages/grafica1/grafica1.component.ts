import { Component } from '@angular/core';

import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
    selector: 'app-grafica1',
    templateUrl: './grafica1.component.html',
    styles: [],
})
export class Grafica1Component {
    public labels1: string[] = ['Fresa', 'Chocolate', 'Mani'];
    public data1 = [350, 350, 350];
}
