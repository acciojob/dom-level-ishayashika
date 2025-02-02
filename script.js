//your JS code here. If required.
let targetElement=document.getElementById("level");
let level=1;
while (targetElement.parentElement !== null) {
    level++;  
    targetElement = targetElement.parentElement; 
}
alert("The level of the element is: "+ level)
