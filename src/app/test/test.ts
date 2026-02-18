import { Component, Input, DoCheck, OnChanges, SimpleChanges, AfterContentInit, ElementRef, ContentChild, ViewChild, AfterContentChecked } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [ JsonPipe ],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test implements AfterContentInit, AfterContentChecked {
   
 // @Input() user: any;
 // private previousUserName: string | undefined;
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef; 

//   ngDoCheck(): void {
//     if(this.user.name != this.previousUserName){
//       this.previousUserName = this.user.name;
//       console.log('ngDoCheck called - User name changed: ', this.user.name);
//        console.log("ngDoCheck was invoked...");
 //    }
 //  }
   
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit was invoked...");
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - ', 'contentWrapper', this.content);    
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked() was invoked...");
  }
//   ngOnChanges(changes: SimpleChanges){
//     console.log("ngOnChanges called: ", changes);
//   }

}
