//[1] SRP == > Single Responsibility Principle
/**
 * class or function should be have one and only one reason for change to each class should do one thing and do it well
 * بمعني ان كل دالة او كلاس  تكون بتقوم بوظيفة واحده وبس وبالتالي يكون ليها سبب واحده بس للتغيير
 * ** Benefits
 * لو الكود بيعمل حاجات كتير، لما تيجي تغير حاجة هتخرب حاجات تانية.
 **بيخلي الكود أسهل للفهم والصيانة.
 ** لو عايز تضيف feature جديدة، ما تتعبكش في تعديل حاجات قديمة.
 */

// ex. code js with out solid

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  calculatePay() {
    console.log(`Calculating Pay For ${this.name} ; $ ${this.salary * 0.9}`);
    return this.salary * 0.9;
  }
  saveToDatabase() {
    console.log(`Saving ${this.name} is DataBase`);
  }
  printReport() {
    console.log(`Employee Report: ${this.name} , Salary : $ ${this.salary}`);
  }
}

const emp1 = new Employee("mohamed", 2500);
emp1.calculatePay();
emp1.printReport();
emp1.saveToDatabase();
console.log("-".repeat(20));
/**
 *  ايه هي مشاكل الكود دا وليه محتاج تطبق عليه مبادئ السوليد؟؟
 * 1- الكود دا بينفذ اكتر من مهمه او دالة
 * 2- لو في يوم عايزين نعمل ىتعديل في احتمال كبير يضرب فيه اخطأ
 * 3- الكود مش سهل القراءه ولا سهل الصيانه
 *
 * *** طب والحل ؟ نطبق السوليد ونقسم الكود ل تلات اجزاء بحيث كل جزء يقوم بمهمه محدده وواحده فقط
 */

// هنقسم كل جزء من الكود لوحده بحيث يقوم بمهمهة واحده بس

class PayCalculate {
  CalculatePay(employee) {
    console.log(
      `Calculating2 Pay For ${employee.name} , $${employee.salary * 0.9}`
    );
    return employee.salary * 0.9;
  }
}
class PrintReport {
  ReportPrint(print) {
    console.log(
      `Printing the report : employee name ->> ${print.name} , Salary = $${print.salary}`
    );
  }
}

class Employee1 {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}
const emp2 = new Employee1("Taher", 1500);
const caculatepay = new PayCalculate();
const print = new PrintReport();
caculatepay.CalculatePay(emp2);
print.ReportPrint(emp2);
