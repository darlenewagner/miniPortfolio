import { AfterContentInit, Component, DoCheck, signal, ViewChild, Input, OnChanges, SimpleChanges, OnInit} from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Test } from './test/test';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule, Test, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements DoCheck {
  
  dataFromParent = '';

//  ngAfterContentInit(): void {
//    console.log("ngAfterContentInit was invoked...");
//  }

  ngDoCheck(): void {
    console.log("ngDoCheck was invoked...");
  }

  sendDataToChild(): void{
    let random = Math.floor(Math.random() * 10);
    this.dataFromParent = "Random Number: " + random;
  }
  

  user = {
       name: 'Shrike',
     };
    changeUserName(){
      this.user.name = 'Grike';
    }

 // count: number = 0;

 // ngOnInit(): void {
 //   this.startCounter();
 // }
 // startCounter(){
 //   setInterval(()=>{
 //     if(this.count <= 5){
 //       console.log(this.count++);
 //     }
 //   },1000);
 // }

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
