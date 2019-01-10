import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abe-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  code = [
    { title: 'Logistic Perceptron',
    subtitle: 'Programmer',
    image: '../../../assets/perceptronTest.png',
    description: 'Created a Logistic Regression-based Perceptron that could \
    categorize data into distinct subgroups e\.g\. legitimate vs spam mail',
    buzzwords: 'AI, Machine Learning, Java',
    github: "https://github.com/TShaffer133"},

    { title: 'mARkit',
    subtitle: 'Project Lead',
    image: '../../../assets/mARkit.png',
    description: 'Spearheaded the development of an AR mobile application that \
    was aimed to provide users with a 3D preview of items before they were purchased',
    github: "https://github.com/TShaffer133",
    buzzwords: 'Augmented Reality, Full-Stack'},

    { title: 'This Website',
    subtitle: 'Creator?',
    description: 'Blog',
    buzzwords: 'Full-Stack, Angular, Node\.js, SQL',
    github: "https://github.com/TShaffer133/FolioCode"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
