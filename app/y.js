class Person{
  constructor(name) {
    this.name = name;
  }
  greet() {
    confirm("Hi I am" + this.name);
  }
}
export default Person;
