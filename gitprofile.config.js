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
    medium: 'SamTaylor92',
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
      'https://acrobat.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A6c49b746-234f-3b0e-b83a-24d4b9e5f368&viewer%21megaVerb=group-discover', // Empty fileUrl will hide the `Download Resume` button.
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
      position: 'Quality Assurance Manager',
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

  // // To hide the `My Projects` section, keep it empty.
  // externalProjects: [
  //   {
  //     title: '',
  //     description:
  //       '',
  //     imageUrl: '',
  //     link: '',
  //   },
  //   {
  //     title: '',
  //     description:
  //       '',
  //     imageUrl: '',
  //     link: '',
  //   },
  // ],

  // To hide the `Online Courses` section, keep it empty.
  OnlineCourses: [
    {
      title: '[Jun 2023] Advanced SQL Bootcamp',
      date: 'June 2023',
      description:
        " An advanced SQL course covering: subqueries, window functions, partitions, joins, set operations, grouping sets, schema structures, SQL transactions, table inheritance, view, stored procedures and triggers"
        ,
      link: "https://www.udemy.com/certificate/UC-d7a7394e-40ed-441d-b79e-f78a3c579428/",
      imageUrl: 'https://lowendbox.com/wp-content/uploads/2022/10/postgresql15.jpg'
    },
    {
      title: '[Mar 2023] Automate the Boring Stuff with Python Programming',
      date: 'March 2023',
      description:
        "A course that covered 10 projects to automate things in Python, including: text pattern recognisiton (regex), spreadsheet manipulation, PDF and Word doc manipulation, web scraping, emails and debugging"
        ,
      link: 'https://www.udemy.com/certificate/UC-48a49643-819e-4ed4-a2e9-ad7f90be6d3d/',
      imageUrl: 'https://img-c.udemycdn.com/course/750x422/2271214_c9ab_2.jpg'
    },
    {
      title: '[Nov 2022] Python for Time Series Data Analysis',
      date: 'November 2022',
      description:
        "Pandas for Data Manipulation, including: NumPy, data vizualisation in Pandas, statsmodels for timeseries, model evaluation, simple forecasting and ARIMA models"
        ,
      link: 'https://www.udemy.com/course/python-for-time-series-data-analysis/',
      imageUrl: 'https://coralogix.com/wp-content/uploads/2021/09/Relative-graphs-1000X1000.png'
    },
    {
      title: '[Oct 2022] Statistics for Data Science and Business Analysis',
      date: 'October 2022',
      description:
        "Understand the fundamentals of statistics, including: measures of central tendency, correlation & covariance, different distributions, confidence intervals, hypothesis testing, regression analysis, dummy variables"
        ,
      link: 'https://www.udemy.com/certificate/UC-f4313a60-ed04-433c-842e-5bfbb72928d2/',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/2672/2672346.png'
    },
    {
      title: '[Jun 2022] The Complete Pandas Bootcamp 2022: Data Science with Python',
      date: 'June 2022',
      description:
      "A-Z of Pandas, Scikit-Learn, NumPy and Seaborn, including: data cleaning, data vizualisation, statistics and project-based work"
        ,
      link: 'https://www.udemy.com/certificate/UC-324e44ee-91a8-4108-bb8e-66ada008eb2f/',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/274px-Pandas_mark.svg.png'
    },
    {
      title: '[Apr 2022] SQL Fundamentals Track',
      date: 'April 2022',
      description:
      "Introduction to (Postgres)SQL, including: joining data, summary stats, window functions and functions"
        ,
      link: 'https://www.datacamp.com/statement-of-accomplishment/course/e2de6b8582aa42c63dae25e27e81fb82b2a2f02f?raw=1',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_y9lJYyBNc4xIQ4jI9Rque5mlMHi02qtFZ5IALdBO-UOuygw0UbnHPRJ9Fv12FWhRGo&usqp=CAU'
    },
    {
      title: '[Jan 2022] The Complete SQL Bootcamp 2022: Go from Zero to Hero',
      date: 'January 2022',
      description:
      "SQL statement fundamentals (select, count, where, order by, limit, (not) in, (i)like) • Group By • Joins • Functions • String functions • Creating databases • Conditional expressions (case when, coalesce, nullif)"
      ,
      link: 'https://www.udemy.com/certificate/UC-2e082714-0c0d-42f6-9716-7ecad3757d27/',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUl65WtrQKFAtEeXbpu8zYXZj2xzb6MKFVwQ9ritJlUkjzd27U5eRDdzmxF3kj1Zjq_0I&usqp=CAU'
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '@samjames_90768', // to hide blog section, keep it empty
    limit: 6, // How many posts to display. Max is 10.
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
    >GitProfile</a>`,
};

export default config;
