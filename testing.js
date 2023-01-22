const dog ={
    height: 23,
    weight: 3,
};

for (prop in dog){
    console.log(dog[prop]);
};

function hola(){
    return "hola"+" me ";
}

console.log(hola());