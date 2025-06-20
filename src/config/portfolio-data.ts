// Portfolio Configuration File
// Update this file to easily change projects, certifications, and personal information

export const personalInfo = {
  name: "Abhishek Gupta",
  title: "Computer Science Student & Developer",
  subtitle: "B.Tech CSE Student",
  year: "2nd Year",
  tagline: "Building innovative solutions through code and creativity",
  
  // Contact Information
  contact: {
    email: "abhishekg8318@gmail.com",
    website: "abhiishekk.vercel.app",
    location: "India",
    phone: "+91 902654 XXXX", // Optional
  },
  
  // Social Links
  social: {
    github: "https://github.com/wiz-abhi",
    linkedin: "https://www.linkedin.com/in/abhishek-gupta-4b03b9276",
    twitter: "https://twitter.com/wiz-abhi", // Optional
    instagram: "https://instagram.com/abhi.at_insta", // Optional
  },
  
  // About Section
  about: {
    introduction: "A passionate B.Tech Computer Science student in my 2nd year, dedicated to learning and building innovative solutions through code.",
    description: "I'm currently pursuing my Bachelor's in Computer Science Engineering, where I'm developing strong foundations in programming, data structures, algorithms, and software development. I love working on projects that challenge me to learn new technologies and solve real-world problems.",
    interests: "When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, or participating in coding competitions. I believe in continuous learning and staying updated with the latest trends in technology.",
    
    // Academic Info
    academic: {
      degree: "B.Tech CSE Student",
      year: "2nd Year",
      duration: "2023 — 2027",
      institution: "Galgotias College of Engg and Technology", // Update with your college name
      status: "Active Learner"
    },
    
    // Core Technologies (shown as badges)
    coreSkills: [
      "JavaScript", "React", "Node.js", "Python", 
      "Java", "HTML/CSS", "Git", "MongoDB", "Express.js"
    ]
  },
  
  // Status
  status: {
    available: true,
    message: "Open to opportunities"
  }
};

// Projects Configuration
export const projects = [
  {
    // Project 1 - Update with your actual project
    title: "E-Commerce Web App",
    subtitle: "Full-Stack Shopping Platform",
    description: "A modern e-commerce platform built with React and Node.js, featuring user authentication, product catalog, shopping cart, and payment integration. Includes admin dashboard for inventory management.",
    
    // Key Features
    features: [
      "User authentication and authorization system",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment integration with Stripe",
      "Admin dashboard for product management",
      "Responsive design for all devices",
      "Order tracking and history",
      "Email notifications for orders"
    ],
    
    // What you built/delivered
    deliverables: [
      "Fully functional e-commerce website",
      "User registration and login system",
      "Product management system",
      "Shopping cart and checkout process",
      "Payment gateway integration",
      "Admin panel for inventory control",
      "Mobile-responsive interface",
      "Order management system"
    ],
    
    // Technologies used
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Tailwind CSS", "Axios"],
    
    // Links
    github: "https://github.com/abhishekgupta/ecommerce-app",
    live: "https://ecommerce-demo.netlify.app",
    
    // Visual styling
    gradient: "from-blue-500 to-cyan-500",
    
    // Project metadata
    status: "Live", // "Live", "In Progress", "Completed"
    category: "Web Application",
    highlight: "Featured", // "Featured" or remove this line
    timeline: "3 months",
    clientType: "Personal Project" // "Personal Project", "Academic Project", "Client Work"
  },
  
  {
    // Project 2 - Update with your actual project
    title: "Task Management System",
    subtitle: "Productivity & Collaboration Tool",
    description: "A comprehensive task management application with real-time collaboration features, built using React and Firebase. Includes project organization, team collaboration, and progress tracking.",
    
    features: [
      "Real-time task creation and updates",
      "Project organization with boards and lists",
      "Team collaboration and task assignment",
      "Due date reminders and notifications",
      "Progress tracking with visual charts",
      "File attachments and comments",
      "User roles and permissions",
      "Dark/light theme toggle"
    ],
    
    deliverables: [
      "Task management web application",
      "Real-time collaboration system",
      "Project dashboard with analytics",
      "User authentication system",
      "Notification system",
      "File upload functionality",
      "Responsive design implementation",
      "Team management features"
    ],
    
    tech: ["React", "Firebase", "Material-UI", "React Router", "Context API", "Firebase Auth", "Firestore", "React Charts"],
    
    github: "https://github.com/abhishekgupta/task-manager",
    live: "https://taskmanager-demo.netlify.app",
    
    gradient: "from-purple-500 to-pink-500",
    status: "Live",
    category: "Web Application",
    highlight: "Featured",
    timeline: "2 months",
    clientType: "Academic Project"
  },
  
  {
    // Project 3 - Add your third project
    title: "Weather Dashboard",
    subtitle: "Real-time Weather Information App",
    description: "A beautiful weather application that provides current weather conditions, forecasts, and weather maps. Built with vanilla JavaScript and integrates with multiple weather APIs for accurate data.",
    
    features: [
      "Current weather conditions display",
      "5-day weather forecast",
      "Location-based weather detection",
      "Search functionality for any city",
      "Interactive weather maps",
      "Weather alerts and warnings",
      "Historical weather data",
      "Beautiful animated weather icons"
    ],
    
    deliverables: [
      "Weather information web application",
      "Current conditions dashboard",
      "Weather forecast display",
      "Location search functionality",
      "Weather maps integration",
      "Responsive mobile interface",
      "Weather data visualization",
      "User preferences system"
    ],
    
    tech: ["JavaScript", "HTML5", "CSS3", "Weather API", "Chart.js", "Geolocation API", "Local Storage", "Responsive Design"],
    
    github: "https://github.com/abhishekgupta/weather-dashboard",
    live: "https://weather-dashboard-demo.netlify.app",
    
    gradient: "from-green-500 to-blue-500",
    status: "Live",
    category: "Web Application",
    timeline: "1 month",
    clientType: "Learning Project"
  }
  
  // Add more projects here following the same structure
];

