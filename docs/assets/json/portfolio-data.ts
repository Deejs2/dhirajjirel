export const portfolioData = {
    home: {
        name: 'Dhiraj Jirel',
        title: 'Web Developer',
        description: [
            'I am a web developer. I have experience in developing web applications using Angular, SpringBoot & PostgreSQL.',
            'I am passionate about learning new technologies and building web applications.'
        ],
        image: 'assets/dhirajjirel.png'
    },
    about: {
        summary: `Web Developer with more than a year of experience in Angular and Spring Boot development. Skilled in building responsive web applications with a focus on frontend design and backend development. Strong team collaborator dedicated to delivering scalable and user-friendly solutions.`,
        location: 'Kumarigal, Boudha, Kathmandu, 44600',
        email: 'jireldhiraj123@gmail.com',
        phone: '+977 9869550743',
        website: 'https://www.dhirajjirel.com.np',
        social: {
            github: 'https://github.com/Deejs2',
            linkedin: 'https://www.linkedin.com/in/dhiraj-j',
            twitter: 'https://x.com/dhiraj_np',
            instagram: 'https://www.instagram.com/dhiraj07j'
        },
        skills: {
            frontend: ['Angular', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            backend: ['Spring Boot', 'Java', 'REST APIs', 'PHP'],
            databases: ['MySQL', 'PostgreSQL'],
            tools: ['Git', 'Postman', 'Swagger', 'Android Development (Beginner)']
        }
    },
    resume: {
        highlights: [
            'Frontend Development (Angular, HTML, CSS, JavaScript, Bootstrap)',
            'Backend Development (Spring Boot, REST APIs, Java, PHP)',
            'Database Management (MySQL, PostgreSQL)',
            'Responsive Web Design',
            'Version Control (Git, GitHub, GitLab)'
        ],
        experience: [
            {
                title: 'Software Developer Intern',
                company: 'Aadim Innovation, Chabahil, Kathmandu',
                duration: 'December 2023 - 2025',
                details: [
                    'Developed and maintained full-stack web applications using Angular and Spring Boot',
                    'Designed and implemented RESTful APIs and database schemas based on project requirements',
                    'Integrated frontend components with backend services, ensuring seamless data flow',
                    'Collaborated with development team to deliver high-quality software solutions',
                    'Wrote clean, well-documented code following best practices and coding standards'
                ]
            },
            {
                title: 'PHP Developer Intern',
                company: '',
                duration: 'August 2023 - September 2023',
                details: [
                    'Developed CRUD applications using Symfony framework and PHP',
                    'Implemented database solutions using MySQL for web applications',
                    'Gained hands-on experience in modern PHP development practices'
                ]
            }
        ],
        education: {
            degree: 'Bachelor of Computer Application',
            college: 'Aadim National College, Chabahil, Kathmandu',
            semester: 'Current Semester: 6th'
        }
    },
    projects: [
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
            id: "kj3h53",
            title: 'College Hub Nepal',
            description: 'A platform to connect students with colleges in Nepal, providing information on courses, admissions, and more.',
            image: 'assets/project-images/college-hub-cover.png',
            category: 'Angular & SpringBoot',
            technologies: ['Angular', 'SpringBoot', 'PostgreSQL', 'Angular Material'],
            demoUrl: 'https://collegehubnepal.com/',
            githubUrl: 'https://github.com',
            details: {
                challenge: 'Creating a scalable and secure College Hub platform with real-time information on courses and admissions.',
                solution: 'Implemented layered architecture with separate services for colleges, courses, and admissions.',
                features: [
                    'User authentication and authorization',
                    'College and course management',
                    'Admission process management',
                    'Search and filter options for courses',
                    'Real-time notifications for students',
                    'User-friendly interface for easy navigation',
                    'Responsive design for mobile and desktop users'
                ],
                screenshots: [
                    'assets/project-images/college-hub-cover.png',
                    'assets/project-images/collegehub-s1.png',
                    'assets/project-images/collegehub-s2.png',
                    'assets/project-images/collegehub-s3.png'
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
    ],
    team: [
        {
            teamName: 'BROGRAMMERS',
            members: [
                {
                    name: 'Utsab Dahal',
                    description: 'BCA student passionate about building reliable, scalable backend systems. I specialize in Java and Spring Boot, with hands-on experience in developing REST APIs, implementing security protocols, and managing database integrations. Currently exploring microservices architecture, containerization with Docker, and event-driven systems using Kafka and Redis. I contribute to team-based projects and have experience working on real-world solutions that solve practical problems.',
                    role: 'Backend Web Developer',
                    image: 'assets/utsab-dahal.jpg',
                    skills: ['PHP', 'PostgreSQL', 'SpringBoot', 'Angular'],
                    socialLinks: {
                        linkedin: 'https://www.linkedin.com/in/utsabdahal',
                        github: 'https://github.com/dahalutsab',
                        website: 'https://www.dahalutsab.com.np'
                    }
                },
                {
                    name: 'Pasang Gelbu Sherpa',
                    description: 'BCA student with a passion for backend development. I specialize in building robust and scalable applications using Java and Spring Boot. My expertise includes developing RESTful APIs, implementing security measures, and managing database systems. I am currently exploring microservices architecture, containerization with Docker, and event-driven systems using Kafka and Redis. I thrive in collaborative environments and enjoy solving complex problems through innovative solutions.',
                    role: 'Backend Web Developer',
                    image: 'assets/pasang-gelbu-sherpa.jpg',
                    skills: ['PHP', 'PostgreSQL', 'SpringBoot', 'Angular'],
                    socialLinks: {
                        linkedin: 'https://www.linkedin.com',
                        github: 'https://github.com/Pasang60',
                        website: 'https://www.pasanggelbusherpa.com.np'
                    }
                },
                {
                    name: 'Chitra Prasad Acharaya',
                    description: 'BCA student with a strong focus on frontend development. I have a passion for creating visually appealing and user-friendly web applications using HTML, CSS, Bootstrap, and Angular. My skills include responsive design, cross-browser compatibility, and performance optimization. I am currently exploring advanced frontend frameworks and libraries to enhance my development capabilities. I enjoy collaborating with teams to deliver high-quality software solutions.',
                    role: 'Frontend Web Developer',
                    image: 'assets/chitra.jpg',
                    skills: ['HTML', 'CSS', 'Bootstrap', 'Angular'],
                    socialLinks: {
                        linkedin: 'https://www.linkedin.com/in/chitra-prasad-acharya-778484281',
                        github: 'https://github.com/Chitra79',
                        website: 'https://www.chitraprasadacharya.com.np'
                    }
                },
                {
                    name: 'Dhiraj Jirel',
                    description: 'BCA student with a passion for web development. I specialize in building responsive and user-friendly web applications using Angular, Spring Boot, and PostgreSQL. My skills include frontend design, backend development, and database management. I am currently exploring advanced web technologies and frameworks to enhance my development capabilities. I enjoy collaborating with teams to deliver high-quality software solutions.',
                    role: 'Full Stack Web Developer',
                    image: 'assets/dhirajjirel.png',
                    skills: ['Angular', 'SpringBoot', 'PostgreSQL', 'Bootstrap'],
                    socialLinks: {
                        linkedin: 'https://www.linkedin.com/in/dhiraj-j',
                        github: 'https://github.com/Deejs2',
                        website: 'https://www.dhirajjirel.com.np'
                    }
                }
            ],
            achievements: [
                {
                    title: 'Social Impact Award',
                    year: 2025,
                    description: 'Achieved Social Impact Award in a national-level hackathon organized by Ambition College.'
                },
                {
                    title: '1st Runner Up in Hackathon',
                    year: 2025,
                    description: 'Achieved 1st Runner Up position in a college hackathon event organized by Aadim National College.'
                }
            ],
            description: 'BROGRAMMERS is a team of BCA students from Aadim National College, Chabahil, Kathmandu. We are passionate about web development and have expertise in both frontend and backend technologies. Our team is dedicated to building innovative solutions that make a positive impact on society.'
        }
    ]
};