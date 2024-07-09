//balance 1000

function execute(){
    let balance = 1000;

while(true){
    let option = prompt("What do you want to do?\n1. Add\n2. Retire\n3. Exit ");

    //Exit
    if(option === "3"){
        alert("Good bye");
        break;
    }
    
    //Add
    if(option  === "1"){
        let value = parseInt(prompt("How much do you want to add: "));
        balance += value;
        alert("Action correctly realized. Your balance is: " + balance);
    }

    //Retire
    if(option === "2"){
        let value = parseInt(prompt("How much do you want to retire: "));
        if (value > saldo){
            alert("You can't make this action. Your balance is: " + balance);
        }
        else{
            balance -= value;
            alert("Action realized. Your balance is: " + balance);
        }
        
    }else { 
        alert("Invalid option")
    }
}

}

