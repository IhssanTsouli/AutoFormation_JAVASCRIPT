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
    programming(){
        console.log("Javascript");
    }
}

const webdesigner = new WebDesigner("Alae")
console.log(webdesigner.name);
