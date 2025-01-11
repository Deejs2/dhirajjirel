import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faCertificate, faCheck, faCode, faEnvelope, faGraduationCap, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Aos from 'aos';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit{
  ngOnInit(): void {
    Aos.init(
      {
        duration: 1000,
        easing: 'ease-in-out',
        once: true
      }
    );
  }

  faEnvelopeIcon = faEnvelope;
    faPhoneIcon = faPhone;
    faLocationDotIcon = faLocationDot;
    faInstagramIcon = faInstagram;
    faTwitterIcon = faTwitter;
    faLinkedinIcon = faLinkedin;
    faGithubIcon = faGithub;
    faUserIcon = faUser;
    faBriefcaseIcon = faBriefcase;
    faCheckIcon = faCheck;
    faCodeIcon = faCode;
    faGraduationCapIcon = faGraduationCap;
    faCertificateIcon = faCertificate;

  skillCategories = [
    {
      name: 'Frontend',
      skills: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      name: 'Backend',
      skills: ['PHP','Spring Boot', 'RESTful APIs']
    },
    {
      name: 'Database & Tools',
      skills: ['PostgreSQL', 'Git', 'SQL', 'Postman']
    }
  ];

}
