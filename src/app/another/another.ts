import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-another',
  imports: [],
  templateUrl: './another.html',
  styleUrl: './another.css',
})
export class Another implements OnInit, OnDestroy {
  ngOnInit(): void {
     console.log("Another: OnInit");
  }

  ngOnDestroy(): void {
    console.log("Another: OnDestroy");
  }

}
