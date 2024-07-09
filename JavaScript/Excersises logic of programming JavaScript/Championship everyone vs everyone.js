const lottery = teams => {
    if (teams.length %2 > 0){
        teams.push("Rest");
    }

    let fixture = [];
    let rivals = teams.length - 1;
    let games = teams.length/2;

    for(let i = 0; i < rivals; i++){
        fixture[i] = [];
        for(let j = 0; j < games; j++){
            fixture [i].push([teams[j], teams[rivals-j]]);
          }

          teams.splice(1,0,teams.pop());
    }

    return fixture;
}

const participants = ["AAA","BBB","CCC","DDD","EEE","FFF"];

console.log(lottery(participants));