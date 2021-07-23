import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

import dataset from './funds.json';


@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    
  // funds List
  funds: Array<any> = dataset;
  
  constructor( ) {}

  ngOnInit(): void {
    
    console.log("Load", this.funds);
    
  }
}
