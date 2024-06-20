mainText = document.getElementById('main-text');
subText = document.getElementById('sub-text');
mainText.innerText = "0"
let num1=0, num2=0;
let lastOperator = null;
let removeCurrent = false;
buttons =document.getElementsByClassName('num');
[...buttons].forEach(element => {
    element.addEventListener('click',()=>{
       
        if(mainText.innerText == '0'){
            mainText.innerText="";
        }
        if(removeCurrent == true){
            num2 = "";
            num1 = 0;
            mainText.innerText = "";
        }
        if(element.innerText != '.' || !mainText.innerText.includes('.')){
            removeCurrent = false;
            mainText.innerText += element.innerText;
            num2 += element.innerText;
        }
    })
});


let percent = document.getElementById("percent").addEventListener('click',(e)=> {
    operate("%");
    mainText.textContent = mainText.textContent + " %" + " ";
});
let plus = document.getElementById('plus').addEventListener('click',(e)=> {
    operate("+");
    mainText.innerText = mainText.innerText + " + ";
});
let div = document.getElementById("div").addEventListener('click',(e)=> {
    operate("/");
    mainText.innerText = mainText.innerText + " / ";
});
let mul = document.getElementById('mul').addEventListener('click',(e)=> {
    operate("*");
    mainText.innerText = mainText.innerText + " x ";
});
let sub = document.getElementById('sub').addEventListener('click',(e)=> {
    operate("-");
    mainText.innerText = mainText.innerText + " - ";
});;
let equal = document.getElementById('equal').addEventListener('click',(e)=>{
    if(num1 != 0 && lastOperator != null){
    console.log('call equal')
    if (lastOperator!= null) operate(lastOperator);
    let p = document.createElement('p');
    p.textContent = mainText.textContent + " = " + num1;
    subText.appendChild(p,document.createElement('br'))  
    mainText.innerText = num1;
    
    lastOperator = null;
    firstTime = true;
    removeCurrent = true;
    console.log(lastOperator)
    }else{
        console.log("num1 = 0")
    }
    });

function operate(operator){
    removeCurrent = false;
    if(num1 == 0){
        num1 = num2*1;
        lastOperator = operator;
        num2 ="";
        return;
    }
    if (num2 == ""){
        lastOperator = operator;
        return;
    }
    console.log(operator)
    switch(operator){
        case '+':
            lastOperator = operator;
            num2 = num2*1;
            num1 = num1+num2;
            num2="";
        break;
        case '-':
                lastOperator = operator;
                num2 = num2*1;
                num1 = num1-num2;
                num2='';
                
        break;
        case '*':
            lastOperator = operator;
            num2 = num2*1;
            num1 = num1*num2;
            num2='';
        break;
        case '/':
            lastOperator = operator;
            num2 = num2*1;
            num1 = num1/num2;
            num2="";
        break;
        case '%':
            lastOperator = operator;
            num2 = num2*1;
            num1 = (num2/num1)*100;
            num2="";
        break;
    }
    console.log("num1" ,num1);
}


let clear = document.getElementById("C").addEventListener(('click'),(e)=>{
    num1 = num2 = 0;
    mainText.innerText = "0";
    subText.innerText = ""
    lastOperator = null;
});

let del = document.getElementById('del').addEventListener(('click'),(e)=>{
    mainText.innerText = mainText.innerText.substring(0,mainText.innerText.length-1);
});;




