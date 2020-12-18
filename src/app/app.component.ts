import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-weather';
  city: string = 'London';  //'London'
  apiKey = '44a90e2ef6e7403d819204842201711';
  days= 3; //number;

  weatherCurrentObject: any;
  weatherForecastObject = [];

  isLoading: boolean;

  constructor(private http: HttpClient) {
  }

  GetCurrentWeather() {
    const url = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`;

    this.http.get(url).subscribe(objc => {
      this.weatherCurrentObject = objc;
      console.log(objc);
    });
  }

  GetForecast() {
    this.isLoading = true;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${this.city}&days=${this.days}`;
    this.http.get(url).subscribe((objf: any) => {
      this.weatherForecastObject = objf.forecast.forecastday;
      this.isLoading = false;
      console.log(this.weatherForecastObject);
    })
  }
}

