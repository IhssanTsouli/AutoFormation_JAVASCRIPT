const names = ['ihssan','imane','alae'];
//-------------for------------------------------
// for(i=0; i<names.length; i++){
//     document.write(names[i]+"<br/>");
// };
//----------- for of --------------------------------

for(item of names) document.write(item + "<br/>");

//-------foreach---------------------------

names.forEach(name =>{
    document.write(name+"<br/>");
});

//-------- for in (objects)------------------------

const users = {
    firstName:'Ihssan',
    lastName:'Tsouli'
};

for(user in users){
    document.write(users[user]);
};
// -------------while-----------------
let i = 0;
while(i<= 10){
    document.write(i + "</br>");
    i++;

    if(i=== 5) break;
};
//----------DO WHILE--------------
do {
    document.write(i + "<br/>") 
    i++
    
} while (i<=10);

