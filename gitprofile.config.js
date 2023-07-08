// gitprofile.config.js

const config = {
  github: {
    username: 'samtaylor92', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 5, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['samtaylor92.github.io','SamTaylor92'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'samjamest',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://samtaylor92.github.io',
    phone: '',
    email: 'samtaylor92@live.co.uk',
  },
  resume: {
    fileUrl:
      'https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:bbe54676-e2ea-3720-8a0c-e186ade9f65f', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'SQL',
    'Python',
    'Databricks',
    'Looker',
    'Google Sheets',
  ],
  experiences: [
    {
      company: 'GetYourGuide',
      position: 'Operations Analyst',
      from: 'November 2021',
      to: 'Present',
      companyLink: 'https://getyourguide.com',
    },
    {
      company: 'GetYourGuide',
      position: 'Quality Manager',
      from: 'January 2021',
      to: 'November 2021',
      companyLink: 'https://getyourguide.com',
    },
    {
      company: 'GetYourGuide',
      position: 'Team Leader (Customer Service)',
      from: 'October 2019',
      to: 'January 2021',
      companyLink: 'https://getyourguide.com',
    },
    {
      company: 'GetYourGuide',
      position: 'Trainer',
      from: 'September 2017',
      to: 'October 2019',
      companyLink: 'https://getyourguide.com',
    },
    {
      company: 'GetYourGuide',
      position: 'Customer Service Agent',
      from: 'April 2017',
      to: 'September 2017',
      companyLink: 'https://getyourguide.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Cumbria',
      degree: 'Post-graduate Certificate of Education (PGCE) Secondary Spanish & French',
      from: '2015',
      to: '2016',
    },
    {
      institution: 'Lancaster University',
      degree: '(BA Hons) English Language & Spanish',
      from: '2010',
      to: '2014',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: '',
      description:
        '',
      imageUrl: '',
      link: '',
    },
    {
      title: '',
      description:
        '',
      imageUrl: '',
      link: '',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  onlineCourses: [
    {
      title: 'example',
      date: '12 Feb 2022',
      description:
        'Useful things',
      link: 'google.com',
    },
    {
      title: '',
      description:
        '',
      imageUrl: '',
      link: '',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/SamTaylor92"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
