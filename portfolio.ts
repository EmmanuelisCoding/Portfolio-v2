import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Emmanuel Owouko',
  title: `Hey there !  `,
  description:
    ``,
  resumeLink:
    '/Emmanuel Owouko CV.pdf',
};

export const openSource = {
  githubUserName: '',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/emmanuel-owouko/',
  github: 'https://wa.me/22892649035',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do ?',
  subTitle: "",
  data: [
    {
      title: 'WEB DEVELOPMENT',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡  Building responsive web applications using React and TypeScript'
        ),
        emoji('⚡ Crafting User Interface layouts and components that adapt to any screen size'),
        emoji('⚡ Ensuring accessibility best practices are met for all user experiences.'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Jest',
          iconifyTag: 'logos:jest',
        },
        {
          skillName: 'TypeScript',
          iconifyTag: 'logos:typescript-icon',
        },
        {
          skillName: 'Material UI',
          iconifyTag: 'logos:material-ui',
        },
        {
          skillName: 'Chakra UI',
          iconifyTag: 'simple-icons:chakraui',
        },
        {
          skillName: 'Tailwind Css',
          iconifyTag: 'logos:tailwindcss-icon',
        },
        {
          skillName: 'Webpack',
          iconifyTag: 'logos:webpack',
        },
        {
          skillName: 'Git',
          iconifyTag: 'logos:git',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'UI / UX Design' ,
      lottieAnimationFile: '/lottie/skills/ui-ux design--lottie animation.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Designing engaging webpage layouts and components using tools like Figma and Canva'),
        emoji(
          '⚡ creating responsive designs that look and perform beautifully on all devices, providing a consistent user experience'
        ),
        emoji(
          '⚡ Staying up-to-date on the latest UI/UX trends, technologies, and techniques.'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'Figma',
          iconifyTag: 'logos:figma',
        },
        {
          skillName: 'Canva',
          iconifyTag: 'devicon:canva',
        },
        {
          skillName: 'Affinity designer',
          iconifyTag: 'file-icons:affinitydesigner',
        },
      ],
    },
  ],
};


export const experience: ExperienceType[] = [
  {
    role: 'React.js Developer',
    company: 'Blognet',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Mar 2023 – Present',
    desc: 'My responsibilities included creating dynamic components, optimizing site performance, and ensuring a seamless user experience. I also contributed to code reviews, debugging, and continuous improvements.',
  },
  {
    role: 'Frontend Developer',
    company: 'Hotêl 2 Février',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Feb 2022 – May 2023',
    desc: 'I was involved in maintaining the website and also in bug fixing. This experience has reinforced my commitment to delivering reliable web solutions. ',
  },
  {
    role: 'Web developer trainee',
    company: 'Togocom',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Jun 2021 – Dec 2021',
    desc: 'I have worked with other members of the team on the official website of the company. I experienced team working and I learnt some good practices that increase the performance of the code',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Blognet',
    desc: '',
    link: 'https://blognet.tg',
  },
  {
    name: 'Admin dashboard',
    desc: '',
    link: 'https://admin-dashboardzz.netlify.app/',
  },
  {
    name: 'Frutifresh Togo',
    desc: '',
    link: 'https://http://frutifreshtogo.com/',
  },
  {
    name: 'Le patio',
    desc: '',
    link: 'https://admin-dashboardzz.netlify.app/',
  },
];


// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Emmanuel Owouko ',
  description:
    'A passionate Full Stack Web Developer.',
  author: 'Emmanuel Owouko ',
  image: '',
  url: 'https://emmanuel-owouko.netlify.app',
  keywords: [
    'Emmanuel',
    'Emmanuel Owouko',
    '@emmanuelowouko',
    'EmmanuelOwouko',
    'Portfolio',
    'Owouko Portfolio ',
    'Emmanuel Owouko Portfolio',
  ],
};
