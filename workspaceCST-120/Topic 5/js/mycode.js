let initialize = () => {
    console.log("In initialize");

    // conditions
    conditions();

    // loops
    loops();

    // objects
    objects();
}

let objects = () => {
    var o = {
        name: "Obj"
    };

    console.log(`object name ${o.name}`);
}

let loops = () => {
    var i = 100;
    for(var k=0;k<i;k++){
        console.log(`k=${i}`);
    }
}

let conditions = () => {
    if(1==1){
        console.log("if hit");
    }

    let g = 10;

    switch(g){
        case 1: {
            console.log("1 - case");
            break;
        }
        case 10:{
            console.log("10 - case");
            break;
        }
        default:{
            console.log("default");
        }
        
    }
}

window.onload=initialize;