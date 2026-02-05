import { Component, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { Container } from './container/container';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('miniPortfolio');
   nm = '';
   em = '';
   ph = '';
   add = '';
   qualification = [{school: '', degree: '', year: '', }];
}
