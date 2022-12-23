
// const square = function(n){
//     return n * n;
// }

//Arrow function

// const square = (n) => {
//    return n * n;
// }

//const square = n => n * n;

// console.log(square(2));

const designers = [
    {name:'Ihssan', free: true},
    {name:'Iman', free: false},
    {name:'Ibtissame', free: true},
];

// const freeDesigners = designers.filter(function(designer){
//     return designer.free;
//     //return !(designer.free);
// });

const freeDesigners = designers.filter(designer => designer.free);

console.log(freeDesigners);
console.log(freeDesigners[0].name);


