export enum Page {
  home = 'home',
  work = 'work',
  about = 'about',
  music = 'music',
}

export const pages = [Page.home, Page.work, Page.about, Page.music];

export const works = [
  {
    where: 'EatClub',
    link: 'https://eatclub.com.au/',
    role: 'Frontend Developer',
    when: 'Dec 2021 - Present',
    what: `At EatClub I am currently working on a bookings tool and widget which allows restaurants to edit and make bookings, as well as visualise floorplans within their restaurants. 
    
    I also work on email templates and internal tools for the company, and a partner portal for the venues to access their analytics and create sales targets to enhance growth in their business.
    
    I also developed a single sign-on authenticator for internal use within the company, which allows staff to access a number of internal tools I've developed.`,
  },
  {
    where: 'Allscripts',
    link: 'https://www.allscripts.com/',
    role: 'Software Engineer',
    when: 'Nov 2020 - Dec 2021',
    what: `At Allscripts I worked on a medical application that would allow medical staff to view and edit patient records. 
    
    In this position I worked as a Full Stack dev primarily using C# and SQL, working with database queries and complex data handling in the back end. Confidentiality was also an important part of my role as we were handling private patient information (Medibank is trash).
    
    During this role I also took on a leadership role and was supervising and guiding the creation of a native version of the web application.`,
  },
  {
    where: 'Brighter Futures Group',
    link: 'https://brighterfuturesgroup.com.au/',
    role: 'JavaScript Developer',
    when: 'Jun 2020 - Feb 2021',
    what: `Brighter Futures Group was part time remote work where I created a mathematical equation application to help tutor students. 
    
    Built using React, the application would format complex equations uniformly, and students could also sign in and complete math problems online.`,
  },
  {
    where: 'Petal Design',
    link: 'https://github.com/timkinsman/petal-design',
    role: 'Creator',
    when: 'Jan 2022 - Present',
    what: `Petal Design is a current labour of love where I have created a UI library for my own personal and freelance works, taking inspiration from Ant Design and Material UI. Using Petal throughout my projects has streamlined my processes and made them more cohesive.
    
Here's a project I've created using Petal.`,
  },
  {
    where: 'Freelancing',
    // eslint-disable-next-line quotes
    link: "mailto:tkinsm@gmail.com?subject:Let's discuss freelancing!",
    role: 'React Developer',
    when: 'Nov 2020 - Present',
    what: 'In my spare time I like to broaden my skills and also work on freelance works. I have primarily created portfolio websites that involved devloping from the ground up advanced widgets and complex user experience. ',
  },
];
