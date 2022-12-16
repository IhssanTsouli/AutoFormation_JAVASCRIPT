const array1 = [1,2,3];
const array2 = [4,5,6];
//Old method
//const arrays = array1.concat(array2);
//New method (spread)
//const arrays =[...array1,...array2];
const arrays =[...array1,'ihssan',...array2,22];

console.log(arrays);

object1 = {first_name:"ihssan"};
object2 = {last_name:"tsouli"};

objects = {...object1, ...object2};
objects = {...object1, country : "morocco" ,...object2};

console.log(objects);



