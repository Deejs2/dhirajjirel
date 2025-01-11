import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import Swiper from 'swiper';
import AOS from 'aos';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub, faHtml5, faCss3Alt, faJs, faAngular, faBootstrap, faJava, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faGreaterThan, faLessThan, faLeaf, faServer, faDatabase, faCodeBranch, faCode, faProjectDiagram, faUsers, faCode as faCodeSolid, faCoffee, faQuoteLeft, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'] 
})
export class AboutComponent implements OnInit, AfterViewInit {

    faFacebookIcon = faFacebook;
    faInstagramIcon = faInstagram;
    faTwitterIcon = faTwitter;
    faLinkedinIcon = faLinkedin;
    faGithubIcon = faGithub;
    faGreaterThanIcon = faGreaterThan;
    faLessThanIcon = faLessThan;
    faHtml5Icon = faHtml5;
    faCss3AltIcon = faCss3Alt;
    faJsIcon = faJs;
    faAngularIcon = faAngular;
    faBootstrapIcon = faBootstrap;
    faJavaIcon = faJava;
    faLeafIcon = faLeaf;
    faPhpIcon = faPhp;
    faServerIcon = faServer;
    faDatabaseIcon = faDatabase;
    faCodeBranchIcon = faCodeBranch;
    faCodeIcon = faCode;
    faProjectDiagramIcon = faProjectDiagram;
    faUsersIcon = faUsers;
    faCodeSolidIcon = faCodeSolid;
    faCoffeeIcon = faCoffee;
    faQuoteLeftIcon = faQuoteLeft;
    faGlobeIcon = faGlobe;

  ngOnInit() {
    this.initCounters();
    AOS.init(
      {
        duration: 1000,
        easing: 'ease-in-out',
        once: true
      }
    );
  }

  private initCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target')!;
      const increment = target / speed;

      const updateCount = () => {
        const count = +counter.innerHTML;
        if (count < target) {
          counter.innerHTML = Math.ceil(count + increment).toString();
          setTimeout(updateCount, 1);
        } else {
          counter.innerHTML = target.toString();
        }
      };

      updateCount();
    });
  }

  ngAfterViewInit() {
    this.initTestimonialsSlider();
  }

  private initTestimonialsSlider() {
    new Swiper('.testimonials-slider', {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }
    });
  }
}