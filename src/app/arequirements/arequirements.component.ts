import { Component, OnInit } from '@angular/core';
import {FormsModule, FormControl, FormGroup} from "@angular/forms";
import { DegreeRequirement } from './degree-requirement';

@Component({
  selector: 'app-arequirements',
  templateUrl: './arequirements.component.html',
  styleUrls: ['./arequirements.component.css']
})
export class ArequirementsComponent implements OnInit {

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
  
  ISNumMajorElective = {
    BASA : 2,
    BI : 3,
    DA : 3,
    ITEM : 3,
    Standard : 7
  };
  
  csFoundationCourses = ['CSC 421','CSC 435','CSC 447','CSC 453','SE 450'];
  
  csSpecificAreaCourses = [
    ['CSC 436','CSC 438','CSC 439','CSC 443','CSC 448','CSC 461','CSC 462','CSC 471','CSC 472','CSC 475',
      'CSC 536','CSC 552','CSC 553','CSC 595','CNS 450','HCI 441','SE 441','SE 452','SE 459','SE 526','SE 554','SE 560','SE 491','SE 591','TDC 478','TDC 484','TDC 568'],

    ['CSC 431','CSC 440','CSC 444','CSC 489','CSC 503','CSC 521','CSC 525','CSC 531','CSC 535'],

    ['CSC 423','CSC 424','CSC 425','CSC 433','CSC 465','CSC 478','CSC 481','CSC 482','CSC 495','CSC 529','CSC 555','CSC 575','CSC 578','CSC 594','IS 467'],

    ['CSC 433','CSC 452','CSC 454','CSC 478','CSC 529','CSC 543','CSC 554','CSC 555','CSC 575'],

    ['CSC 457','CSC 458','CSC 478','CSC 480','CSC 481','CSC 482','CSC 495','CSC 528','CSC 529','CSC 575','CSC 576','CSC 577','CSC 578','CSC 587','CSC 594','IS 467'],

    ['SE 430','SE 433','SE 441','SE 452','SE 456','SE 457','SE 459','SE 475','SE 477','SE 480','SE 482','SE 491','SE 526','SE 554','SE 591'],

    ['CSC 461','CSC 462','CSC 486','CSC 588','GAM 425','GAM 450','GAM 453','GAM 470','GAM 475','GAM 476','GAM 575','GAM 576','SE 456'],

    ['CSC 436','CSC 438','CSC 465','CSC 471','CSC 472','CSC 491','CSC 492','HCI 440','HCI 441','HCI 430','HCI 454']
  ];
  
  isFoundationCourses = ['IS 421','CSC 451','IS 422','IS 430'];

  isAdvancedCourses = [
    ['CNS 440','IS 435','IS 485','IS 535','IS 560'],

    ['IS 574','CSC 423','IS 467','IS 549'],

    ['IS 549','CSC 454','CSC 452','CSC 554'],

    ['ECT 424','IS 556','IS 570','IS 535'],
  ];
  
  isMajorElectiveCourses = [
    ['ECT 424','IS 444','ECT 480','IS 483','HCI 440','IS 431','IS 440','IS 455','IS 540','IS 556','IS 565','IS 578'],

    ['CSC 465','CSC 495','CSC 575','HCI 512','IPD 447','IPD 451','IPD 460','IS 452','IS 456','IS 536','IS 550'],

    ['CNS 440','IPD 447','IPD 451','IPD 460','IPD 463','IS 452','IS 505','IS 536','IS 550'],

    ['CNS 440','ECT 556','IS 440','IS 444','IS 482','IS 483','IS 500','IS 505','IS 506','IS 535','IS 536','IS 540','IS 550','IS 560','IS 565','IS 579','IS 580'],

    ['IS 421','IS 422','IS 430','IS 431','IS 433','IS 435','IS 440','IS 444','IS 452','IS 455','IS 456','IS 482','IS 483','IS 483','IS 485','IS 486','IS 500','IS 505','IS 506','IS 511','IS 535','IS 536','IS 540','IS 549','IS 550','IS 556','IS 560','IS 565','IS 570','IS 574','IS 577','IS 578','IS 579','IS 580','IS 590','IS 596','IS 599','IS 690','IS 696','IS 698','PM 430','PM 440','PM 535','PM 556','PM 570','PM 570','PM 577']
  ];
  
