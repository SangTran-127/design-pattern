// Student(Observer) and Class(Subject)

class Student {
  constructor(name) {
    this.name = name;
  }
  update(notification) {
    console.log(
      `Student ${this.name} has just received a message ${notification}`
    );
  }
}

class Class {
  constructor(name) {
    this.name = name;
    this.observers = [];
    this.notification = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  unSubribe(observer) {
    this.observers = this.observers.filter((obs) => obs.name !== observer.name);
  }
  addNotification(message) {
    this.notification.push(message);
    this.notifyObservers();
  }
  notifyObservers() {
    this.observers.forEach((obs) =>
      obs.update(this.notification[this.notification.length - 1])
    );
  }
}

const sang = new Student("sang");
const thanh = new Student("thanh");

const mathClass = new Class("Math");

mathClass.subscribe(sang);
mathClass.subscribe(thanh);

mathClass.addNotification("we have an assignment on nextday");

mathClass.unSubribe(sang);

mathClass.addNotification("we have an assignment on monday");
