// const operation = ["multiply", "add", "divide"];
// if (!operation.includes(op)) {
//   console.log("this operation not defined");
// }
type operation = "multiply" | "add" | "divide";
type result = number;
// create module type

export const calculator = (a: number, b: number, op: operation): result => {
  if (op === "multiply") return a * b;
  if (op === "add") return a + b;
  if (op === "divide") {
    if (b === 0) throw new Error("can`t divided by 0");
    return a / b;
  }
  throw new Error("this operation doesn`t exist");
};
// typescript able catch errors before it happens.

try {
  console.log(process.argv);

  calculator(2, 0, "divide");
} catch (error) {
  console.log(error);
}
