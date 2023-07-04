class Singleton {
  static instance;

  constructor() {
    if (Singleton.instance) {
      throw new Error("Singleton already exists");
    }

    Singleton.instance = this;
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

const s = Singleton.getInstance();
console.log(s);
