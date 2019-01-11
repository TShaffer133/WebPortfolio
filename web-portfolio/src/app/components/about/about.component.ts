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
    description: 'Spearheaded the development of an AR application that \
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
    description: 'Created a Logistic Regression-based Perceptron that could \
    categorize data into distinct subgroups e\.g\. legitimate vs spam mail',
    buzzwords: 'AI, Machine Learning, Java',
    github: "https://github.com/TShaffer133"},

    { title: 'Happiness Study',
    subtitle: 'Project Lead',
    image: '../../../assets/perceptronTest.png',
    description: 'Created a Logistic Regression-based Perceptron that could \
    categorize data into distinct subgroups e\.g\. legitimate vs spam mail',
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
    image: '../../../assets/perceptronTest.png',
    description: 'Created a Logistic Regression-based Perceptron that could \
    categorize data into distinct subgroups e\.g\. legitimate vs spam mail',
    buzzwords: 'AI, Machine Learning, Java',
    github: "https://github.com/TShaffer133"},

    { title: 'Camp Connect',
    subtitle: 'Volunteer (Summoner 2018)',
    image: '../../../assets/perceptronTest.png',
    description: 'Created a Logistic Regression-based Perceptron that could \
    categorize data into distinct subgroups e\.g\. legitimate vs spam mail',
    buzzwords: 'AI, Machine Learning, Java',
    github: "https://github.com/TShaffer133"},

    { title: 'Global Game Jam',
    subtitle: 'Participant/Programmer (2016)',
    image: '../../../assets/perceptronTest.png',
    description: 'Created a Logistic Regression-based Perceptron that could \
    categorize data into distinct subgroups e\.g\. legitimate vs spam mail',
    buzzwords: 'AI, Machine Learning, Java',
    github: "https://github.com/TShaffer133"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
