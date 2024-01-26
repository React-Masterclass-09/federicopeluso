
// Ese 1 -------------------------------------------------------------------
const add = ( a , b ) => { return a+b } ; 
const mul = ( a , b ) => { return a*b } ; 
const sub = ( a , b ) => { return a-b } ; 
const div = ( a , b ) => { return b!=0?a/b:0;  } ; 

const calculate = (a,b,func) => { return func(a,b); }

//console.log(calculate(1,21,add));
//console.log(calculate(1,21,div));


// Ese 2 -------------------------------------------------------------------
const moltiplicaPerDue = (array) => {     
    let NewArr = [] ; // NON PURA 
    for(i=0;i<array.length;i++){
        NewArr.push(array[i]*2);
    }
    return NewArr ;
} 
const my_array_map = ( array , func )  => {
    return func(array);
}
//console.log(my_array_map([1,2,3,4],moltiplicaPerDue));


// Ese 3 -------------------------------------------------------------------


const creaConvertitoreValuta = (float) => {
    return (imp) => {
       return Number(float) * Number(imp) ;
    }
}

let euro = 41 ; 
let tasso = 1.2 ; 
const conv = creaConvertitoreValuta(1.2) ; 
//console.log( `Concverti ${euro}   diventa  al tasso ${tasso} avrai ( sempre pochi soldi ) `+conv(4) );

// Ese 4 -------------------------------------------------------------------
const products = [
    {
        "name": "Smartphone",
        "brand": "Samsung",
        "price": 599.99,
        "quantity": 10
    },
    {
        "name": "Laptop",
        "brand": "Apple",
        "price": 1299.99,
        "quantity": 5
    },
    {
        "name": "Headphones",
        "brand": "Sony",
        "price": 149.99,
        "quantity": 20
    },
    {
        "name": "Tablet",
        "brand": "Amazon",
        "price": 199.99,
        "quantity": 15
    },
    {
        "name": "Smart TV",
        "brand": "LG",
        "price": 799.99,
        "quantity": 8
    },
    {
        "name": "Gaming Console",
        "brand": "Microsoft",
        "price": 499.99,
        "quantity": 12
    },
    {
        "name": "Wireless Earbuds",
        "brand": "Apple",
        "price": 199.99,
        "quantity": 18
    },
    {
        "name": "Fitness Tracker",
        "brand": "Fitbit",
        "price": 79.99,
        "quantity": 25
    },
    {
        "name": "Digital Camera",
        "brand": "Canon",
        "price": 449.99,
        "quantity": 7
    },
    {
        "name": "External Hard Drive",
        "brand": "Seagate",
        "price": 89.99,
        "quantity": 30
    },
    {
        "name": "Bluetooth Speaker",
        "brand": "JBL",
        "price": 69.99,
        "quantity": 22
    },
    {
        "name": "Smartwatch",
        "brand": "Samsung",
        "price": 299.99,
        "quantity": 14
    },
    {
        "name": "Wireless Mouse",
        "brand": "Microsoft",
        "price": 29.99,
        "quantity": 35
    },
]
const getPriceTot = (obj) => {
     
    return Object.keys(obj).reduce(
    (tot,key) => { tot += obj[key]['price'] ; return tot; }, 0 ) ;

}

const calcObj = ( obj, func ) => parseFloat(func(obj))


//console.log(calcObj( products, getPriceTot) ) ; 
// ------------------------------------------------------------------------------
const in_array = (arr,str)  => {
    for(let i=0;i<arr.length;i++){
        if( arr[i]===str) return true ; 
    }
    return false ; 
}
const in_array2 = (arr,str)  => {
 
    return arr.find(el=>el===str) ; 
}
const array_unique = (arr,func) => {
    let arrUnique = [] ;     
    arr.map( (el) =>  func(arrUnique,el)?'':arrUnique.push(el) ); 
    return arrUnique ; 
}

const array_unique2 = (arr,func) => {
    arr.reduce(
         ( arrUnique , el ) =>   func(arrUnique,el)?'':arrUnique.push(el) , [] );
}
let input=[1,1,'ciao','ciao', true, true]    ; 
//console.log(array_unique(input,in_array2));
console.log(array_unique(input,in_array2));


//console.log("-- "+objSumCar( products,'Logitech')) ; 
