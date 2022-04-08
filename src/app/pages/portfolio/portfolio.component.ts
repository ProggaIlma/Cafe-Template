import { Component, OnInit } from '@angular/core';
import { faCoffee,faCreditCard,faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  faCoffee = faCoffee;
  faCreditCard = faCreditCard;
  
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
