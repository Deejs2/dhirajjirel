import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    Aos.init(
      {
        duration: 1000,
        easing: 'ease-in-out',
        once: true
      }
    );
  }

  constructor(private router:Router) { }

  onClickAboutMe() {
    this.router.navigate(['/about']);
  }

  onClickResume() {
    this.router.navigate(['/resume']);
  }

}
