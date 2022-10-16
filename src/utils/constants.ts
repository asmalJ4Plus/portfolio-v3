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
    what: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
  {
    where: 'Allscripts',
    link: 'https://www.allscripts.com/',
    role: 'Software Engineer',
    when: 'Nov 2020 - Dec 2021',
    what: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    where: 'Brighter Futures Group',
    link: 'https://brighterfuturesgroup.com.au/',
    role: 'JavaScript Developer',
    when: 'Jun 2020 - Feb 2021',
    what: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  },
  {
    where: 'Petal Design',
    link: 'https://github.com/timkinsman/petal-design',
    role: 'Creator',
    when: 'Jan 2022 - Present',
    what: `Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
    
    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
    
    Check it out here!`,
  },
  {
    where: 'Freelancing',
    // eslint-disable-next-line quotes
    link: "mailto:tkinsm@gmail.com?subject:Let's discuss freelancing!",
    role: 'React Developer',
    when: 'Nov 2020 - Present',
    what: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."',
  },
];
