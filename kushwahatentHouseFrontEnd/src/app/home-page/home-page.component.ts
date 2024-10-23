import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header1Module } from '../components-modules/header1/header1.module';
import { StaticBannerModule } from "../components-modules/banner/static-banner/static-banner.module";
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, Header1Module, StaticBannerModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  newsHighlighter:any[] = [
    {
      text:'Birthday',
      img:'birthday-theme.png'
    },
    {
      text:'Haldi',
      img:'haldi-theme.png'
    },
    {
      text:'Ring Ceremony',
      img:'ring-ceremony-theme.png'
    },
    {
      text:'Marriage',
      img:'wedding-theme.png'
    },
    {
      text:'Reception',
      img:'reception-theme.png'
    }
  ]

}
