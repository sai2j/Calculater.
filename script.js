const display= document.querySelector(".display")
const button= document.querySelectorAll(".button");
const specialChars = [ "%","*","/","-","+","="]
let output="";
const calculater = (btnValue) => {
    if(btnValue === "=" && btnValue !== ""){
        output= eval(output.replac("%","/100"));
    }else if(btnValue==="AC"){
        output="";
    }else if(btnValue==="DEl"){
        output= output.toString().slice(0,-1);
    }
    else{
        if(output === "" && specialChars.includes(btnValue))return;
        output+=btnValue
    }
    display.value= output;

};

button.foreach((button) => {
    button.addEventListener("click" , (e)=> calculate(e.target.dataset.value));
});
