 const dicImg = document.getElementById('diceImg');

const dicNum = document.getElementById('diceNum');

 
document.getElementById('submit').onclick = function(){

    const num =document.getElementById('number').value;




const values = [];
const Img = [];

    for(let i=0; i<num; i++){

        const value = Math.floor(Math.random() * 6)+1;
        values.push(value);
        console.log(values)

        Img.push(`<img src="./${value}.png" alt="${value}">`);

        
    }
    dicNum.textContent = `Dice: ${values.join(', ')}`;
    dicImg.innerHTML = Img.join(' ');

} 
 /* 
    const diceNum = document.getElementById('diceNum');
    const diceImg = document.getElementById('diceImg');
    

submit.onclick = function(){

    const number = document.getElementById('number').value;
         
    const values = [];  
    const Img = [];

    for(let i=0; i<number; i++){
        const value  = Math.floor(Math.random() * 6 +1);

        values.push(value);
        Img.push(`<img src="dice/${value}.png" alt="dice of ${value}">`);
    
    }

diceNum.textContent = `Dice: ${values.join(", ")}`;
diceImg.innerHTML = Img.join(" ");

} */
 

/* function generator(length,lowerA,upperA,digit,symbol){


    const lowers = "abcdefghijklmnopqrstuvwxyz";
    const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const symbols = "!@#$%^&*()_+-=";

    let char= ''; // why it need to declare like this 
    let password = ''; //why it need to declare like this 

    if(lowerA == 1){
        char +=lowers;
    }else{
        console.log(" ");
    }
    //char += lowerA ? lowers: "";
    char  += upperA ? uppers: "";
    char += digit ? digits : "";
    char += symbol ? symbols:"";

   
    
    if(length<=0){
        return `select number of digits to generate it`;
    }
    if(char.length === 0){
        return `select the anyone of them to generate.`;
        
    }

    for(let i=0; i<length; i++){

        const value = Math.floor(Math.random() * char.length)

        password = password + char[value]; //
    }

    return (password); //it return the password to function from where it called 
}

const length = 18;
const upper = true;
const digit = true;
const symbol = true;
const lower = true;

const pass = generator(length,lower,upper,digit,symbol);

console.log(pass);
 
document.getElementById('diceNum').textContent = `the passcode [${pass}] and the length is ${pass.length}.`;  
 */

/* function hello(add){

    console.log("Let's see the addition of Numbers")
    add(23,34,54);//it's giving error message as it's not a function 

}

function add(x,y,z){
    console.log( x+y+z);
}

hello(add); */
