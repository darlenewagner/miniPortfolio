import { Component, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { test } from './';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  inputValue: string = 'Initial Value';

  ngOnInit(): void {
    console.log("Calling from the ngOnInit hook...");
 }

    constructor(){
      console.log("Calling from the constructor...");
    }

  protected readonly title = signal('miniPortfolio');
   nm = '';
   em = '';
   ph = '';
   add = '';
   submitted : boolean = false;
   showHeading : boolean = true;
   qualification = [{school: '', degree: '', year: '', }];

   addQualification(){
     this.qualification.push({school: '', degree: '', year: ''});
   }

   submit(){
     this.submitted = true;
     this.showHeading = false;
   }

   edit(){
    this.submitted = false;
    this.showHeading = true;
   }
}
