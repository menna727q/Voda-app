import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../Service/weather.service';
import { format } from 'date-fns';
// import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor (private weatherservice:WeatherService){

  }
  imgSrc:string="./assets/humidity.png"
  cities:any[] =[]
  isCelsius = true;
  searching: boolean = false;
  isDate=false;
  ngOnInit(): void {
     this.getAllData();
  }
  getAllData(){
    this.weatherservice.getData().subscribe(data=>{
      this.cities=data;
      this.cities.forEach(city => {
        city.lastdate=city.forecast[city.forecast.length-1]
      });
    })
  }
  selectedDate: string = ''; 
  onDateChange(date: string) {
    
    this.selectedDate = date;
    this.isDate = true; // Set the flag to indicate date-based view
    this.searching = false; 
    }

  getWeatherForDate(city: any) {
    // this.searching=true;
    if (!this.selectedDate) {
      return null; // Don't return weather data if no date is selected
    }
    const selectedDateWeather = city.forecast.find(
      (forecast: any) => forecast.date === this.selectedDate
    );
    return selectedDateWeather;
  }
  toggleUnit() {
    this.isCelsius = !this.isCelsius;
  }

  getTemperature(city: any) {
    return this.isCelsius ? city.lastdate.temperatureCelsius : city.lastdate.temperatureFahrenheit;
  }
  

cityNotFoundMessage: string = '';
searchCityName: string = '';
searchedCity:any;
searchCity(cityName: string) {
  this.searching = true; 
  this.cityNotFoundMessage='';
  const selectedCity = this.cities.find(city =>
    city.city.toLowerCase() === cityName.toLowerCase()
  );

  if (selectedCity) {
    const cityId = selectedCity.id;
    this.weatherservice.getbyID(cityId).subscribe(
      data => {
        this.searching = true;
        this.searchedCity = data;
      },
      error => {
        console.error(error);
        this.searching = false; // Reset searching flag on error
      }
    );
  } else {
    // console.warn(`City "${cityName}" not found.`);
    this.cityNotFoundMessage=`City "${cityName}" not found.`;
    this.searching = false; // Reset searching flag if city not found
  }
}
// selectedDate: Date = new Date();
searchedCities: any[] = [];

}

