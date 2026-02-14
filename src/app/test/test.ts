import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test implements OnChanges{
  @Input() inputValue: string = '';
   ngOnChanges(changes: SimpleChanges): void{
     console.log("Calling from the ngOnChanges hook...");
     console.log(changes);
   }

}
