import { Component, Input, DoCheck, OnChanges, SimpleChanges, AfterViewInit, AfterContentInit, ElementRef, ContentChild, ViewChild, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [ JsonPipe ],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test implements AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked {
   
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

 ngAfterViewInit(): void {
  const divElement: HTMLElement = this.wrapper.nativeElement;
  divElement.style.color = "darkgreen";
  divElement.style.fontSize = "15px";
  divElement.style.fontWeight = "300";

  console.log("ngAfterViewInit() hook was invoked...", this.wrapper);
 }
//   ngOnChanges(changes: SimpleChanges){
//     console.log("ngOnChanges called: ", changes);
//   }

ngAfterViewChecked(): void {
  console.log('ngAfterViewChecked() hook was invoked...');
}

}
