import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-current-weather-component',
  templateUrl: './current-weather-component.component.html',
  styleUrls: ['./current-weather-component.component.scss']
})
export class CurrentWeatherComponentComponent implements OnInit {

  @Input()
  CurrentWeather: any;

  constructor() { }

  ngOnInit(): void {
  }

}
