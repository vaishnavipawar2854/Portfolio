export const portfolioData = {
  name: 'Vaishnavi Sunil Pawar',
  role: 'Frontend Developer',
  tagline: 'Building responsive, modern web experiences with React & Tailwind CSS',
  summary: [
    'Frontend Developer with hands-on experience in building responsive web applications using React, JavaScript, and Tailwind CSS.',
    'Skilled in creating clean UI, integrating APIs, and deploying applications on Vercel and AWS S3.',
    'Passionate about learning modern frontend technologies.',
  ],
  contact: {
    email: 'vaishnavipawar28504@gmail.com',
    phone: '7744022870',
    location: 'Karad, Satara',
    linkedin: 'https://www.linkedin.com/in/vaishnavi-pawar-922416292/',
    github: 'https://github.com/vaishnavipawar2854',
  },
  avatar: '/images/avatar.png',
  sections: ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'],
}

export const skills = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  styling: ['Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  database: ['MongoDB', 'MySQL'],
  tools: ['Figma', 'Git', 'GitHub', 'npm', 'Vercel / Netlify', 'AWS S3'],
  soft: ['Teamwork', 'Problem Solving', 'Adaptability', 'Willingness to Learn', 'Hardworking'],
}

export const skillLevels = {
  'HTML5': 92,
  'CSS3': 90,
  'JavaScript': 88,
  'React.js': 90,
  'Tailwind CSS': 92,
  'Bootstrap': 85,
  'MongoDB': 75,
  'MySQL': 78,
  'Git': 85,
  'Figma': 80,
}

export const projects = [
  {
    id: 'weatherwise',
    title: 'WeatherWise',
    description: 'Intelligent weather app with real-time forecasts, location search, unit toggle, and dark mode. Your weather companion for accurate data and 5-day planning.',
    features: [
      'Real-time weather via OpenWeatherMap API',
      'Search by city & location-based detection',
      '5-day forecast, Celsius/Fahrenheit toggle',
      'Dark mode & mobile-responsive layout',
    ],
    tech: ['React', 'Vite', 'OpenWeatherMap API', 'Tailwind CSS'],
    tags: ['React', 'API', 'Dark Mode', 'Responsive'],
    links: {
      live: 'https://weather-wise-snowy-one.vercel.app',
      github: 'https://github.com/vaishnavipawar2854/weather-wise',
    },
    image: '/images/weatherwise.png',
  },
  {
    id: 'daily-planner',
    title: 'Daily Planner To-Do List',
    description: 'Plan today, achieve tomorrow. Track tasks, priorities, and completion rate in one place. Add tasks, set priorities, and stay on top of your day.',
    features: [
      'Add tasks with priority (Low / Medium / High)',
      'Total, completed & pending counts & completion rate %',
      'Pending vs completed task lists',
      'Clean, card-based layout',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'localStorage'],
    tags: ['React', 'Todo', 'Productivity', 'Responsive'],
    links: {
      live: 'https://daily-planner-to-do-list.vercel.app',
      github: 'https://github.com/vaishnavipawar2854/daily-planner-to-do-list',
    },
    image: '/images/daily-planner.png',
  },
  {
    id: 'growth-intelligence',
    title: 'Growth Intelligence',
    description: 'Audience growth tool—describe your target audience in natural language to get simulated engagement, momentum, and placement recommendations across major channels.',
    features: [
      'Natural-language audience input',
      'Simulated engagement & momentum',
      'Channel placement recommendations',
      'Persona-based targeting',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    tags: ['JavaScript', 'HTML', 'CSS', 'Growth', 'UX'],
    links: {
      live: 'https://growth-intelligence.vercel.app',
      github: 'https://github.com/vaishnavipawar2854/growth-intelligence',
    },
    image: '/images/growth-intelligence.png',
  },
  {
    id: 'calify',
    title: 'Calify',
    description: 'Bright calculations, smart results. A minimal, responsive calculator with a clean interface—basic arithmetic, clear, and delete.',
    features: [
      'Basic operations: +, −, ×, ÷',
      'Decimal support, Clear (C) & Delete (DEL)',
      'Numeric keypad (0–9)',
      'Simple, focused UI',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS'],
    tags: ['React', 'UI', 'Calculator', 'Responsive'],
    links: {
      live: 'https://calify-five.vercel.app',
      github: 'https://github.com/vaishnavipawar2854/calify',
    },
    image: '/images/calify.png',
  },
  {
    id: 'virallens',
    title: 'ViralLens',
    description: 'AI-powered social media trend dashboard. See what\'s going viral before everyone else—real-time insights across Instagram, X, YouTube, and Google Trends with live analytics and predictions.',
    features: [
      'Multi-platform view (Instagram, X, YouTube, Google Trends)',
      'Trending Now with growth metrics & live analytics',
      'Topic popularity over time & AI insights',
      'Predictions & upcoming trends with time estimates',
    ],
    tech: ['React', 'Charts', 'Tailwind CSS'],
    tags: ['React', 'Data Visualization', 'AI', 'Analytics'],
    links: {
      live: 'https://virallens-frontend-2.onrender.com',
      github: 'https://github.com/vaishnavipawar2854/virallens',
    },
    image: '/images/virallens.png',
  },
  {
    id: 'cherish-india',
    title: 'Cherish India E-Store',
    description: 'India-focused e-commerce platform with product catalog, cart, and checkout for a smooth shopping experience. Built with vanilla HTML, CSS, and JavaScript.',
    features: [
      'Product catalog & detail views',
      'Cart & checkout flow',
      'India-focused product offering',
      'Responsive storefront',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    tags: ['HTML', 'CSS', 'JavaScript', 'E-commerce', 'Responsive'],
    links: {
      live: 'https://cherish-india-e-store.onrender.com',
      github: 'https://github.com/vaishnavipawar2854/cherish-india-e-store',
    },
    image: '/images/cherish-india.png',
  },
]

export const education = [
  { degree: 'Master of Computer Application', institution: 'MET Institute of Management', location: 'Nashik, India', period: '2024 - Present' },
  { degree: 'Bachelor of Computer Application', institution: 'Sadguru Gadge Maharaj College', location: 'Karad, Satara', period: '2024', cgpa: '8.35' },
  { degree: 'HSC', institution: 'Sadguru Gadge Maharaj College', location: 'Karad', period: '2021', marks: '77.33%' },
  { degree: 'SSC', institution: 'Aanadaroa Chavan Vidyalaya Malkapur', location: 'Karad, Satara', period: '2019', marks: '75.20%' },
]

export const achievements = {
  publications: [
    { title: 'Implementation of a Smart Web-Based Platform for Tech-Driven Food Redistribution', journal: 'International Research Journal of Engineering and Technology (IRJET)', date: '10/2025' },
  ],
  awards: [
    'Achieved 1st Rank in MCA First Year academic performance',
    'Secured 1st Rank in College Outbound Event',
    'Won 1st Rank in Ideathon 2024',
  ],
  certifications: [
    'AWS Essentials: A complete beginner\'s guide - Udemy',
    'Cloud Computing Management and Security - Softcroud Technology',
    'Full stack Java development course - Symbiosis',
    'One Day National Conference on Computer Science and Technology - Recent Trends',
  ],
}

export const activities = [
  'Survey for NourishNow research project for collecting real-time data',
  'Role play as Volunteer in placement drive',
  'Prepared summaries for multiple college guest sessions',
]

export const languages = ['English', 'Hindi', 'Marathi']
