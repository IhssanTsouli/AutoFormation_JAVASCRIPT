//Array map
//with arrow function

const names = ["Ihssan","Iman","Alae"];

//mli kanrj3o n star kay3ml moxkil
// let items = names.map(name => "<li>"+ name + "</li>");

//wakha nzido bzaf d stora katkhdm
let items = names.map(name => `<li>${name}</li>`);

console.log(items);




// let items = names.map(function(name){
//     return "<li>"+ name + "</li>";
// });
// console.log(items);



// const items = [];

// for(i=0; i<names.length; i++){
    
//     let list = "<li>"+ names[i] + "</li>";
//     items.push(list);  
// }
// console.log(items); 
