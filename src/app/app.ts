import { Component, signal, ViewChild, Input, OnChanges, SimpleChanges, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Test } from './test/test';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule, Test],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  count: number = 0;

  ngOnInit(): void {
    this.startCounter();
  }
  startCounter(){
    setInterval(()=>{
      if(this.count <= 5){
        console.log(this.count++);
      }
    },1000);
  }

  inputValue: string = 'Initial Value';

//  ngOnInit(): void {
//    console.log("Calling from the ngOnInit hook...");
// }

//    constructor(){
//      console.log("Calling from the constructor - ", this.inputValue);
//    }

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
