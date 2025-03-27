import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_string_calculator';
  enteredNumber: any = '';

  showResult = false;


  calculateNumber(){
    let extractedNumber:any = [];


    for (let i = 0; i<this.enteredNumber.length; i++) {
      if (this.enteredNumber[i].match(/[0-9]/)) {
        if (this.enteredNumber[i-1] !== '-' && this.enteredNumber[i] !== ' ') {
          extractedNumber.push(this.enteredNumber[i]);
        }
        this.enteredNumber[i-1] === '-' ? alert(`Negative digit ${this.enteredNumber[i]} found`) : ''
      }

    }

   let convertedArr =  extractedNumber.map((each:any) => Number(each));

   let finalSum = convertedArr.reduce((first:any, second:any) => first + second, 0);
   this.showResult = true

    return finalSum;

  }
}




