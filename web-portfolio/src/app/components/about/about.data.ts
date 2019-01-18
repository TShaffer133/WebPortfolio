export interface Project {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  buzzwords: string;
  github?: string;
  kaggle?: string;
  link?: string;
}

export const code: Project[] = [
  { title: 'Logistic Perceptron',
  subtitle: 'Programmer',
  image: '../../../assets/perceptronTest.png',
  description: 'Created a Logistic Regression-based Perceptron that could \
  categorize data into distinct subgroups e\.g\. legitimate vs spam mail',
  buzzwords: 'AI, Machine Learning, Java',
  github: "https://github.com/TShaffer133/WekaLogisticPerceptron"},

  { title: 'mARkit: Mobile',
  subtitle: 'Project Lead',
  image: '../../../assets/mARkit.png',
  description: 'Oversaw the development of an AR application that \
  aimed to provide a virtual, 3D preview of items before they were purchased',
  buzzwords: 'Augmented Reality, Full-Stack'},

  { title: 'Paws of Interest',
  subtitle: 'Project Lead',
  image: '../../../assets/pawsMap.png',
  description: 'Architected a mobile ARG designed to encourage students to \
  walk around campus by connecting their movements \
  to the well-being of a virtual pet.',
  buzzwords: 'Mapbox, Augmented Reality',
  github: "https://github.com/evanjg/COP4331-G5"},
];

export const correlate: Project[] = [
  { title: 'Kaggle DS Survey',
  subtitle: 'Data Analyst',
  image: '../../../assets/kaggleChloro.png',
  description: 'Analyzed over 23,000 survey responses aggregated by Kaggle \
  to discover the discrepancies between students and working professionals in Data Science',
  buzzwords: 'Data Visualization, Python',
  kaggle: "https://www.kaggle.com/filthyilliterate/transitioning-from-academia-to-industry"},

  { title: 'Happiness Study',
  subtitle: 'Project Lead',
  image: '../../../assets/happinessReport.png',
  description: 'Collected and studied four months of self-reported data on various metrics \
  to determine how to statistically and objectively maximize personal happiness',
  buzzwords: 'Data Visualization, Python'},

  { title: 'VR Sim Survey',
  subtitle: 'Data Analyst',
  image: '../../../assets/simSurvey.png',
  description: 'Discovered discrepancies in playtime and avatar selection between genders \
  by analyzing over 100 datalogs obtained from playtests, suggested actionable solutions',
  buzzwords: 'Data Visualization, Python'},
]

export const collaborate: Project[] = [
  { title: 'Game Dev Knights',
  subtitle: 'Treasurer (2017-2018)',
  image: '../../../assets/gdkGroupShot.jpg',
  description: 'Spearheaded a fundraising initiative that raised over $16,000 \
  to send members to the Game Developers Conference while hosting programming workshops',
  buzzwords: 'Project Management, Unity3D',
  link: 'https://gamedevknights.com/'
  },

  { title: 'Camp Connect',
  subtitle: 'Volunteer (2018)',
  image: '../../../assets/campConnectShot.jpg',
  description: 'Supervised middle school students through several activities \
  such as designing wind-resistant structures to stimulate interest in various STEM disciplines',
  buzzwords: 'Public Speaking, Empathy',
  link: 'https://stem.ucf.edu/camp-connect/'
  },

  { title: 'Global Game Jam',
  subtitle: 'Participant/Programmer (2016)',
  image: '../../../assets/ggjSplash.png',
  description: 'Conceptualized and developed a 2D, isometric, tower-defense prototype within a 48 hour timeframe \
  with a rapidly-formed team of six members',
  buzzwords: 'Project Management, Unity3D',
  link: 'https://globalgamejam.org/2016/games/diet-exorcise'
  }
]
