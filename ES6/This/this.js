
const designer = {
    name: 'Ihssan',
    // programs: function(){}
    programs(){
        console.log(this);
    }
}

designer.programs();
const prog = designer.programs.bind(designer);
prog();



