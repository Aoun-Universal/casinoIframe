import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, SlickCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // slideConfig = {
  //   slidesToScroll: 1,
  //   slidesToShow: 1,
  //   infinite: true,
  //   autoplay: true,
  //   pauseOnHover: true,
  //   adaptiveHeight: true,
  //   autoplaySpeed: 2000,
  //   swipeToSlide: true, 
  //   arrows:false, 
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         autoplay: true,
  //         pauseOnHover: true,
  //         swipeToSlide: true,  
  //       },
  //     },
  //   ],
  // };
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       
    autoplaySpeed: 3000,
    dots: true,         
    infinite: true     
  }
  slides = [
    {img: "https://demo7.gamingsites.club/api/upload/image/banner43795.png"},
    {img: "https://demo7.gamingsites.club/api/upload/image/banner43795.png"},
    {img: "https://demo7.gamingsites.club/api/upload/image/banner43795.png"},
    {img: "https://demo7.gamingsites.club/api/upload/image/banner43795.png"},
    {img: "https://demo7.gamingsites.club/api/upload/image/banner43795.png"},
    {img: "https://demo7.gamingsites.club/api/upload/image/banner43795.png"},

  ];



}
