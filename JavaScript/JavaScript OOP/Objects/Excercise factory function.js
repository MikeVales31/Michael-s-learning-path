/**
 * Create 10 objects with properties "ObjectID","State" and "Country"
 * 
 */

function createAdress(objectID, State, Country){
    return {
        objectID,
        State,
        Country,
        Adress: function(){
            return(State + ", " + Country);
        }
    }
}

const object1 = createAdress(1,"GDL","MEX");
const object2 = createAdress(2,"MIC","MEX");
const object3 = createAdress(3,"PUE","MEX");
const object4 = createAdress(4,"QRO","MEX");
const object5 = createAdress(5,"VRZ","MEX");
const object6 = createAdress(6,"CHH","MEX");
const object7 = createAdress(7,"OAX","MEX");
const object8 = createAdress(8,"TEX","USA");
const object9 = createAdress(9,"WSH","EUA");
const object10 = createAdress(10,"BCN","MEX");

console.log(object1.Adress());