import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import {HttpClient} from '@angular/common/http';


const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  toDate: number = Date.now();
   weather:any
   cityName="";
  constructor(public httpClint:HttpClient){
    this.loadedData()
  }
loadedData(){
this.httpClint.get(`${API_URL}/weather?q=${this.cityName}&units=metric&appid=${API_KEY }`).subscribe(results =>{
  console.log(results);
  this.weather = results;
  console.log(this.weather.main.temp);
  console.log(this.weather.main.name)
  console.log(this.weather.main.humidity)
  console.log(this.weather.wind)
  
});
}
}


