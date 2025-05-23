class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  inccreaseSalary(percentage) {
    this.salary = (this.salary * percentage).toFixed(2);
  }
  getInfo() {
    console.log(`Employee: ${this.name}, ${this.name}. Salary: ${this.salary}`);
  }
}
const employee1 = new Employee("Kalle", "Coder", 4000);
employee1.getInfo();
employee1.inccreaseSalary(1.1);
employee1.getInfo();
