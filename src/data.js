import intro from './assets/webdev.png'

export const courses = [
  {
    title: "Introduction To Web Development",
    desc: "This course provides a foundational understanding of web development. By the end of the program, students will be able to build and deploy functional web pages using core front-end technologies.",
    image: intro,
    level:"Beginner",
    Duration: "4 weeks",
    lessons:'12',
    tutor:"Mr Gerald",
    teckStack: ['Html', "Css", 'JavaScript'],
    curriculum: [
       {
        week: 'Week 1: HTML Fundamentals',
        sessions: [
          { title: 'Introduction to HTML & Basic Structure', day: 'Mon', time: '10am–12pm' },
          { title: 'Forms, Inputs, and Semantic Tags', day: 'Wed', time: '10am–12pm' },
          { title: 'Building a Basic HTML Page', day: 'Fri', time: '10am–12pm' },
        ],
      },
      {
        week: 'Week 2: CSS Styling',
        sessions: [
          { title: 'Selectors, Colours, and Typography', day: 'Mon', time: '10am–12pm' },
          { title: 'Box Model, Flexbox, and Grid', day: 'Wed', time: '10am–12pm' },
          { title: 'Responsive Design Techniques', day: 'Fri', time: '10am–12pm' },
        ],
      },
      {
        week: 'Week 3: JavaScript Basics',
        sessions: [
          { title: 'Variables, Data Types, and Operators', day: 'Mon', time: '10am–12pm' },
          { title: 'Functions and Conditional Statements', day: 'Wed', time: '10am–12pm' },
          { title: 'DOM Manipulation and Events', day: 'Fri', time: '10am–12pm' },
        ],
      },
      {
        week: 'Week 4: Mini Project & Deployment',
        sessions: [
          { title: 'Build a Personal Portfolio Website', day: 'Mon', time: '10am–12pm' },
          { title: 'Review and Polish Your Project', day: 'Wed', time: '10am–12pm' },
          { title: 'Deploying Your Website with GitHub Pages', day: 'Fri', time: '10am–12pm' },
        ],
      },
    ]
  },


]