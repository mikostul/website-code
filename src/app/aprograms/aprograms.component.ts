import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aprograms',
  templateUrl: './aprograms.component.html',
  styleUrls: ['./aprograms.component.css']
})
export class AprogramsComponent implements OnInit {

  degreePrograms = [
    'Computer Science: Software and Systems Development',
    'Computer Science: Theory',
    'Computer Science: Data Science',
    'Computer Science: Database Systems',
    'Computer Science: Artificial Intelligence',
    'Computer Science: Software Engineering',
    'Computer Science: Game and Real-Time Systems',
    'Computer Science: Human-Computer Interaction',
    'Information Systems: Business Analysis/Systems Analysis',
    'Information Systems: Business Intelligence',
    'Information Systems: Database Administration',
    'Information Systems: IT Enterprise Management',
    'Information Systems: Standard'
  ];

  constructor() { }

  ngOnInit() {
    this.degreePrograms;
  }

}
