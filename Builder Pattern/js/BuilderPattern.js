class Student {
  constructor(id, name, yearsOld, gpa) {
    this.id = id;
    this.name = name;
    this.yearsOld = yearsOld;
    this.gpa = gpa;
  }
}
class StudentBuilder {
  addId(id) {
    this.id = id;
    return this;
  }
  addName(name) {
    this.name = name;
    return this;
  }
  addYearsOld(yearsOld) {
    this.yearsOld = yearsOld;
    return this;
  }
  addGpa(gpa) {
    this.gpa = gpa;
    return this;
  }
  build() {
    return new Student(this.id, this.name, this.yearsOld, this.gpa);
  }
}

const sang = new StudentBuilder()
  .addId("SE161175")
  .addGpa("4.0")
  .addName("Tran Quang Sang")
  .addYearsOld("2002")
  .build();
const someOne = new StudentBuilder().addId("SEXXXXXX").addGpa("4.0").build();

console.log(someOne);
