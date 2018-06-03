export class xCourse {
  COURSE_ID : string;
  OFFERED_FALL : string;
  OFFERED_WINTER : string;
  OFFERED_SPRING : string;
  OFFERED_SUMMER : string;
  PREREQS : string;
  ONLINE : string;
  constructor(public values : Object = {})
  {Object.assign(this.values);}
}
