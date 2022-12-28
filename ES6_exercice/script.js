  const Inscrition = (age,condition) =>{
    condition = () =>{
        return age<35 ? 'true' : 'false';
   }
    console.log(condition());
   }
  Inscrition(40);