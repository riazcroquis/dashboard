import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  
  Highcharts = Highcharts;
  chartOptions : {} = {};
  constructor() { }

  ngOnInit(): void {
    
    this.chartOptions = {
      chart: {
          type: 'column'
      },
      title: {
          text: null,
      },
      subtitle: {
          text: null,
      },
      accessibility: {
          announceNewData: {
              enabled: true
          }
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
          title: {
              text: 'Value'
          }
  
      },
      legend: {
          enabled: false
      },
  
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },
  
      series: [
          {
              name: "Browsers",
              colorByPoint: true,
              data: [
                  {
                      name: "Z",
                      y: 22.74,
                      drilldown: "Z"
                  },
                  {
                      name: "Y",
                      y: 10.57,
                      drilldown: "Y"
                  },
                  {
                      name: "X",
                      y: 17.23,
                      drilldown: "X"
                  },
                  {
                      name: "W",
                      y: 15.58,
                      drilldown: "W"
                  },
                  {
                      name: "V",
                      y: 14.02,
                      drilldown: "V"
                  },
                  {
                      name: "U",
                      y: 11.92,
                      drilldown: "U"
                  },
                  {
                      name: "T",
                      y: 7.62,
                      drilldown: null
                  }
              ]
          }
      ],
      
    };
  }

}
