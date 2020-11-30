import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions : {} = {};
  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 1,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Random Data'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: 'A',
              y: 61.41,
              sliced: true,
              selected: true
          }, {
              name: 'B',
              y: 11.84
          }, {
              name: 'C',
              y: 10.85
          }, {
              name: 'D',
              y: 4.67
          }, {
              name: 'E',
              y: 4.18
          }, {
              name: 'F',
              y: 1.64
          }, {
              name: 'G',
              y: 1.6
          }, {
              name: 'H',
              y: 1.2
          }, {
              name: 'I',
              y: 2.61
          }]
      }]
    };
    setTimeout( () => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 100);
  }

}
