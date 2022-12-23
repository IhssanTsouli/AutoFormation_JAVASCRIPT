// const designer = {
//     skills(){
//         setTimeout(function(){
//             console.log("designer",this) 
//         }, 1000);
        

//     }
// }


// Arrow function

const designer = {
    skills(){
        setTimeout(() => {
            console.log("designer",this) 
        }, 1000);
        

    }
}

designer.skills();
