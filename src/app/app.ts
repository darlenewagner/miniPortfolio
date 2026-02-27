import { AfterContentInit, Component, DoCheck, signal, ViewChild, Input, OnChanges, SimpleChanges, OnInit} from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Test } from './test/test';
import { Another } from './another/another';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule, Test, JsonPipe, Another, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit, DoCheck {

  itemsArr: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem(){
    const newItem = `Item ${this.itemsArr.length + 1}`;
    this.itemsArr.push(newItem);
  }

  deleteItem(index: number){
    if(index >=0 && index < this.itemsArr.length){
      this.itemsArr.splice(index, 1);
    }
  }

  displayComponent: boolean = true;

  toggle(){
    this.displayComponent = !this.displayComponent;
  }
  
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

  ngOnInit(): void {
    console.log("App: OnInit");
  }
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


 courses: {id: number, name: string}[] = [
  {
    "id": 1,
    "name": "JavaScript - Marathon Interview Questions Series"
  },
  {
     "id": 2,
     "name": "Mastering React with Interview Questions, eStore Project"
  },
  {
     "id": 3,
     "name": "Mastering TypeScript With Marathon Interview Questions"
  },
  {
    "id": 4,
    "name": "Mastering HTML, CSS, Sass, Bootstrap + Interview Questions"
  }
 ];


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
