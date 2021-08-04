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
  
  funds_owned: Array<any> = this.funds.filter(function(fund) {
    return fund.owned == true;
  });

  funds_custo_total: number = 0;
  // funds_rentabilidade_prevista: number = this.funds_owned.reduce((accumulator, current) => accumulator + (current.cotas+)), 0);
  //funds_rentabilidade_prevista: number = this.funds_owned.reduce(function (acc, cur) { return acc + Number(cur.cotas); });
 


  constructor( ) {}

  ngOnInit(): void {
    
    console.log("Load:", this.funds);
    console.log("Minhas Cotas:", this.funds_owned);
    console.log("Custo Total:", this.funds_custo_total);
    // console.log("Rentabilidade Prevista:", this.funds_rentabilidade_prevista);

  }
}
