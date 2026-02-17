import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [ JsonPipe ],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test implements OnChanges{
   
  @Input() user: any;

   ngOnChanges(changes: SimpleChanges){
     console.log("ngOnChanges called: ", changes);
   }

}
