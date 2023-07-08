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

  // To hide the `Online Courses` section, keep it empty.
  OnlineCourses: [
    {
      title: '[Jun 2023] Advanced SQL Bootcamp',
      date: 'June 2023',
      description:
        " - Learn the power of Subqueries in SQL\n"
        + " - Discover how to use Window Functions and Partitions in SQL\n"
        + " - Understand advanced JOIN commands in SQL\n"
        + " - Learn about SQL Set Operations\n"
        + " - Discover Grouping Sets\n"
        + " - Building table relationships and schema structures in SQL\n"
        + " - Use SQL Transactions with Update and Set calls\n"
        + " - Understand Table Inheritance with SQL\n"
        + " - Create Views in SQL\n"
        + " - Learn how to use Stored Procedures\n"
        + " - Discover how to use Triggers across SQL Tables\n"
        + " - Understand general useful methods and commands in Advanced SQL"
        ,
      link: 'https://www.udemy.com/course/advanced-sql-bootcamp/',
    },
    {
      title: '[Mar 2023] Automate the Boring Stuff with Python Programming',
      date: 'March 2023',
      description:
        "Automate tasks on the computer by writing simple Python programs.\n"
        + " - Write programs that can do text pattern recognition with regular expressions.\n"
        + " - Programmatically generate and update Excel spreadsheets.\n" 
        + " - Parse PDFs and Word documents.\n"
        + " - Crawl web sites and pull information from online sources.\n"
        + " - Write programs that send out email notifications.\n"
        + " - Use Pythons debugging tools to quickly figure out bugs in your code.\n"
        + " - Programmatically control the mouse and keyboard to click and type for you."
        ,
      link: 'https://www.udemy.com/course/automate/',
    },
    {
      title: '[Nov 2022] Python for Time Series Data Analysis',
      date: 'November 2022',
      description:
        "Pandas for Data Manipulation\n"
        + " - NumPy and Python for Numerical Processing\n"
        + " - Pandas for Data Visualization\n"
        + " - How to Work with Time Series Data with Pandas\n"
        + " - Use Statsmodels to Analyze Time Series Data\n"
        + " - Evaluate a model's efficiency by comparing training and test data\n"
        + " - Use Facebook's Prophet Library for forecasting\n"
        + " - Understand advanced ARIMA models for Forecasting"
        ,
      link: 'https://www.udemy.com/course/python-for-time-series-data-analysis/',
    },
    {
      title: '[Oct 2022] Statistics for Data Science and Business Analysis',
      date: 'October 2022',
      description:
        " - Understand the fundamentals of statistics\n"
        + " - Learn how to work with different types of data\n"
        + " - How to plot different types of data\n"
        + " - Calculate the measures of central tendency, asymmetry, and variability\n"
        + " - Calculate correlation and covariance\n"
        + " - Distinguish and work with different types of distributions\n"
        + " - Estimate confidence intervals\n"
        + " - Perform hypothesis testing\n"
        + " - Make data driven decisions\n"
        + " - Understand the mechanics of regression analysis\n"
        + " - Carry out regression analysis\n"
        + " - Use and understand dummy variables\n"
        + " - Understand the concepts needed for data science even with Python and R"
        ,
      link: 'https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/',
    },
    {
      title: '[Jun 2022] The Complete Pandas Bootcamp 2022: Data Science with Python',
      date: 'June 2022',
      description:
      " - Bring your data handling & data analysis skills to an outstanding level.\n"
      + " - Master a complete machine learning project A-Z with Pandas, Scikit-Learn, and Seaborn\n"
      + " - Practice and master your Pandas skills with quizzes, 150+ exercises, and comprehensive projects\n"
      + " - Learn and master the most important Pandas workflows for finance\n"
      + " - Learn the basics of Pandas and Numpy coding\n"
      + " - Learn and practice all relevant Pandas methods and workflows with real-world datasets\n"
      + " - Import, clean, and merge messy data and prepare data for machine learning\n"
      + " - Analyze, visualize, and understand your data with Pandas, Matplotlib, and Seaborn\n"
      + " - Import financial/stock data from web sources and analyze them with Pandas\n"
      + " - Learn and master important statistical concepts with scipy"
        ,
      link: 'https://www.udemy.com/course/the-pandas-bootcamp/',
    },
    {
      title: '[Apr 2022] SQL Fundamentals Track',
      date: 'April 2022',
      description:
      "Introduction to SQL:\n"
      + " - Joining data in SQL\n"
      + " - Intermediate SQL\n"
      + " - PostgresSQL summary stats and window functions\n"
      + " - Functions for Manipulating Data in PostgreSQL"
        ,
      link: 'https://www.datacamp.com',
    },
    {
      title: '[Jan 2022] The Complete SQL Bootcamp 2022: Go from Zero to Hero',
      date: 'January 2022',
      description:
      " - SQL statement fundamentals (Select, Count, Where, Order by, Limit, In, (I)like)\n"
      + " - Group by statements (Group by, Having)\n"
      + " - Joins (As statement, Inner joins, Full outer joins, Left outer joins, Right joins, Union)\n"
      + " - Advanced SQL commands (Timestamps, extract, mathematical functions, string functions, subquery, self-join)\n"
      + " - Creating databases and tables (data types, primary & foreign keys, constraints, create table, insert, update, delete, alter table, drop table, check constraint)\n"
      + " - Conditional expressions and procedures (case, coalesce, cast, nullif, views, import, export)"
        ,
      link: 'https://www.udemy.com/course/the-complete-sql-bootcamp/',
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
