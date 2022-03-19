alert("Athbi Alshammari");
const style = "color:blue";
console.log(4 * 4, style);
console.log("أنا في الصف العاشر ");
// [جافاسكربت ليست جافا]

let budget = 20;
console.log(budget > 30 && budget < 80);
budget += 30;
console.log(budget > 30 && budget < 80);

let grade = prompt("أدخل درجتك");
A = grade >= 90 && grade < 100;
S = grade >= 80;
D = grade >= 70;
F = grade >= 60;
H = grade >= 50;
G = grade <= 50;
switch (grade) {
  case "A":
    console.log("لقد حصلت على امتياز 🥳");
  case "S":
    console.log("لقد حصلت على جيد جداً🤩");
  case "D":
    console.log("لقد حصلت على جيد🙂");
  case "F":
    console.log("لقد حصلت على مقبول😕");
  case "H":
    console.log("لقد حصلت على ضعيف☹️");
  case "G":
    console.log("راسب");
}
