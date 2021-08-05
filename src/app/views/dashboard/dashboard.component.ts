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
  fundsOwned: Array<any>;
  fundsOwnedCost: number = 0;
  fundsOwnedProfitabilityMonth: number = 0;
  fundsOwnedProfitabilityYear: number = 0;
  fundsOwnedCount: number = 0;

  constructor( ) {
    this.fundsOwned = this.filterFundsOwned();
    this.fundsOwnedCount = this.countFundsOwned();
    this.fundsOwnedCost = this.calcFundsOwnedCost();
    this.fundsOwnedProfitabilityMonth = this.calcFundsOwnedProfitabilityMonth();
    this.fundsOwnedProfitabilityYear = this.calcFundsOwnedProfitabilityYear();

  }
  
  filterFundsOwned(): Array<any>  {
    return this.funds.filter(fund => fund.owned);
  }

  calcFundsOwnedCost(): number  {
    return this.fundsOwned.reduce((accumulator, current) => accumulator + (current.cotas * +current.cotacao), 0);
  }

  countFundsOwned(): number  {
    return this.fundsOwned.reduce((accumulator, current) => accumulator + current.cotas, 0);
  }

  calcFundsOwnedProfitabilityMonth(): number  {
    return this.fundsOwned.reduce((accumulator, current) => accumulator + (current.dividend_yield_month * +current.cotas), 0);
  }

  calcFundsOwnedProfitabilityYear(): number  {
    return this.fundsOwned.reduce((accumulator, current) => accumulator + (current.dividend_yield * current.cotas), 0);

  }

  ngOnInit(): void {
    
    console.log("Load:", this.funds);
    console.log("Minhas Cotas:", this.fundsOwned);
    console.log("Custo Total:", this.fundsOwnedCost);
    console.log("Rentabilidade Prevista (Mes):", this.fundsOwnedProfitabilityMonth);
    console.log("Rentabilidade Prevista (Ano):", this.fundsOwnedProfitabilityYear);

  }
}
