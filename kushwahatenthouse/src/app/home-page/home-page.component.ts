import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header1Module } from '../components-modules/header1/header1.module';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, Header1Module],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  newsHighlighter:string[] = [
    'Testing 1',
    'Testing 2',
    'Testing 3',
    'Testing 4',
    'Testing 5',
    'Testing 6',
    'Testing 11',
    'Testing 21',
    'Testing 31',
    'Testing 41',
    'Testing 51',
    'Testing 61',
  ]

}
