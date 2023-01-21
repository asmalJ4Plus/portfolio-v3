export enum Page {
  home = 'home',
  work = 'work',
  about = 'about',
  music = 'music',
}

export const pages = [Page.home, Page.work, Page.about, Page.music];

/**
 * Used in `Work.tsx`
 */
export const works = [
  {
    where: 'EatClub',
    link: 'https://eatclub.com.au/',
    role: 'Frontend Developer',
    when: 'Dec 2021 - Present',
    what: `Currently, I work at EatClub as a full-time front end React developer, where I have the opportunity to work on a variety of projects that are essential for the company's operations.
    
    One of my main responsibilities is working on a bookings widget and back of house bookings tool, which are used by customers and employees to make reservations. I also work on various other internal applications that are used by the company.
    
    This job has been a great experience for me as it allows me to use my skills in React and work with a great team of developers and other professionals. I look forward to continuing to work on exciting projects and grow my skills at EatClub`,
  },
  {
    where: 'Allscripts',
    link: 'https://www.allscripts.com/',
    role: 'Software Engineer',
    when: 'Nov 2020 - Dec 2021',
    what: `As a full-time Software Engineer at Allscripts, a hospital IT company, I had the opportunity to work on a patient record application for 1 year and 2 months.
    
    This was my first full-time position and I was excited to be part of such an important project. The application was built using C#, VB.NET, JavaScript and T-SQL, and I was able to learn and grow my skills in these languages. I was part of a great team, and I had the opportunity to work with some really talented developers.
    
    I look back on my time at Allscripts fondly, and I am proud of the work we did on the patient record application. It was a great experience that helped shape me as a developer.`,
  },
  {
    where: 'Brighter Futures Group',
    link: 'https://brighterfuturesgroup.com.au/',
    role: 'JavaScript Developer',
    when: 'Jun 2020 - Feb 2021',
    what: `As a part-time remote React developer for Brighter Futures Group, I had the opportunity to work on an exciting project for 9 months. I was tasked with creating a mathematical equation application to help tutor students.
    
    This was my first React developer position and I was thrilled to put my skills to use in a real-world setting. I was able to utilize my knowledge of the framework to create a user-friendly and functional tool for students. It was a valuable experience for me, and I learned a lot from my time at Brighter Futures Group. I am proud of the application and how it helps students in their studies.`,
  },
  {
    where: 'Petal Design',
    link: 'https://github.com/timkinsman/petal-design',
    role: 'Creator',
    when: 'Jan 2022 - Present',
    what: (
      <>
        {`As an experienced React web developer, I've created a powerful and growing design system called Petal Design. This system is used in all my personal React projects, including this portfolio!
        
        The system is inspired by popular design systems such as Ant Design and Material-UI, and has been tailored to my specific needs and preferences. Petal Design allows for faster and more efficient development, as well as a consistent look and feel across all projects.
        
        Check it out here, `}
        <a href='https://github.com/timkinsman/petal-design' target='_blank' rel='noreferrer'>
          https://github.com/timkinsman/petal-design
        </a>
        .
      </>
    ),
  },
  {
    where: 'Freelancing',
    // eslint-disable-next-line quotes
    link: "mailto:tkinsm@gmail.com?subject:Let's discuss freelancing!",
    role: 'React Developer',
    when: 'Nov 2020 - Present',
    what: `As a freelance React web developer, I specialize in creating visually appealing and user-friendly portfolio websites that are responsive and works well on all devices. With a keen eye for design and an in-depth understanding of the React framework, I'm able to bring clients' visions to life and help them stand out in their field.
    
    I'm dedicated to staying up to date with the latest web development trends and technologies, ensuring that their clients' websites are always on the cutting edge.`,
  },
];

/**
 * Used in `About.tsx`
 */
export const about = `I'm Tim Kinsman, an experienced React front-end developer from Adelaide, Australia. With ${
  new Date().getFullYear() - 2020
} years of experience in the industry, I have a strong background in developing high-performing and visually appealing web applications using the latest technologies.

In my spare time, I indulge in my passion for music by playing instruments, coding and watching/playing video games.`;

/**
 * Used in `Music.tsx`
 */
export const music = `I attempt to be a multi-instrumentalist, proficient in guitar, bass, and drums. I picked up the guitar at the age of 12, inspired by Guitar Hero 3. From there, my passion for music grew, leading me to branch out and learn other instruments such as bass and drums.

Writing music is a love of mine and my favourite artist, Baths/Geotic, has been a huge inspiration in my creativity. I am also a dedicated member of a band, where I play bass, and I'm always striving to improve my skills.`;
