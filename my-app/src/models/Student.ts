export class Student {
  firstName?: string;
  lastName?: string;
  degree?: string;
  address?: string;
  depaulID?: number;
  coursesTaken?: Array<any>;

  /**
   *
   * @param {string} fName
   * @param {string} lName
   * @param {string} degree
   * @param {string} address
   * @param {number} depaulID
   * @param {Array<any>} coursesTaken
   */
  constructor(
    fName?: string,   // ? is optional
    lName?: string,
    degree?: string,
    address?: string,
    depaulID?: number,
    coursesTaken?: Array<any> ) {

    this.coursesTaken = new Array<any>();
  }




  /**
   *
   * @param {string} name
   */
  setName(name: string) {
    this.firstName = name;
  }

  /**
   *
   * @returns {string}
   */
  getName(): string {
    return this.firstName;
  }

  /**
   *
   * @param {string} lastName
   */
  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  /**
   *
   * @returns {string}
   */
  getLastName(): string {
    return this.lastName;
  }

  /**
   *
   * @param {string} address
   */
  setAddres(address: string) {
    this.address = address;
  }

  /**
   *
   * @returns {string}
   */
  getAddress(): string {
    return this.address;
  }

  /**
   *
   * @param {number} duID
   */
  setDePaulID(duID: number) {
    this.depaulID = duID;
  }

  /**
   *
   * @returns {number}
   */
  getDePaulID(): number {
    return this.depaulID;
  }

  /**
   *
   * @param course
   */
  addClass(course: any) {
    this.coursesTaken.push(course);
  }

  /**
   *
   * @returns {Array<any>}
   */
  getClasses(): Array<any> {
    return this.coursesTaken;
  }

  /**
   *
   * @returns {string}
   */
  toString =(): string => {
    return `Student (${this.lastName + ' ' + this.firstName + ' ' + this.depaulID})`
  }
}
