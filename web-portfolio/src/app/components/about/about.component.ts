import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abe-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
// Convert the below-array into some JSON array that is queried instead of stored locally.
  code = [
    { title: 'Logistic Perceptron',
    subtitle: 'Programmer',
    image: '../../../assets/perceptronTest.png',
    description: 'Created a Logistic Regression-based Perceptron that could \
    categorize data into distinct subgroups e\.g\. legitimate vs spam mail',
    buzzwords: 'AI, Machine Learning, Java',
    github: "https://github.com/TShaffer133"},

    { title: 'mARkit: Mobile',
    subtitle: 'Project Lead',
    image: '../../../assets/mARkit.png',
    description: 'Oversaw the development of an AR application that \
    aimed to provide a virtual, 3D preview of items before they were purchased',
    github: "https://github.com/TShaffer133",
    buzzwords: 'Augmented Reality, Full-Stack'},

    { title: 'This Website',
    subtitle: 'Creator?',
    description: 'Blog',
    buzzwords: 'Full-Stack, Angular, Node\.js, SQL',
    github: "https://github.com/TShaffer133/FolioCode"},
  ];

  correlate = [
    { title: 'Kaggle DS Survey',
    subtitle: 'Data Analyst',
    image: '../../../assets/kaggleChloro.png',
    description: 'Analyzed over 23,000 survey responses aggregated by Kaggle \
    to discover the discrepancies between students and working professionals in Data Science',
    buzzwords: 'Data Visualization, Python',
    github: "https://github.com/TShaffer133"},

    { title: 'Happiness Study',
    subtitle: 'Project Lead',
    image: '../../../assets/perceptronTest.png',
    description: 'Collected and studied four months of self-reported data on various metrics \
    to determine how to statistically and objectively maximize personal happiness',
    buzzwords: 'AI, Machine Learning, Java',
    github: "https://github.com/TShaffer133"},

    { title: 'VR Avatar Survey',
    subtitle: 'Data Analyst',
    image: '../../../assets/perceptronTest.png',
    description: 'Created a Logistic Regression-based Perceptron that could \
    categorize data into distinct subgroups e\.g\. legitimate vs spam mail',
    buzzwords: 'AI, Machine Learning, Java',
    github: "https://github.com/TShaffer133"},
  ]

  collaborate = [
    { title: 'Game Dev Knights',
    subtitle: 'Treasurer (2017-2018)',
    image: '../../../assets/gdkGroupShot.jpg',
    description: 'Spearheaded a fundraising initiative that raised over $16,000 \
    to send members to the Game Developers Conference while hosting programming workshops',
    github: 'https://gamedevknights.com/',
    buzzwords: 'Project Management, Unity3D, C#'
    },

    { title: 'Camp Connect',
    subtitle: 'Volunteer (2018)',
    image: '../../../assets/campConnectShot.jpg',
    description: 'Supervised and assisted middle school students through several activities \
    such as designing wind-resistant structures to stimulate interest in various STEM disciplines',
    github: 'https://stem.ucf.edu/camp-connect/',
    buzzwords: 'Public Speaking, Empathy'
    },

    { title: 'Global Game Jam',
    subtitle: 'Participant/Programmer (2016)',
    image: '../../../assets/ggjSplash.png',
    description: 'Conceptualized and developed a 2D, isometric, tower-defense prototype within a 48 hour timeframe \
    with a rapidly-formed team of six members',
    github: 'https://globalgamejam.org/2016/games/diet-exorcise',
    buzzwords: 'Project Management, Unity3D, C#'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
