import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-forecast-hours',
  templateUrl: './forecast-hours.component.html',
  styleUrls: ['./forecast-hours.component.scss']
})
export class ForecastHoursComponent implements OnInit {
  @Input()
  forecastHour: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.forecastHour);
  }

}
