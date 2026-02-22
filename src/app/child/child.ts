import { Component, Input } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [CommonModule, JsonPipe],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() showData: {id: number; name: string }[] = [];
  
}
