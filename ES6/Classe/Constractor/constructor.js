//Constructor + Super
class Designer {
    constructor(name,skill){
        this.name = name;
        this.skill = skill;
    }
    skills(){
        console.log(this.skill);
    }
}


const designer = new Designer("Ihssan");
console.log(designer.name);


//--------------------------------------------------------------


class WebDesigner extends Designer {
    constructor(name,location){
        super(name);
        this.location = location;
    }
    programming(){
        console.log("Javascript");
    }
}

const webdesigner1 = new WebDesigner("Alae");
const webdesigner2 = new WebDesigner("Ihssan", "Morocco");
console.log(webdesigner2.name);
console.log(webdesigner2.location);
console.log(webdesigner2);
