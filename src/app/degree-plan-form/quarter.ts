export class Quarter {

  public classes : Array<string> = [];
  public acadYearString = this.term + " " + this.acadYear1 + "/" + this.acadYear2;

  constructor(public term : string, public acadYear1 : number, public acadYear2 : number) { }

  addCourse(course : string) : void {
    this.classes.push(course);
  }

  containsCourse(course : string) : boolean {
    for(let i in this.classes){
      if(i == course){
        return true;
      }
    }
    return false;
  }

  printCourses() : void {
    for(var i = 0; i < this.classes.length; i++){
      console.log(this.classes[i]);
    }
  }

}