  degreeRequirements : Array<DegreeRequirement>;
  
  public show:boolean = false;
  
  planForm: FormGroup; 

  constructor() { }
  
  submitForm(form : FormGroup) {
    console.log(form);
    let degreeProgram = form.get('degreeProgram').value;
    console.log(degreeProgram);
    this.degreeRequirements = this.getRequirements(degreeProgram);
    this.show = true;
  }

  ngOnInit() {
    this.planForm = new FormGroup({
      degreeProgram: new FormControl('')
    });
  }
  
  getRequirements(degreeProgram : string){
  
    var degReqs : Array<DegreeRequirement> = [];
    
    switch(degreeProgram){
      case "Computer Science: Software and Systems Development": {
        degReqs.push(new DegreeRequirement("Foundation", 5, this.csFoundationCourses));
        degReqs.push(new DegreeRequirement("Specific Area Concentration", 4, this.csSpecificAreaCourses[0]));
        degReqs.push(new DegreeRequirement("Any Area Courses", 4, ["Choose from any Specific Area courses"]));
        break;
      }
      case "Computer Science: Theory" : {
        degReqs.push(new DegreeRequirement("Foundation", 5, this.csFoundationCourses));
        degReqs.push(new DegreeRequirement("Specific Area Concentration", 4, this.csSpecificAreaCourses[1]));
        degReqs.push(new DegreeRequirement("Any Area Courses", 4, ["Choose from any Specific Area courses"]));
        break;
      }
      case "Computer Science: Data Science": {
        degReqs.push(new DegreeRequirement("Foundation", 5, this.csFoundationCourses));
        degReqs.push(new DegreeRequirement("Specific Area Concentration", 4, this.csSpecificAreaCourses[2]));
        degReqs.push(new DegreeRequirement("Any Area Courses", 4, ["Choose from any Specific Area courses"]));
        break;
      }
      case "Computer Science: Database Systems" : {
        degReqs.push(new DegreeRequirement("Foundation", 5, this.csFoundationCourses));
        degReqs.push(new DegreeRequirement("Specific Area Concentration", 4, this.csSpecificAreaCourses[3]));
        degReqs.push(new DegreeRequirement("Any Area Courses", 4, ["Choose from any Specific Area courses"]));
        break;
      }
      case "Computer Science: Artificial Intelligence" : {
        degReqs.push(new DegreeRequirement("Foundation", 5, this.csFoundationCourses));
        degReqs.push(new DegreeRequirement("Specific Area Concentration", 4, this.csSpecificAreaCourses[4]));
        degReqs.push(new DegreeRequirement("Any Area Courses", 4, ["Choose from any Specific Area courses"]));
        break;
      }
      case "Computer Science: Software Engineering" : {
        degReqs.push(new DegreeRequirement("Foundation", 5, this.csFoundationCourses));
        degReqs.push(new DegreeRequirement("Specific Area Concentration", 4, this.csSpecificAreaCourses[5]));
        degReqs.push(new DegreeRequirement("Any Area Courses", 4, ["Choose from any Specific Area courses"]));
        break;
      }
      case "Computer Science: Game and Real-Time Systems" : {
        degReqs.push(new DegreeRequirement("Foundation", 5, this.csFoundationCourses));
        degReqs.push(new DegreeRequirement("Specific Area Concentration", 4, this.csSpecificAreaCourses[6]));
        degReqs.push(new DegreeRequirement("Any Area Courses", 4, ["Choose from any Specific Area courses"]));
        break;
      }
      case "Computer Science: Human-Computer Interaction" : {
        degReqs.push(new DegreeRequirement("Foundation", 5, this.csFoundationCourses));
        degReqs.push(new DegreeRequirement("Specific Area Concentration", 4, this.csSpecificAreaCourses[7]));
        degReqs.push(new DegreeRequirement("Any Area Courses", 4, ["Choose from any Specific Area courses"]));
        break;
      }
      case "Information Systems: Business Analysis/Systems Analysis": {
        degReqs.push(new DegreeRequirement("Foundation", this.isFoundationCourses.length, this.isFoundationCourses));
        degReqs.push(new DegreeRequirement("Advanced Courses", this.isAdvancedCourses[0].length, this.isAdvancedCourses[0]));
        degReqs.push(new DegreeRequirement("Major Elective", this.ISNumMajorElective.BASA, this.isMajorElectiveCourses[this.ISNumMajorElective.BASA]));
        degReqs.push(new DegreeRequirement("Open Elective", 1, ["Choose from any Major Elective course"]));
        degReqs.push(new DegreeRequirement("Capstone", 1, ["IS 577"]));
        break;
      }
      case "Information Systems: Business Intelligence": {
        degReqs.push(new DegreeRequirement("Foundation", this.isFoundationCourses.length, this.isFoundationCourses));
        degReqs.push(new DegreeRequirement("Advanced Courses", this.isAdvancedCourses[1].length, this.isAdvancedCourses[1]));
        degReqs.push(new DegreeRequirement("Major Elective", this.ISNumMajorElective.BI, this.isMajorElectiveCourses[this.ISNumMajorElective.BI]));
        degReqs.push(new DegreeRequirement("Open Elective", 1, ["Choose from any Major Elective course"]));
        degReqs.push(new DegreeRequirement("Capstone", 1, ["IS 577"]));
        break;
      }
      case "Information Systems: Database Administration": {
        degReqs.push(new DegreeRequirement("Foundation", this.isFoundationCourses.length, this.isFoundationCourses));
        degReqs.push(new DegreeRequirement("Advanced Courses", this.isAdvancedCourses[2].length, this.isAdvancedCourses[2]));
        degReqs.push(new DegreeRequirement("Major Elective", this.ISNumMajorElective.DA, this.isMajorElectiveCourses[this.ISNumMajorElective.DA]));
        degReqs.push(new DegreeRequirement("Open Elective", 1, ["Choose from any Major Elective course"]));
        degReqs.push(new DegreeRequirement("Capstone", 1, ["IS 577"]));
        break;
      }
      case "Information Systems: IT Enterprise Management": {
        degReqs.push(new DegreeRequirement("Foundation", this.isFoundationCourses.length, this.isFoundationCourses));
        degReqs.push(new DegreeRequirement("Advanced Courses", this.isAdvancedCourses[3].length, this.isAdvancedCourses[3]));
        degReqs.push(new DegreeRequirement("Major Elective", this.ISNumMajorElective.ITEM, this.isMajorElectiveCourses[this.ISNumMajorElective.ITEM]));
        degReqs.push(new DegreeRequirement("Open Elective", 1, ["Choose from any Major Elective course"]));
        degReqs.push(new DegreeRequirement("Capstone", 1, ["IS 577"]));
        break;
      }
      case "Information Systems: Standard": {
        degReqs.push(new DegreeRequirement("Foundation", this.isFoundationCourses.length, this.isFoundationCourses));
        degReqs.push(new DegreeRequirement("Major Elective", this.ISNumMajorElective.Standard, this.isMajorElectiveCourses[this.ISNumMajorElective.Standard]));
        degReqs.push(new DegreeRequirement("Open Elective", 1, ["Choose from any Major Elective course"]));
        degReqs.push(new DegreeRequirement("Capstone", 1, ["IS 577"]));
        break;
      }
    }
    //console.log(degReqs.length);
    return degReqs;   
  }
}