import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faCertificate, faCheck, faCode, faEnvelope, faGraduationCap, faLocationDot, faPhone, faUser, faDownload, faStar, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Aos from 'aos';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {
  @ViewChild('resumeContent', { static: false }) resumeContent!: ElementRef;

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
  faDownloadIcon = faDownload;
  faStarIcon = faStar;
  faGlobeIcon = faGlobe;

  highlights = [
    'Frontend Development (Angular, HTML, CSS, JavaScript, Bootstrap)',
    'Backend Development (Spring Boot, REST APIs, Java, PHP)',
    'Database Management (MySQL, PostgreSQL)',
    'Responsive Web Design',
    'Version Control (Git, GitHub, GitLab)'
  ];

  skillCategories = [
    {
      name: 'Frontend',
      skills: ['Angular', 'HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
    {
      name: 'Backend',
      skills: ['Spring Boot', 'Java', 'REST APIs', 'PHP']
    },
    {
      name: 'Databases',
      skills: ['MySQL', 'PostgreSQL']
    },
    {
      name: 'Tools',
      skills: ['Git', 'Postman', 'Swagger', 'Android Development (Beginner)']
    }
  ];

  async downloadPDF(): Promise<void> {
    const element = this.resumeContent.nativeElement;
    const downloadButton = document.getElementById('downloadBtn');

    try {
      // Hide AOS effects temporarily and scroll to bottom
      document.querySelectorAll('[data-aos]').forEach(el => el.classList.remove('aos-animate'));

      // Scroll to bottom to force AOS animations to render
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

      // Wait to ensure all lazy-loaded/animated content renders
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Temporarily hide the download button
      if (downloadButton) {
        downloadButton.style.visibility = 'hidden';
      }

      // Generate canvas
      const canvas = await html2canvas(element, {
        useCORS: true,
        allowTaint: true,
        logging: false
      });


      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }

      pdf.save('Dhiraj_Jirel_Resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      if (downloadButton) {
        downloadButton.style.visibility = 'visible';
      }
    }
  }

}