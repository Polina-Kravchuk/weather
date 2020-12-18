import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-forecast-component',
  templateUrl: './forecast-component.component.html',
  styleUrls: ['./forecast-component.component.scss']
})
export class ForecastComponentComponent implements OnInit {

@Input()
forecast: any;

  constructor() { }

  ngOnInit(): void {
  }

}