// Certifications Configuration
export const certifications = [
  {
    title: "JavaScript Algorithms and Data Structures",
    provider: "freeCodeCamp",
    platform: "freeCodeCamp",
    issued: "December 2023",
    credentialId: "your-credential-id",
    skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
    providerIcon: "simple-icons:freecodecamp",
    platformIcon: "simple-icons:freecodecamp",
    color: "from-green-500 to-green-600",
    certificatePreview: "/certificates/javascript-cert.png", // Add your certificate image
    providerIconSize: 64,
    platformIconSize: 64
  },
  
  {
    title: "Responsive Web Design",
    provider: "freeCodeCamp",
    platform: "freeCodeCamp",
    issued: "November 2023",
    credentialId: "your-credential-id-2",
    skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "CSS Grid"],
    providerIcon: "simple-icons:freecodecamp",
    platformIcon: "simple-icons:freecodecamp",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/responsive-web-cert.png",
    providerIconSize: 64,
    platformIconSize: 64
  },
  
  {
    title: "React - The Complete Guide",
    provider: "Udemy",
    platform: "Udemy",
    issued: "January 2024",
    credentialId: "UC-your-credential-id",
    skills: ["React", "Redux", "React Router", "Hooks", "Context API"],
    providerIcon: "simple-icons:udemy",
    platformIcon: "simple-icons:udemy",
    color: "from-purple-500 to-purple-600",
    certificatePreview: "/certificates/react-cert.png",
    providerIconSize: 64,
    platformIconSize: 64
  },
  
  {
    title: "Node.js, Express, MongoDB & More",
    provider: "Udemy",
    platform: "Udemy",
    issued: "February 2024",
    credentialId: "UC-your-credential-id-2",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Authentication"],
    providerIcon: "simple-icons:udemy",
    platformIcon: "simple-icons:udemy",
    color: "from-green-500 to-green-600",
    certificatePreview: "/certificates/nodejs-cert.png",
    providerIconSize: 64,
    platformIconSize: 64
  },
  
  {
    title: "Git & GitHub Complete Guide",
    provider: "Coursera",
    platform: "Coursera",
    issued: "March 2024",
    credentialId: "your-coursera-id",
    skills: ["Git", "GitHub", "Version Control", "Collaboration", "Open Source"],
    providerIcon: "logos:coursera",
    platformIcon: "logos:coursera",
    color: "from-blue-500 to-indigo-600",
    certificatePreview: "/certificates/git-cert.png",
    providerIconSize: 64,
    platformIconSize: 64
  }
  
  // Add more certifications here following the same structure
];

