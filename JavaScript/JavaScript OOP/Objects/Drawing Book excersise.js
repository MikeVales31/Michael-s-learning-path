function Book(n){
    let rightP = 1;
    let leftP =0;   
    
    Object.defineProperty(this,"numberOfPages",{
        get: function(){return n-1}
    }); 
    Object.defineProperty(this,"currentRightPage",{
        get: function(){return rightP}
    });
    Object.defineProperty(this,"currentLeftPage",{
        get: function(){return leftP}
    });
    this.turnPageRight = function(){
        rightP += 2;
        leftP += 2; 
    }
    this.turnPageLeft = function(){
        if(rightP !== -1){
            rightP -= 2;
            leftP -= 2;
        }
        else{
            rightP = n-2;
            leftP -=2
        }
    }
    this.goToBeginning = function(){
        rightP = 1;
        leftP = 0;
    }
    this.goToEnd = function(){
        if((n-1)%2 === 0){
            rightP = -1;
            leftP = n-1;        
        }
        else{
            rightP = n-1;
            leftP = n-2;
        }
    }
}

let book = new Book(7);
book.goToEnd();
console.log(book.currentLeftPage);
console.log(book.currentRightPage); 

