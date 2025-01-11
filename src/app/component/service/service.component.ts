import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import { faCode, faCreditCard, faDatabase, faGlobe, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  faCodeIcon = faCode;
  faDatabaseIcon = faDatabase;
  faGlobeIcon = faGlobe;
  faCreditCardIcon = faCreditCard;
  faLaptopCodeIcon = faLaptopCode;
  faRocketIcon = faRocketchat;

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }

  constructor(private router: Router) {}

  onClickContact() {
    this.router.navigate(['/contact']);
  }
}