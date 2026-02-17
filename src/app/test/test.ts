import { Component, Input, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [ JsonPipe ],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test implements DoCheck {
   
  @Input() user: any;
  private previousUserName: string | undefined;
   
   ngDoCheck(): void {
     if(this.user.name != this.previousUserName){
       this.previousUserName = this.user.name;
       console.log('ngDoCheck called - User name changed: ', this.user.name);
     }
   }
   
//   ngOnChanges(changes: SimpleChanges){
//     console.log("ngOnChanges called: ", changes);
//   }

}
