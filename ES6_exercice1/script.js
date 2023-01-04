  const Inscription = (age,condition) =>{
    condition = () =>{
        return age<35 ? 'true' : 'false';
   }
    console.log(condition());
   }
  Inscription(40);