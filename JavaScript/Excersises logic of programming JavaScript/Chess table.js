//Simulation * = white and 0 = black 

let list = [0,1,2,3,4,5,6,7];

for(let i = 0; i < list.length; i++){
    console.log("*"+ 0 + "*" + 0 +"*"+ 0 + "*" + 0 );

    if(list[i]%2 != 0){
        console.log (0 + "*" + 0 + "*" + 0 + "*" + 0 + "*");
    }
}
