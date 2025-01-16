import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faCheck, faExternalLink, faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Aos from 'aos';

@Component({
  selector: 'app-single-project-showcase',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './single-project-showcase.component.html',
  styleUrl: './single-project-showcase.component.css'
})
export class SingleProjectShowcaseComponent implements OnInit {
  project!: Project;

  faEyeIcon = faEye;
  faExternalLinkIcon = faExternalLink;
  faGithubIcon = faGithub;
  faArrowLeftIcon = faArrowLeft;
  faCheckIcon = faCheck;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onBack() {
    this.router.navigate(['/portfolio']);
  }

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

  ngOnInit() {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });

    const id = this.route.snapshot.params['id'];
    this.project = this.projects.find(project => project.id === id) || {} as Project;
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
  