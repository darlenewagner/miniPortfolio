import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [CommonModule, JsonPipe],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnInit, OnDestroy{

  // @Input() showData: {id: number; name: string }[] = [];
  @Input() items: string[] = [];
  @Output() itemDeleted = new EventEmitter();

  deleteIndex(index: number){
    this.itemDeleted.emit(index);
  }

  ngOnInit(): void {
    console.log('Child Component is intitialized.');
  }

  ngOnDestroy(): void {
    console.log('Child Component is destroyed');
  }
   
}
