import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name= '';
  date= '';
  amount= 0;
  height= 0;
  miles= 0;

  car = {

    make: 'Mercedes',
    model: 'C-class',
    year: '2023'

  };

  onMilesChange(value: string) 
  {
    this.miles = parseFloat(value);
  }

  onHeightChange(value: string) 
  {
    this.height = parseFloat(value);
  }

  onNameChange(value: string) {

    this.name = value;
  } 

  onDateChange(value: string) 
  {
    this.date=value;
  }

  onAmountChange(value: string) 
  {
    this.amount = parseFloat(value);
  }
  
}
