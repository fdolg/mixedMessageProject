
//Personal message

let personalMessage = ["","",""];

// Object message made up for three parts 
const message={
    songRecomendation:['A beutiful day','Imagine', 'Feeling good','As it was','One kiss'],
    quote:["Just one small positive thought in the morning can change your whole day.",
    "Opportunities don't happen, you create them","Love your family, work super hard, live your passion.",
    "The road to success and the road to failure are almost exactly the same.",
    "Success usually comes to those who are too busy looking for it."],
    aGoodDayFor: ["cycling", "enjoy an icecream", "look the stars", "read a funny book", "call your best friend"]

};

//Generate a random number 

function generateRandomNumber(length){
    return Math.floor(Math.random()*length);
}

//Iterating over the object

for(let attribute in message){
    let randomIndex = generateRandomNumber(message[attribute].length);
    switch(attribute){
        case 'songRecomendation':
            personalMessage[0] = message.songRecomendation[randomIndex]; 
        break;
        case 'quote':
            personalMessage[1] = message.quote[randomIndex];
        break;
        case 'aGoodDayFor':
            personalMessage[2] = message.aGoodDayFor[randomIndex]; 
        break;

        default:
            console.log('Error');
        break;
    }

}

//Building the message

function messageBuild(){
    return 'To begin the day I recommend you this sweet song: "'+ personalMessage[0]
    + '" Also I think today is a nice day to: "'+personalMessage[2]+ '", finally I let you this beutiful tought: "'+
    personalMessage[1]+'" Have a nice day!';
   
}

console.log(messageBuild());



