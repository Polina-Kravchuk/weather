import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherComponentComponent } from './current-weather-component.component';

describe('CurrentWeatherComponentComponent', () => {
  let component: CurrentWeatherComponentComponent;
  let fixture: ComponentFixture<CurrentWeatherComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentWeatherComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
