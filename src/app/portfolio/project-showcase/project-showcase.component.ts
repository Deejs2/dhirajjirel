import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project.model';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExternalLink, faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Aos from 'aos';

@Component({
  selector: 'app-project-showcase',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './project-showcase.component.html',
  styleUrl: './project-showcase.component.css'
})
export class ProjectShowcaseComponent implements OnInit {

  faEyeIcon = faEye;
  faExternalLinkIcon = faExternalLink;
  faGithubIcon = faGithub;


  projects: Project[] = [
    {
      id: "Kj2mN",
      title: 'School CMS',
      description: 'A School Management System with a focus on school or colleges website and student management.',
      image: 'assets/project-images/school-cms-cover.png',
      category: 'Angular & SpringBoot',
      technologies: ['Angular', 'SpringBoot', 'PostgreSQL', 'Bootstrap'],
      demoUrl: '',
      githubUrl: 'https://github.com',
      details: {
        challenge: 'Creating a scalable and secure School or Colleges website with real-time student management.',
        solution: 'Implemented layered architecture with separate services for school or college, student, teacher, and courses.',
        features: [
          'User authentication and authorization',
          'Student and teacher management',
          'Course management',
          'Theme management',
          'Mail configuration for school or college',
          'Statics and reports',
          'Class and Exam Routine'
        ],
        screenshots: [
          'assets/project-images/school-cms-dashboard.png',
          'assets/project-images/school-cms-dashboard1.png',
          'assets/project-images/school-cms-theme-selection.png',
          'assets/project-images/school-cms.png'
        ]
      }
    },
    {
      id: "9xPd4",
      title: 'BCA ProjectSathi',
      description: 'BCA ProjectSathi is a platform to personalized web development project assistance designed specifically for BCA students.',
      image: 'assets/project-images/bcaprojectsathi-img1.png',
      category: 'Angular',
      technologies: ['Bootstrap', 'Angular', 'JavaScript'],
      demoUrl: 'https://bcaprojectsathi.com',
      githubUrl: 'https://github.com/Deejs2/bcaprojectsathi',
      details: {
        challenge: 'Creating a platform for personalized web development project assistance.',
        solution: 'Understand the challenges that BCA students face when managing their academic projects, especially in web development.',
        features: [
          'Project ideas and guidance',
          'Project documentation and presentation',
          'Project code and implementation',
          'Project support and assistance',
          'Project evaluation and feedback',
          'Project completion'
        ],
        screenshots: [
          'assets/project-images/bcaprojectsathi-img2.png',
          'assets/project-images/bcaprojectsathi-img3.png',
          'assets/project-images/bcaprojectsathi-img4.png',
        ]
      }
    },
    {
      id: "L7cYp",
      title: 'CyberCafe',
      description: 'CyberCafe is an innovative Online Menu and Ordering System designed to revolutionize the dining experience in cafes and restaurants.',
      image: 'assets/project-images/cyber-cafe.png',
      category: 'PHP & MySQL',
      technologies: ['Bootstrap', 'PHP', 'MySQL', 'JavaScript'],
      demoUrl: '',
      githubUrl: 'https://github.com/Deejs2/CyberCafe',
      details: {
        challenge: 'Online Menu and Ordering System designed to revolutionize the dining experience in cafes and restaurants',
        solution: 'Customer interactions with menus, streamline the ordering process, and elevate overall efficiency in the food service industry.',
        features: [
          'Digital menu presentation for enhanced customer convenience',
          'Streamlined order processing to reduce wait times and errors',
          'Contactless ordering to ensure safety in the post-pandemic era',
          'Improved operational efficiency for restaurant staff',
          'Enhanced customer experience through technology integration',
        ],
        screenshots: [
          'assets/project-images/cyber-cafe1.png',
          'assets/project-images/cyber-cafe2.png',
          'assets/project-images/cyber-cafe3.png',
        ]
      }
    },
    {
      id: "X4kUs",
      title: 'Blog CMS',
      description: 'A blog management system with a focus on blog website and post management.',
      image: 'assets/project-images/cms.png',
      category: 'PHP & MySQL',
      technologies: ['Bootstrap', 'PHP', 'MySQL', 'JavaScript'],
      demoUrl: '',
      githubUrl: 'https://github.com/Deejs2/Content-Management-System',
      details: {
        challenge: 'Creating a scalable and secure blog website with real-time post management.',
        solution: 'Implemented layered architecture with separate services for blog, post, and categories.',
        features: [
          'User authentication and authorization',
          'Post and categories management',
          'Comment and reply system',
          'Dashboard for admin'
        ],
        screenshots: [
          'assets/project-images/cms1.png',
          'assets/project-images/cms2.png',
          'assets/project-images/cms3.png',
        ]
      }
    }
  ];

  filteredProjects: Project[] = [];
  selectedCategory: string = 'all';
  categories: string[] = ['Angular', 'PHP & MySQL', 'Angular & SpringBoot'];

  ngOnInit() {
    this.filteredProjects = this.projects;
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
    this.filteredProjects = category === 'all'
      ? this.projects
      : this.projects.filter(p => p.category === category);
  }

  extractAndCombine(path: string, personName: string): string {
    if (!path) throw new Error('Path cannot be empty');
    if (!personName) throw new Error('Person name cannot be empty');

    const fileName = path.split('/').pop();
    if (!fileName) throw new Error('Invalid path format');

    const fileNameWithoutExtension = fileName.split('.').slice(0, -1).join('.');
    return `${personName} : ${fileNameWithoutExtension}`;
  }
}