// Technology Stack Configuration
export const techStack = {
  "Frontend": [
    {
      name: "React",
      icon: "skill-icons:react-dark",
      level: "Intermediate" as const,
      category: "Frontend",
      description: "Building modern, interactive user interfaces",
      yearsUsed: 2
    },
    {
      name: "JavaScript",
      icon: "devicon:javascript",
      level: "Intermediate" as const,
      category: "Frontend",
      description: "Core language for web development",
      yearsUsed: 2
    },
    {
      name: "HTML5",
      icon: "devicon:html5",
      level: "Expert" as const,
      category: "Frontend",
      description: "Semantic markup and modern web standards",
      yearsUsed: 3
    },
    {
      name: "CSS3",
      icon: "devicon:css3",
      level: "Expert" as const,
      category: "Frontend",
      description: "Styling and responsive design",
      yearsUsed: 3
    },
    {
      name: "Tailwind CSS",
      icon: "logos:tailwindcss-icon",
      level: "Intermediate" as const,
      category: "Frontend",
      description: "Utility-first CSS framework for rapid UI development",
      yearsUsed: 1
    },
    {
      name: "TypeScript",
      icon: "devicon:typescript",
      level: "Beginner" as const,
      category: "Frontend",
      description: "Type-safe JavaScript for scalable applications",
      yearsUsed: 1
    }
  ],
  
  "Backend": [
    {
      name: "Node.js",
      icon: "devicon:nodejs",
      level: "Intermediate" as const,
      category: "Backend",
      description: "JavaScript runtime for server-side applications",
      yearsUsed: 2
    },
    {
      name: "Express",
      icon: "skill-icons:expressjs-dark",
      level: "Intermediate" as const,
      category: "Backend",
      description: "Fast, minimalist web framework for Node.js",
      yearsUsed: 1
    },
    {
      name: "Python",
      icon: "devicon:python",
      level: "Intermediate" as const,
      category: "Backend",
      description: "Versatile language for backend and data science",
      yearsUsed: 2
    },
    {
      name: "Java",
      icon: "devicon:java",
      level: "Intermediate" as const,
      category: "Backend",
      description: "Object-oriented programming and enterprise applications",
      yearsUsed: 2
    }
  ],
  
  "Database": [
    {
      name: "MongoDB",
      icon: "devicon:mongodb",
      level: "Intermediate" as const,
      category: "Database",
      description: "NoSQL document database",
      yearsUsed: 1
    },
    {
      name: "MySQL",
      icon: "logos:mysql",
      level: "Beginner" as const,
      category: "Database",
      description: "Popular open-source relational database",
      yearsUsed: 1
    },
    {
      name: "Firebase",
      icon: "vscode-icons:file-type-firebase",
      level: "Intermediate" as const,
      category: "Database",
      description: "Google's app development platform",
      yearsUsed: 1
    }
  ],
  
  "Tools & Others": [
    {
      name: "Git",
      icon: "devicon:git",
      level: "Intermediate" as const,
      category: "Tools & Others",
      description: "Version control system",
      yearsUsed: 2
    },
    {
      name: "GitHub",
      icon: "skill-icons:github-dark",
      level: "Intermediate" as const,
      category: "Tools & Others",
      description: "Code hosting and collaboration platform",
      yearsUsed: 2
    },
    {
      name: "VS Code",
      icon: "devicon:vscode",
      level: "Expert" as const,
      category: "Tools & Others",
      description: "Code editor and development environment",
      yearsUsed: 3
    },
    {
      name: "Figma",
      icon: "devicon:figma",
      level: "Beginner" as const,
      category: "Tools & Others",
      description: "UI/UX design and prototyping tool",
      yearsUsed: 1
    }
  ]
};

// Experience Configuration
export const experience = [
  {
    role: "Computer Science(AI) Student",
    company: "Galgotias College of Engg and Technology", // Update with your college name
    period: "September 2023 — Present",
    type: "Academic",
    companyIcon: "solar:book-bold",
    companyColor: "from-blue-500 to-blue-600",
    description: "Pursuing Bachelor of Technology in Computer Science Engineering with focus on software development, data structures, algorithms, and modern programming paradigms.",
    achievements: [
      "Maintaining excellent academic performance with consistent high grades",
      "Actively participating in coding competitions and hackathons",
      "Leading study groups and peer programming sessions",
      "Contributing to college tech events and workshops"
    ],
    technologies: ["Java", "Python", "C++", "Data Structures", "Algorithms", "Object-Oriented Programming", "Database Management"]
  },
  
  {
    role: "Web Development Enthusiast",
    company: "Self-Learning & Projects",
    period: "January 2022 — Present",
    type: "Self-taught",
    companyColor: "from-green-500 to-green-600",
    companyIcon: "solar:code-bold",
    description: "Self-taught web developer passionate about creating modern, responsive web applications using cutting-edge technologies and best practices.",
    achievements: [
      "Built 10+ personal projects showcasing various web technologies",
      "Learned and implemented modern JavaScript frameworks",
      "Developed full-stack applications with database integration",
      "Contributed to open-source projects on GitHub"
    ],
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "HTML5", "CSS3", "Git", "Responsive Design"]
  }
];

// Testimonials Configuration (if you have any)
export const testimonials = [
  // Add testimonials here if you have any
  // {
  //   content: "Your testimonial content here...",
  //   author: "Client Name",
  //   role: "Position",
  //   company: "Company Name",
  //   rating: 5,
  //   project: "Project Name",
  //   avatar: "CN",
  //   featured: true
  // }
];
