class Designer {
    constructor(name,skill){
        this.name = name;
        this.skill = skill;
    }
    skills(){
        console.log(this.skill);
    }
}

const designer1 = new Designer("Photoshop");
const designer2 = new Designer("Illustrator");

console.log(designer1.skills());
console.log(designer2.skills());