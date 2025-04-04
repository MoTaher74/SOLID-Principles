/**
 * اعمل نظام صغير لإدارة المهام (Tasks) 
* class لإضافة مهمة.
* class لعرض المهام.
الكائن الأساسي (Task) يكون مجرد بيانات (عنوان وتاريخ).
 */

/**
 * const task = new Task("Learn SRP", "2025-04-03");
const manager = new TaskManager();
const display = new TaskDisplay();
manager.addTask(task);
display.showTask(task);
 */

class TaskManager {
  addTask(manager) {
    console.log(
      `title Task Is : ${manager.title} ,Date is -> ${manager.date} has been add successful`
    );
  }
}
class TaskDisplay {
  showTask(display) {
    console.log(`Show Name Is : ${display.title} , Date is ${display.date}`);
  }
}
class Tasks {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
}
// const date1 = new Date();
// const task1 = new Tasks("Study", date1.getTime());
const task1 = new Tasks("Study", "2021-03-25");
const add = new TaskManager();
const show = new TaskDisplay();
add.addTask(task1);
show.showTask(task1);
