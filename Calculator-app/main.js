var button1= document.getElementById("btn1");
var button2= document.getElementById("btn2");
var button3= document.getElementById("btn3");
var button4= document.getElementById("btn4");
var button5= document.getElementById("btn5");
var inMoney= document.getElementById("in-money");
var Custom= document.getElementById("custom");
var NumOfPeople= document.getElementById("num-people");
var Tip= document.getElementById("tip");
var Total= document.getElementById("total");
var Rest= document.getElementById("sub-btn");
var emptyMenoy= document.getElementById("em-i");
var emptyPeople= document.getElementById("em-p");


button1.addEventListener("click", handleButtonClick);
button2.addEventListener("click", handleButtonClick);
button3.addEventListener("click", handleButtonClick);
button4.addEventListener("click", handleButtonClick);
button5.addEventListener("click", handleButtonClick);
Custom.addEventListener("click",handleButtonClick);


function handleButtonClick(event){
    var clickedButton= event.target;
    if(clickedButton.id=='btn1'){
        if(NumOfPeople.value == 0){
            emptyPeople.style.display = "block"
            NumOfPeople.style.border = "1px solid red"
        }
        else
        {
            var money= inMoney.value;
            var people= NumOfPeople.value;
            var res= (money*.05)/people;
            var finalRes= res.toFixed(2)
            Tip.innerHTML= finalRes;
            var total= (money/people)+res
            var finalTotal= total.toFixed(2)
            Total.innerHTML= finalTotal
            emptyPeople.style.display="none"
            NumOfPeople.style.border= "none"
        }
        
    }
    else if(clickedButton.id=='btn2'){
        if(NumOfPeople.value == 0){
            emptyPeople.style.display = "block"
            NumOfPeople.style.border = "1px solid red"
        }else{
            var money= inMoney.value;
            var people= NumOfPeople.value;
            var res= (money*.10)/people;
            var finalRes= res.toFixed(2)
            Tip.innerHTML= finalRes;
            var total= (money/people)+res
            var finalTotal= total.toFixed(2)
            Total.innerHTML= finalTotal
            emptyPeople.style.display="none"
            NumOfPeople.style.border= "none"
        }
        
    }
    else if(clickedButton.id=='btn3'){
        if(NumOfPeople.value == 0){
            emptyPeople.style.display = "block"
            NumOfPeople.style.border = "1px solid red"
        }else{
            var money= inMoney.value;
            var people= NumOfPeople.value;
            var res= (money*.15)/people;
            var finalRes= res.toFixed(2)
            Tip.innerHTML= finalRes;
            var total= (money/people)+res
            var finalTotal= total.toFixed(2)
            Total.innerHTML= finalTotal
            emptyPeople.style.display="none"
            NumOfPeople.style.border= "none"
        }
        
    }
    else if(clickedButton.id=='btn4'){
        if(NumOfPeople.value == 0){
            emptyPeople.style.display = "block"
            NumOfPeople.style.border = "1px solid red"
        }else{
            var money= inMoney.value;
            var people= NumOfPeople.value;
            var res= (money*.25)/people;
            var finalRes= res.toFixed(2)
            Tip.innerHTML= finalRes;
            var total= (money/people)+res
            var finalTotal= total.toFixed(2)
            Total.innerHTML= finalTotal
            emptyPeople.style.display="none"
            NumOfPeople.style.border= "none"
        }
        
    }
    else if(clickedButton.id=='btn5'){
        if(NumOfPeople.value == 0){
            emptyPeople.style.display = "block"
            NumOfPeople.style.border = "1px solid red"
        }else{
            var money= inMoney.value;
            var people= NumOfPeople.value;
            var res= (money*.50)/people;
            var finalRes= res.toFixed(2)
            Tip.innerHTML= finalRes;
            var total= (money/people)+res
            var finalTotal= total.toFixed(2)
            Total.innerHTML= finalTotal
            emptyPeople.style.display="none"
            NumOfPeople.style.border= "none"
        }
        
    }
    else{
        if(NumOfPeople.value == 0){
            emptyPeople.style.display = "block"
            NumOfPeople.style.border = "1px solid red"
        }else{
            var custom= (Custom.value)/100;
            var money= inMoney.value;
            var people= NumOfPeople.value;
            var res= (money*custom)/people;
            var finalRes= res.toFixed(2)
            Tip.innerHTML= finalRes;
            var total= (money/people)+res
            var finalTotal= total.toFixed(2)
            Total.innerHTML= finalTotal
            emptyPeople.style.display="none"
            NumOfPeople.style.border= "none"
        }
        
    }
}

Rest.addEventListener("click", function(){
    Tip.innerHTML= "$0.00"
    Total.innerHTML= "$0.00"
    inMoney.value= ""
    NumOfPeople.value= ""
    Custom.value=""
})