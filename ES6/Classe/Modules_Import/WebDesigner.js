import {Designer} from "./Designer.js";

export class WebDesigner extends Designer {
    constructor(name,location){
        super(name);
        this.location = location;
    }
    programming(){
        console.log("Javascript");
    }
}

