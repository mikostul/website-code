import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgForm } from '@angular/forms';
import { DegreePlanParameters } from './degree-plan-parameters';
import { Quarter } from './quarter';
import { DataService } from '../../Data.service';
import { xCourse } from './xCourse';

@Component({
  selector: 'app-degree-plan-form',
  templateUrl: './degree-plan-form.component.html',
  styleUrls: ['./degree-plan-form.component.css']
})
export class DegreePlanFormComponent implements OnInit {

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
	'Information Systems: Datbase Administration',
	'Information Systems: IT Enterprise Management',
	'Information Systems: Standard'
  ];

  startQuarter = [
	'Fall','Winter','Spring','Summer'
  ];

  numberOfClasses = [1,2,3];
  
  /*--------------------------------------------------------------------------------------------------------
  
  Information Systems JSON objects that are functioning as enums. The integer value in each one (like BASA : 0)
  maps to an index for the isAdvancedCourses and isMajorElectiveCourses arrays.
  
  The ISNumMajorElective integers correspond to how many of the listed electives they are required to take: IS
  BASA students are required to take 2 of the electives, IS BS students are required to take 3, etc.
  
  ---------------------------------------------------------------------------------------------------------*/

  ISConcentration = {
	BASA : 0,
	BI : 1,
	DA : 2,
	ITEM : 3,
	Standard : 4
  };
  
  ISNumMajorElective = {
    BASA : 2,
	BI : 3,
	DA : 3,
	ITEM : 3,
	Standard : 7
  };
  
  /*--------------------------------------------------------------------------------------------------------
  
  Computer Science Specific Area Elective (SAE) JSON objects that are functioning as enums. The integer value 
  (like SSD : 0) maps to an index for the csSpecificAreaCourses array.
  
  ---------------------------------------------------------------------------------------------------------*/

  SAE = {
	SSD : 0,
	T : 1,
	DSci : 2,
	DSys : 3,
	AI : 4,
	SE : 5,
	GRTS : 6,
	HCI : 7
  }
  
  /*--------------------------------------------------------------------------------------------------------

    Information Systems degree requirements. The Foundation Courses and Advanced Courses are all required 
    courses--they have to take each one. The isMajorElectiveCourses and isOpenElectiveCourses arrays contain
    the courses from which they can pick a certain required number of courses. For example, Information Systems
    BASA students are required to take 2 major electives.
    
    They are only required to take one open elective course.
  
  ---------------------------------------------------------------------------------------------------------*/

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
  
  isOpenElectiveCourses = [
        'CNS 440','CNS 450','CNS 466','CNS 477','CNS 488','CNS 489','CNS 533','CNS 594','CSC 421','CSC 426','CSC 431','CSC 435','CSC 436','CSC 438','CSC 439','CSC 440','CSC 443','CSC 444','CSC 447','CSC 448','CSC 451','CSC 452','CSC 453','CSC 454','CSC 458','CSC 461','CSC 462','CSC 471','CSC 472','CSC 475','CSC 480','CSC 481','CSC 482','CSC 486','CSC 489','CSC 491','CSC 500','CSC 503','CSC 521','CSC 525','CSC 528','CSC 536','CSC 543','CSC 552','CSC 553','CSC 554','CSC 555','CSC 559','CSC 575','CSC 576','CSC 577','CSC 578','CSC 587','CSC 588','CSC 594','CSC 595','CSC 599','CSC 695','CSC 697','CSC 698','CSC 699','ECT 424','ECT 436','ECT 455','ECT 480','ECT 582','ECT 583','ECT 587','GAM 424','GAM 425','GAM 426','GAM 427','GAM 428','GAM 430','GAM 440','GAM 450','GAM 451','GAM 453','GAM 470','GAM 475','GAM 476','GAM 499','GAM 520','GAM 530','GAM 540','GAM 575','GAM 576','GAM 597','HCI 421','HCI 422','HCI 430','HCI 440','HCI 445','HCI 450','HCI 454','HCI 460','HCI 470','HCI 511','HCI 512','HCI 514','HCI 515','HCI 520','HCI 522','HCI 530','HCI 553','HCI 580','IS 421','IS 422','IS 430','IS 431','IS 435','IS 440','IS 444','IS 452','IS 482','IS 485','IS 500','IS 505','IS 506','IS 511','IS 535','IS 536','IS 540','IS 549','IS 550','IS 556','IS 560','IS 565','IS 570','IS 574','IS 577','IS 578','IS 579','IS 580','IS 596','IS 599','IT 432','IT 590','IT 599','PM 430','PM 440','PM 535','PM 556','PM 570','PM 570','PM 577','SE 430','SE 433','SE 441','SE 450','SE 452','SE 456','SE 457','SE 459','SE 475','SE 477','SE 480','SE 482','SE 491','SE 526','SE 554','SE 591','TDC 431','TDC 460','TDC 463','TDC 464','TDC 477','TDC 478','TDC 484','TDC 511','TDC 512','TDC 560','TDC 562','TDC 563','TDC 568','TDC 577','TDC 593','TDC 594','TDC 599','TDC 690','TDC 696','TDC 698'
  ];
  
  /*--------------------------------------------------------------------------------------------------------

  Computer Science degree requirements. The Foundation Courses are required of all Computer Science students.
  They chose one specific area--like Software Engineering--and take 4 courses in that area. They also are required 
  to take 4 courses from any of the specific areas. For example, they could take one from Artificial Intelligence, one 
  from Software Engineering, and two from Game and Real-Time Systems.
  
  ---------------------------------------------------------------------------------------------------------*/

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
        
  degreePlanFinal : Array<Quarter>; //this variable will hold the data displayed on the web page
  
  public fallCourses: xCourse[];
  public winterCourses: xCourse[];
  public springCourses: xCourse[];
  public summerCourses: xCourse[];
  public allCourses: xCourse[];
  
  public show:boolean = false;
  
  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.getFallCourses().subscribe((courses: xCourse[]) => {
                this.fallCourses = courses;
        }); 
    this.dataService.getWinterCourses().subscribe((courses: xCourse[]) => {
                this.winterCourses = courses;
        });
    this.dataService.getSpringCourses().subscribe((courses: xCourse[]) => {
                this.springCourses = courses;
        });
    this.dataService.getSummerCourses().subscribe((courses: xCourse[]) => {
		this.summerCourses = courses;
        
	});
    this.dataService.getxCourses().subscribe((courses: xCourse[]) => {
        this.allCourses = courses;
    });
  }
  
  /*--------------------------------------------------------------------------------------------------------

    The onSubmit() function is linked to the form on the webpage and is called when 'Submit' is pressed.
  
  ---------------------------------------------------------------------------------------------------------*/

  onSubmit(degreeForm: NgForm){
		
	let degreeRqmnts = this.getDegreeRqmnts(degreeForm.value.degree_program);
	this.degreePlanFinal = this.buildQuarters(degreeForm.value.start_quarter, degreeForm.value.num_classes);
    this.fillRqmnts(degreeForm.value.degree_program, degreeForm.value.num_classes, degreeRqmnts, this.degreePlanFinal);
    this.show = true;
      
  }//end onSubmit()
  
  /*--------------------------------------------------------------------------------------------------------

    The fillRqmnts() function is called from the onSubmit() function--it's the starting point for mapping out
    the degree plan.
  
  ---------------------------------------------------------------------------------------------------------*/

  fillRqmnts(degreeProgram : string, numCPQ : number, degreeRqmnts : number[], degreePlan : Array<Quarter>){

	if(degreeProgram.indexOf("Computer Science") != -1)
		this.fillRqmntsCS(numCPQ, degreeRqmnts, degreePlan);
	else
		this.fillRqmntsIS(numCPQ, degreeRqmnts, degreePlan);

  }//end fillRqmnts()
  
  /*--------------------------------------------------------------------------------------------------------

    The fillRqmntsCS() function is called from the fillRqmnts() function is written to handle Computer Science
    degree plans specifically.
    
    numCPQ = number of classes per quarter
    
    It has 3 flag variables that signal if certain areas of the degree's requirements have been fulfilled, like
    whether or not all of the foundation courses have been added to the degree plan.
    
    The courseSet variable is where the list of classes that will be taken is stored. Note that the courses
    are ALSO stored in the degreePlan, which is the most important area. 
    
    The foundationCourseSet contains all of the required foundation courses. As the foundation courses are
    added to the degreePlan, they are removed from the foundationCourseSet.
    
    The 3 counter variables are to make sure that, (1) We have the right number of classes per quarter, (2) we
    have the right number of specific area courses, and (3) we have the right number any area courses.
  
  ---------------------------------------------------------------------------------------------------------*/
  
  hasPrereqs(courseSet : Set<string>, course : string){
       
    for(let ac of this.allCourses){
        if(ac.COURSE_ID == course){
                    var prereqs = ac.PREREQS;
                    if(prereqs != "None"){
                        var prereqsArray = prereqs.split(",",5);
                        for(let p of prereqsArray){
                            if(!courseSet.has(p))
                                return false;
                        }
                        return true;     
                    } 
                    return true;
                }
    } 
    
  }
  
  courseAvailThisTerm(course : string, term : string) : boolean {
    switch(term) {
        case "Fall": {
            for(let fc of this.fallCourses){
                if(fc.COURSE_ID == course)
                    return true;
            }
            return false;
        }
        case "Winter": {
            for(let wc of this.winterCourses){
                if(wc.COURSE_ID == course)
                    return true;
            }
            return false;
        }
        case "Spring": {
            for(let spc of this.springCourses){
                if(spc.COURSE_ID == course)
                    return true;
            }
            return false;
        }
        case "Summer": {
            for(let suc of this.summerCourses){
                if(suc.COURSE_ID == course)
                    return true;
            }
            return false;
        }
    }
  }

  fillRqmntsCS(numCPQ : number, degreeRqmnts : number[], degreePlan : Array<Quarter>){

	var allFoundationCoursesAdded : boolean = false;
	var allSpecificAreaCoursesAdded : boolean = false;
	var allAnyAreaCoursesAdded : boolean = false;
    
    let courseSet: Set<string> = new Set<string>();
    let foundationCourseSet : Set<string> = new Set<string>(this.csFoundationCourses);
    let specificAreaCourseSet : Set<string> = new Set<string>(this.csSpecificAreaCourses[degreeRqmnts[0]]);
    
	var cpqCounter : number = 0;
    var saCounter : number = 0;
    var aaCounter : number = 0;
    
	for(let quarter of degreePlan) {
 
		if(!allFoundationCoursesAdded){
            
			foundationCourseSet.forEach((fc) => {
				if(this.courseAvailThisTerm(fc, quarter.term) && cpqCounter < numCPQ && !courseSet.has(fc)){
                    courseSet.add(fc);
                    quarter.addCourse(fc);
                    foundationCourseSet.delete(fc);
					cpqCounter++;
				}    
            });
                
            if(foundationCourseSet.size == 0)
                allFoundationCoursesAdded = true;
		           
		}
        
		if(!allSpecificAreaCoursesAdded){
        
			for(var i = 0; i < this.csSpecificAreaCourses[degreeRqmnts[0]].length && cpqCounter < numCPQ && saCounter < 4; i++) {
				if(this.courseAvailThisTerm(this.csSpecificAreaCourses[degreeRqmnts[0]][i], quarter.term) &&  !courseSet.has(this.csSpecificAreaCourses[degreeRqmnts[0]][i]) &&
                this.hasPrereqs(courseSet, this.csSpecificAreaCourses[degreeRqmnts[0]][i])) 
                {
                    courseSet.add(this.csSpecificAreaCourses[degreeRqmnts[0]][i]);
					quarter.addCourse(this.csSpecificAreaCourses[degreeRqmnts[0]][i]);
					cpqCounter++;
                    saCounter++;
				}
                
                if(saCounter == 4)
                    allSpecificAreaCoursesAdded = true;
			}
            
		}

		if(!allAnyAreaCoursesAdded){
   
			for(var i = 0; i < this.csSpecificAreaCourses.length && cpqCounter < numCPQ && aaCounter < 4; i++) {
                var courseArea = this.csSpecificAreaCourses[i];
                for(var j = 0; j < courseArea.length && cpqCounter < numCPQ && aaCounter < 4; j++){
				    if(this.courseAvailThisTerm(courseArea[j], quarter.term) && 
                    !courseSet.has(courseArea[j]) && 
                    !specificAreaCourseSet.has(courseArea[j]) &&
                    this.hasPrereqs(courseSet, courseArea[j])){
					   courseSet.add(courseArea[j]);
					   quarter.addCourse(courseArea[j]);
					   cpqCounter++;
                       aaCounter++;
				    }
                }
			}
            
            if(aaCounter == 4)
                    allAnyAreaCoursesAdded = true;
		}
            
        cpqCounter = 0;

	}//end quarter of degreePlan for loop
    
    if(!allFoundationCoursesAdded)
        this.fillRemainingFoundationCoursesCS(courseSet, foundationCourseSet, degreePlan, numCPQ);
        
    
    if(!allSpecificAreaCoursesAdded)
        this.fillRemainingSpecificAreaCoursesCS(courseSet, degreePlan, degreeRqmnts, saCounter, numCPQ);
    
    
    if(!allAnyAreaCoursesAdded)
         this.fillRemainingAnyAreaCoursesCS(courseSet, specificAreaCourseSet, degreePlan, aaCounter, numCPQ);
    
    
  }//end fillRqmntsCS()
  
  fillRemainingFoundationCoursesCS(courseSet : Set<string>, foundationCourseSet : Set<string>, degreePlan : Array<Quarter>, numCPQ : number) {
  
        var allFoundationCoursesAdded : boolean = false;
        var iterations = 0;
        var cpqCounter = degreePlan[degreePlan.length - 1].classes.length;
        
        while(!allFoundationCoursesAdded && iterations < 4){
        
            let acadYear1 = degreePlan[degreePlan.length - 1].acadYear1;
            let acadYear2 = degreePlan[degreePlan.length - 1].acadYear2;
            let nextTerm = this.getNextTerm(degreePlan[degreePlan.length - 1].term);
            degreePlan.push(new Quarter(nextTerm, acadYear1, acadYear2));
            
            for(var k = degreePlan.length - 1; k < degreePlan.length; k++){
            
                foundationCourseSet.forEach((fc) => {
				    if(this.courseAvailThisTerm(fc, degreePlan[k].term) && cpqCounter < numCPQ && !courseSet.has(fc)){
                        courseSet.add(fc);
                        degreePlan[k].addCourse(fc);
                        foundationCourseSet.delete(fc);
                        cpqCounter++;
				    }    
                });
                
                if(foundationCourseSet.size == 0)
                    allFoundationCoursesAdded = true;
                    
            }
        }
  }
  
  fillRemainingSpecificAreaCoursesCS(courseSet : Set<string>, degreePlan : Array<Quarter>, degreeRqmnts : number[], saCounter : number, numCPQ : number){
  
        var iterations = 0;
        var allSpecificAreaCoursesAdded : boolean = false;
        var cpqCounter = degreePlan[degreePlan.length - 1].classes.length;
        
        while(!allSpecificAreaCoursesAdded && iterations < 4){
            
            let acadYear1 = degreePlan[degreePlan.length - 1].acadYear1;
            let acadYear2 = degreePlan[degreePlan.length - 1].acadYear2;
            let nextTerm = this.getNextTerm(degreePlan[degreePlan.length - 1].term);
            degreePlan.push(new Quarter(nextTerm, acadYear1, acadYear2));
            
            for(var k = degreePlan.length - 1; k < degreePlan.length; k++){
            
                for(var i = 0; i < this.csSpecificAreaCourses[degreeRqmnts[0]].length && cpqCounter < numCPQ && saCounter < 4; i++) {
                    courseSet.has(this.csSpecificAreaCourses[degreeRqmnts[0]][i]);
				    if(this.courseAvailThisTerm(this.csSpecificAreaCourses[degreeRqmnts[0]][i], degreePlan[k].term) &&  !courseSet.has(this.csSpecificAreaCourses[degreeRqmnts[0]][i])) 
                    {
                       courseSet.add(this.csSpecificAreaCourses[degreeRqmnts[0]][i]);
					   degreePlan[k].addCourse(this.csSpecificAreaCourses[degreeRqmnts[0]][i]);
					   cpqCounter++;
                       saCounter++;
				    }
    
                    if(saCounter == 4)
                        allSpecificAreaCoursesAdded = true;
			     }
            }
            iterations++;
        }     
  }
  
  fillRemainingAnyAreaCoursesCS(courseSet : Set<string>, specificAreaCourseSet : Set<string>, degreePlan : Array<Quarter>, aaCounter : number, numCPQ : number){
  
        var iterations = 0;
        var allAnyAreaCoursesAdded : boolean = false;
        var cpqCounter = degreePlan[degreePlan.length - 1].classes.length;
        
        while(!allAnyAreaCoursesAdded && iterations < 4){
            
            let acadYear1 = degreePlan[degreePlan.length - 1].acadYear1;
            let acadYear2 = degreePlan[degreePlan.length - 1].acadYear2;
            let nextTerm = this.getNextTerm(degreePlan[degreePlan.length - 1].term);
            degreePlan.push(new Quarter(nextTerm, acadYear1, acadYear2)); 
            
            for(var k = degreePlan.length - 1; k < degreePlan.length; k++){
        
                for(var i = 0; i < this.csSpecificAreaCourses.length && cpqCounter < numCPQ && aaCounter < 4; i++) {
                    var courseArea = this.csSpecificAreaCourses[i];
                    for(var j = 0; j < courseArea.length && cpqCounter < numCPQ && aaCounter < 4; j++){
				        if(this.courseAvailThisTerm(courseArea[j], degreePlan[k].term) && 
                        !courseSet.has(courseArea[j]) && 
                        !specificAreaCourseSet.has(courseArea[j]) &&
                        this.hasPrereqs(courseSet, courseArea[j])){
					       courseSet.add(courseArea[j]);
					       degreePlan[k].addCourse(courseArea[j]);
					       cpqCounter++;
                           aaCounter++;
				    }
                }
			}
            
                if(aaCounter == 4)
                    allAnyAreaCoursesAdded = true;
            }   
        }
  
  }
  
  /*--------------------------------------------------------------------------------------------------------

    The fillRqmntsIS() function is called from the fillRqmnts() function is written to handle Information Systems
    degree plans specifically.
    
    numCPQ = number of classes per quarter
    
    It has 5 flag variables that signal if certain areas of the degree's requirements have been fulfilled, like
    whether or not all of the foundation courses have been added to the degree plan.
    
    The courseSet variable is where the list of classes that will be taken is stored. Note that the courses
    are ALSO stored in the degreePlan, which is the most important area. 
    
    The foundationCourseSet contains all of the required foundation courses. As the foundation courses are
    added to the degreePlan, they are removed from the foundationCourseSet.
    
    The advancedCourseSet contains all of the required advanced courses for that particular concentration. As the 
    advanced courses are added to the degreePlan, they are removed from the advancedCourseSet.
    
    The 3 counter variables are to make sure that, (1) We have the right number of classes per quarter, (2) we
    have the right number of major elective courses, and (3) we have the right number of open elective courses, which is one.
  
  ---------------------------------------------------------------------------------------------------------*/

  fillRqmntsIS(numCPQ : number, degreeRqmnts : number[], degreePlan : Array<Quarter>){
    
    var allFoundationCoursesAdded : boolean = false;
    var allAdvancedCoursesAdded : boolean = false;
    var allMajorElectiveCoursesAdded : boolean = false;
    var openElectiveCourseAdded : boolean = false;
    var capstoneAdded : boolean = false;
    
    let courseSet: Set<string> = new Set<string>();
    let foundationCourseSet : Set<string> = new Set<string>(this.isFoundationCourses);
    let advancedCourseSet : Set<string> = new Set<string>(this.isAdvancedCourses[degreeRqmnts[0]]);
    
    var cpqCounter : number = 0;
    var meCounter : number = 0;
    var oeCounter : number = 0;
    
    for(let quarter of degreePlan) {
    
        if(!allFoundationCoursesAdded){
			foundationCourseSet.forEach((fc) => {
				if(this.courseAvailThisTerm(fc, quarter.term) && cpqCounter < numCPQ && !courseSet.has(fc)){
                    courseSet.add(fc);
                    quarter.addCourse(fc);
                    foundationCourseSet.delete(fc);
					cpqCounter++;
				}
            });
                
            if(foundationCourseSet.size == 0)
                allFoundationCoursesAdded = true;       
		}
        
        if(!allAdvancedCoursesAdded){
            advancedCourseSet.forEach((ac) => {
                if(this.courseAvailThisTerm(ac, quarter.term) && cpqCounter < numCPQ && !courseSet.has(ac)
                && this.hasPrereqs(courseSet, ac)){
                    courseSet.add(ac);
                    quarter.addCourse(ac);
                    advancedCourseSet.delete(ac);
				    cpqCounter++;
				}
            });
             
            if(advancedCourseSet.size == 0)
                allAdvancedCoursesAdded = true;
        }
        
        if(!allMajorElectiveCoursesAdded){
            for(var i = 0; i < this.isMajorElectiveCourses[degreeRqmnts[0]].length && cpqCounter < numCPQ && meCounter < degreeRqmnts[1]; i++) {
				    if(this.courseAvailThisTerm(this.isMajorElectiveCourses[degreeRqmnts[0]][i], quarter.term) && !courseSet.has(this.isMajorElectiveCourses[degreeRqmnts[0]][i])
                    && this.hasPrereqs(courseSet, this.isMajorElectiveCourses[degreeRqmnts[0]][i])){
					   courseSet.add(this.isMajorElectiveCourses[degreeRqmnts[0]][i]);
					   quarter.addCourse(this.isMajorElectiveCourses[degreeRqmnts[0]][i]);
					   cpqCounter++;
                       meCounter++;
				    }
                }
            
            if(meCounter == degreeRqmnts[1])
                    allMajorElectiveCoursesAdded = true; 
        }
        
        if(!openElectiveCourseAdded){
            for(var i = 0; i < this.isOpenElectiveCourses.length && cpqCounter < numCPQ && oeCounter < 1; i++){
                if(this.courseAvailThisTerm(this.isOpenElectiveCourses[i], quarter.term) && !courseSet.has(this.isOpenElectiveCourses[i]) &&
                this.hasPrereqs(courseSet, this.isOpenElectiveCourses[i])){
					   courseSet.add(this.isOpenElectiveCourses[i]);
					   quarter.addCourse(this.isOpenElectiveCourses[i]);
					   cpqCounter++;
                       oeCounter++;
                       openElectiveCourseAdded = true;
				    }         
            }
        }
        
        if(!capstoneAdded){
            if(this.courseAvailThisTerm("IS 577", quarter.term) && cpqCounter < numCPQ && !courseSet.has("IS 577") && this.hasPrereqs(courseSet, "IS 577")){
					   courseSet.add("IS 577");
					   quarter.addCourse("IS 577");
					   cpqCounter++;
                       capstoneAdded = true;
            }
        }
        
        if(cpqCounter != numCPQ)
			console.log("Could not find enough available classes for this quarter.");
        
        cpqCounter = 0;
        
    }//end quarter of degreePlan for loop 
    
    if(!allFoundationCoursesAdded)
        this.fillRemainingFoundationCoursesIS(courseSet, foundationCourseSet, degreePlan, numCPQ);
        
    
    if(!allAdvancedCoursesAdded)
        this.fillRemainingAdvancedCoursesIS(courseSet, advancedCourseSet, degreePlan, numCPQ);
    
    if(!allMajorElectiveCoursesAdded) 
        this.fillRemainingMajorElectiveCoursesIS(courseSet, degreePlan, degreeRqmnts, numCPQ, meCounter);      
    
    if(!openElectiveCourseAdded)
        this.fillRemainingOpenElectiveCoursesIS(courseSet, degreePlan, numCPQ, oeCounter);
    
    if(!capstoneAdded)
        this.fillRemainingCapstoneCourseIS(courseSet, degreePlan, numCPQ);
        
  }//end fillRqmntsIS()
  
  fillRemainingFoundationCoursesIS(courseSet : Set<string>, foundationCourseSet : Set<string>, degreePlan : Array<Quarter>, numCPQ : number){
  
    var iterations = 0;
    var allFoundationCoursesAdded : boolean = false;
    var cpqCounter = degreePlan[degreePlan.length - 1].classes.length;
    
    
    
    while(!allFoundationCoursesAdded && iterations < 4){
    
        let acadYear1 = degreePlan[degreePlan.length - 1].acadYear1;
        let acadYear2 = degreePlan[degreePlan.length - 1].acadYear2;
        let nextTerm = this.getNextTerm(degreePlan[degreePlan.length - 1].term);
        degreePlan.push(new Quarter(nextTerm, acadYear1, acadYear2));
    
        for(var k = degreePlan.length - 1; k < degreePlan.length; k++){
  
        foundationCourseSet.forEach((fc) => {
				if(this.courseAvailThisTerm(fc, degreePlan[k].term) && cpqCounter < numCPQ && !courseSet.has(fc)){
                    courseSet.add(fc);
                    degreePlan[k].addCourse(fc);
                    foundationCourseSet.delete(fc);
					cpqCounter++;
				}
            });
            
        }
                
        if(foundationCourseSet.size == 0)
            allFoundationCoursesAdded = true;  
    }
  
  }
  
  fillRemainingAdvancedCoursesIS(courseSet : Set<string>, advancedCourseSet : Set<string>, degreePlan : Array<Quarter>, numCPQ : number){
  
        var iterations = 0;
        var allAdvancedCoursesAdded : boolean = false;
        var cpqCounter = degreePlan[degreePlan.length - 1].classes.length;
        
        while(!allAdvancedCoursesAdded && iterations < 4){
            
            let acadYear1 = degreePlan[degreePlan.length - 1].acadYear1;
            let acadYear2 = degreePlan[degreePlan.length - 1].acadYear2;
            let nextTerm = this.getNextTerm(degreePlan[degreePlan.length - 1].term);
            degreePlan.push(new Quarter(nextTerm, acadYear1, acadYear2));
            
            for(var k = degreePlan.length - 1; k < degreePlan.length; k++){
            
                advancedCourseSet.forEach((ac) => {
                    if(this.courseAvailThisTerm(ac, degreePlan[k].term) && cpqCounter < numCPQ && !courseSet.has(ac)
                    && this.hasPrereqs(courseSet, ac)){
                        courseSet.add(ac);
                        degreePlan[k].addCourse(ac);
                        advancedCourseSet.delete(ac);
				        cpqCounter++;
				    }
                });
            }
            
            if(advancedCourseSet.size == 0)
                allAdvancedCoursesAdded = true;
                
            iterations++;
        }
  }
  
  fillRemainingMajorElectiveCoursesIS(courseSet : Set<string>, degreePlan : Array<Quarter>, degreeRqmnts : number[], numCPQ : number, meCounter : number){
  
    var iterations = 0;
    var allMajorElectiveCoursesAdded : boolean = false;
    var cpqCounter = degreePlan[degreePlan.length - 1].classes.length;
        
    while(!allMajorElectiveCoursesAdded && iterations < 4){
    
        let acadYear1 = degreePlan[degreePlan.length - 1].acadYear1;
        let acadYear2 = degreePlan[degreePlan.length - 1].acadYear2;
        let nextTerm = this.getNextTerm(degreePlan[degreePlan.length - 1].term);
        degreePlan.push(new Quarter(nextTerm, acadYear1, acadYear2));
    
        for(var k = degreePlan.length - 1; k < degreePlan.length; k++){
            for(var i = 0; i < this.isMajorElectiveCourses[degreeRqmnts[0]].length && cpqCounter < numCPQ && meCounter < degreeRqmnts[1]; i++) {
				    if(this.courseAvailThisTerm(this.isMajorElectiveCourses[degreeRqmnts[0]][i], degreePlan[k].term) && !courseSet.has(this.isMajorElectiveCourses[degreeRqmnts[0]][i])
                    && this.hasPrereqs(courseSet, this.isMajorElectiveCourses[degreeRqmnts[0]][i])){
					   courseSet.add(this.isMajorElectiveCourses[degreeRqmnts[0]][i]);
					   degreePlan[k].addCourse(this.isMajorElectiveCourses[degreeRqmnts[0]][i]);
					   cpqCounter++;
                       meCounter++;
				    }
            }
        }      
            if(meCounter == degreeRqmnts[1])
                    allMajorElectiveCoursesAdded = true; 
    }
  }
  
  fillRemainingOpenElectiveCoursesIS(courseSet : Set<string>, degreePlan : Array<Quarter>, numCPQ : number, oeCounter : number){
  
    var iterations = 0;
    var allOpenElectiveCoursesAdded : boolean = false;
    var cpqCounter = degreePlan[degreePlan.length - 1].classes.length;
        
    while(!allOpenElectiveCoursesAdded && iterations < 4){
            
        let acadYear1 = degreePlan[degreePlan.length - 1].acadYear1;
        let acadYear2 = degreePlan[degreePlan.length - 1].acadYear2;
        let nextTerm = this.getNextTerm(degreePlan[degreePlan.length - 1].term);
        degreePlan.push(new Quarter(nextTerm, acadYear1, acadYear2));
            
        for(var k = degreePlan.length - 1; k < degreePlan.length; k++){
            for(var i = 0; i < this.isOpenElectiveCourses.length && cpqCounter < numCPQ && oeCounter < 1; i++){
                if(this.courseAvailThisTerm(this.isOpenElectiveCourses[i], degreePlan[k].term) && !courseSet.has(this.isOpenElectiveCourses[i]) &&
                this.hasPrereqs(courseSet, this.isOpenElectiveCourses[i])){
					   courseSet.add(this.isOpenElectiveCourses[i]);
					   degreePlan[k].addCourse(this.isOpenElectiveCourses[i]);
					   cpqCounter++;
                       oeCounter++;
                       allOpenElectiveCoursesAdded = true;
				    }         
            }
        }
    }
  
  }
  
  fillRemainingCapstoneCourseIS(courseSet : Set<string>, degreePlan : Array<Quarter>, numCPQ : number){
        
        var iterations = 0;
        var capstoneAdded : boolean = false;
        var cpqCounter = degreePlan[degreePlan.length - 1].classes.length;
        
        while(!capstoneAdded && iterations < 4){
            
            let acadYear1 = degreePlan[degreePlan.length - 1].acadYear1;
            let acadYear2 = degreePlan[degreePlan.length - 1].acadYear2;
            let nextTerm = this.getNextTerm(degreePlan[degreePlan.length - 1].term);
            degreePlan.push(new Quarter(nextTerm, acadYear1, acadYear2));
            
            for(var k = degreePlan.length - 1; k < degreePlan.length; k++){
                if(this.courseAvailThisTerm("IS 577", degreePlan[k].term) && cpqCounter < numCPQ && !courseSet.has("IS 577")){
                    courseSet.add("IS 577");
                    degreePlan[k].addCourse("IS 577");
				    cpqCounter++;
                    capstoneAdded = true;
                }         
            }
            iterations++;
        }
    }
  
  /*--------------------------------------------------------------------------------------------------------

    The getDegreeRqmnts() function returns the requirement for the selected degree and specific area / concentration.
    
    It returns an integer array of size 1 for Computer Science majors and of size 2 for Information Systems majors.
    
    The values inside the array correspond to the JSON objects above which act as enum types which map to
    array indexes.
  
  ---------------------------------------------------------------------------------------------------------*/

  getDegreeRqmnts(degree : string){
	switch(degree){
		case "Computer Science: Software and Systems Development": {
			return [ this.SAE.SSD ];			
		}
		case "Computer Science: Theory" : {
			return [ this.SAE.T ]; 
		}
		case "Computer Science: Data Science": {
			return [ this.SAE.DSci ]; 
		}
		case "Computer Science: Database Systems" : {
			return [ this.SAE.DSys ];
		}
		case "Computer Science: Artificial Intelligence" : {
			return [ this.SAE.AI ];
		}
		case "Computer Science: Software Engineering" : {
			return [ this.SAE.SE ];
		}
		case "Computer Science: Game and Real-Time Systems" : {
			return [ this.SAE.GRTS ];
		}
		case "Computer Science: Human-Computer Interaction" : {
			return [ this.SAE.HCI ];
		}
		case "Information Systems: Business Analysis/Systems Analysis": {
			return [ this.ISConcentration.BASA, this.ISNumMajorElective.BASA ];  
		}
		case "Information Systems: Business Intelligence": {
			return [ this.ISConcentration.BI, this.ISNumMajorElective.BI ];
		}
		case "Information Systems: Datbase Administration": {
			return [ this.ISConcentration.DA, this.ISNumMajorElective.DA ];
		}
		case "Information Systems: IT Enterprise Management": {
			return [ this.ISConcentration.ITEM, this.ISNumMajorElective.ITEM ];
		}
		case "Information Systems: Standard": {
			return [ this.ISConcentration.Standard, this.ISNumMajorElective.Standard ];
		}
	}
  }//end getDegreeRqmnts
  
  /*--------------------------------------------------------------------------------------------------------

    The buildQuarters() function calls the buildQuartersList() function.
    
    numCPQ = number of classes per quarter
  
  ---------------------------------------------------------------------------------------------------------*/

  buildQuarters(beginQuarter : string, numCPQ : number){

	if(numCPQ == 1) {
			let oneClassPerQuarter = this.buildQuarterList(beginQuarter, 13);
			return oneClassPerQuarter;
	} else if(numCPQ == 2){		
			let twoClassPerQuarter = this.buildQuarterList(beginQuarter, 7);
			return twoClassPerQuarter;
	} else if(numCPQ == 3){		
			let threeClassPerQuarter = this.buildQuarterList(beginQuarter, 5);
			return threeClassPerQuarter;
	}
  }//end buildQuarters()
  
   /*--------------------------------------------------------------------------------------------------------

    The buildQuartersList() function makes an array of Quarter objects.
  
  ---------------------------------------------------------------------------------------------------------*/

  buildQuarterList(beginQuarter : string, numQuarters : number){
	let quarterList = new Array<Quarter>(numQuarters);	
	var i : number;
    var acadYear1 : number = 2017;
    var acadYear2 : number = 18;
    var acadYearString : string = acadYear1 + "/" + acadYear2;
	for(i = 0; i < numQuarters; i++){

		var currentTerm : string;

		if(i == 0) 
			currentTerm = beginQuarter;
		else	
			currentTerm = this.getNextTerm(quarterList[i-1].term);
            
        if(currentTerm == "Fall"){
            acadYear1++;
            acadYear2++; 
        }

		quarterList[i] = new Quarter(currentTerm, acadYear1, acadYear2);
	}

	return quarterList;
  }//end buildQuarterList()
  
   /*--------------------------------------------------------------------------------------------------------

    The getNextTerm() function gets the next term label for the next quarter.
  
  ---------------------------------------------------------------------------------------------------------*/

  getNextTerm(currentTerm : string) {
	switch(currentTerm) {
		case "Fall" : 
			return "Winter";
		case "Winter" : 
			return "Spring";
		case "Spring" : 
			return "Summer";
		case "Summer" : 
			return "Fall";
	}
  }//end getNextTerm()

}//end class



