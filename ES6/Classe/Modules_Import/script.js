import { WebDesigner } from "./WebDesigner.js";
import { Designer } from "./Designer.js";

const webdesigner1 = new WebDesigner("Alae");
const webdesigner2 = new WebDesigner("Ihssan", "Morocco");
console.log(webdesigner2.name);
console.log(webdesigner2.location);
console.log(webdesigner2);

const designer = new Designer("Ihssan");
console.log(designer.name);