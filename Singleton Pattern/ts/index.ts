class Person {
  constructor(public id: number, public name: string) {}
}

// singleton
class PeopleSingleton {
  private people: Array<Person> = [];

  static instance = new PeopleSingleton();

  private constructor() {}

  static addPerson(person: Person) {
    this.instance.people.push(person);
  }

  public getPeople() {
    return PeopleSingleton.instance.people;
  }
}

// const people = new PeopleSingleton(), can not because the constructor is private

const people = PeopleSingleton.instance;
PeopleSingleton.addPerson({ name: "Sang", id: 1 });

console.log(people.getPeople());
