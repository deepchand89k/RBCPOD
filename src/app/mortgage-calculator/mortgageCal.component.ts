import { Component, OnInit } from "@angular/core";

@Component({
  selector: "mortgage-cal",
  templateUrl: "./mortgageCal.component.html",
  styleUrls: ["./mortgageCal.component.sass"]
})
export class MortgageCalComponent implements OnInit {
  monthlyPayment: number;
  totalMonthlyPayment: number;
  data = [ ];
  totalTerm: number;
  totalPayment: number;
  totalInterest: number;
  totalPaid: number;
  mortgageTotal = { home: 200000, down: 20000, loanTerm: 10, interest: 3, insurance: 200, proTax: 200, HOA: 200, };
  capital: number;


  constructor() {}

  ngOnInit() {
    this.submit(this.mortgageTotal);
  }

  paymentCal(data) {
    let downPayment = data.down;
    let principal = data.home - downPayment;
    let interest = data.interest / 1200;
    let term = data.loanTerm * 12;
    let total = principal * ((interest * Math.pow(1 + interest, term)) / (Math.pow(1 + interest, term) - 1));
    this.monthlyPayment = Math.round(total);
    this.totalMonthlyPayment = this.monthlyPayment + this.mortgageTotal.insurance + this.mortgageTotal.proTax + this.mortgageTotal.HOA;
    this.data =  [ { name: 'EMI', value: this.monthlyPayment },
                   { name: 'Homeowners Insurance', value: this.mortgageTotal.insurance },
                   { name: 'Property Tax', value: this.mortgageTotal.proTax },
                   { name: 'HOA', value: this.mortgageTotal.HOA },
                 ];
    this.capital =  data.home - downPayment;
    this.totalTerm = data.loanTerm * 12;
    this.totalPayment = principal + this.monthlyPayment * term;
    this.totalInterest = this.totalPayment - this.capital;
  }


  submit(form) {
    this.mortgageTotal = form;
    this.paymentCal(form);
  }

}
