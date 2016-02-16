//The global variable counter is set initially to 1, it is used for where you are out of the total inputs
var count = 1;
//The gloabl variable is set initially to 0, it is used for keeping track of how many of the right divs are showing
var showing = 0;
//This global variable is 1 if we are going from de to en, otherwise it is 0
var entode = 0;
//modulus function setting negative numbers to positives for a particular number mod(-6,10) = -6 mod 10 = 4
function mod(x,p){
    return x > 0 ? x%p : x%p+p;
}
//this function maps 0 to 1, 1 to 0, ... 8 to 9, 9 to 8
//10 to 11, 11 to 10, ..., 18 to 19, 19 to 19 etc
function mapping(numb){
    return numb%2===0 ? numb+1 : numb-1;
}

// deen function hides h1, h2 and langdir class.
//It unhides hsnp buttons, places 5 german words on left and sets up the counter
//sets target language to en

document.getElementsByClassName("langdir")[0].addEventListener("click", deen);
function deen(){
    //this for loop hides h1,h2 and two langdir option buttons
    for(i=1;i<=2;i++){
        document.getElementsByTagName("h"+i)[0].classList.add("hide");
        document.getElementsByClassName("langdir")[i-1].classList.add("hide");
    }
    document.getElementsByClassName("startPoint")[0].classList.add("hide");
    //this for loop shows (removes the hide class from) the four hsnp buttons
    for(i=0;i<4;i++){
        document.getElementsByClassName("hsnp")[i].classList.remove("hide");
    }
    document.getElementsByClassName("mobileClicker")[0].classList.remove("hide");
    //this for loop creates 5 english (eng) divs on the left and 5 german (ger) divs on the right, but hides the german ones,
    //while creating each one, it places a word from the array (input) in to the word slot on the div
    //it also sets up an onclick function on the eng divs to toggle unhide the ger divs (below?)
    for(i=0;i<10;i++){
        var node = document.createElement("div");
        node.innerHTML=input[i];
        if(i%2 === 0){
            node.className="left leftright german";
        }
        else{node.className="right leftright english hide";}
        document.getElementById("inputs").appendChild(node);
    }
    //adds an onclick function to all the divs on the left to toggle show/hide the divs on the right - defined below
    document.getElementsByClassName("left")[0].onclick=function(){shone();};
    document.getElementsByClassName("left")[1].onclick=function(){shtwo();};
    document.getElementsByClassName("left")[2].onclick=function(){shthree();};
    document.getElementsByClassName("left")[3].onclick=function(){shfour();};
    document.getElementsByClassName("left")[4].onclick=function(){shfive();};
    //the next two lines sets up the counter
    document.getElementsByClassName("counter")[0].classList.remove("hide");
    document.getElementsByClassName("counter")[0].innerHTML=count + " - " + (count + 4) + " of " + input.length/2;
}

//does the same as deen, but places 5 english words on the left
//sets target language to de

document.getElementsByClassName("langdir")[1].addEventListener("click", ende);
function ende(){
    entode++;
    for(i=1;i<=2;i++){
        document.getElementsByTagName("h"+i)[0].classList.add("hide");
        document.getElementsByClassName("langdir")[i-1].classList.add("hide");
    }
    document.getElementsByClassName("startPoint")[0].classList.add("hide");
    for(i=0;i<4;i++){
        document.getElementsByClassName("hsnp")[i].classList.remove("hide");
    }
    document.getElementsByClassName("mobileClicker")[0].classList.remove("hide");
    for(i=0;i<10;i++){
        var node = document.createElement("div");
        node.innerHTML=input[mapping(i)];
        if(i%2 === 0){
            node.className="left leftright english";
        }
        else{node.className="right leftright german hide";}
        document.getElementById("inputs").appendChild(node);
    }
    document.getElementsByClassName("left")[0].onclick=function(){shone();};
    document.getElementsByClassName("left")[1].onclick=function(){shtwo();};
    document.getElementsByClassName("left")[2].onclick=function(){shthree();};
    document.getElementsByClassName("left")[3].onclick=function(){shfour();};
    document.getElementsByClassName("left")[4].onclick=function(){shfive();};
    document.getElementsByClassName("counter")[0].classList.remove("hide");
    document.getElementsByClassName("counter")[0].innerHTML=count + " - " + (count + 4) + " of " + input.length/2;
}

//The shone, ..., shfive functions defined above
//These functions toggle show/hide the divs on the right, they also change the sh button to SHOW if none are showing
//or to HIDE if any are showing

function shone(){
    if(document.getElementsByClassName("right")[0].classList.contains("hide")){
        document.getElementsByClassName("right")[0].classList.remove("hide");
        showing++;
    }
    else{
        document.getElementsByClassName("right")[0].classList.add("hide");
        showing--;
    }
    if(showing>0){document.getElementsByClassName("sh")[0].innerHTML="HIDE";}
    else{document.getElementsByClassName("sh")[0].innerHTML="SHOW";}
}
function shtwo(){
    if(document.getElementsByClassName("right")[1].classList.contains("hide")){
        document.getElementsByClassName("right")[1].classList.remove("hide");
        showing++;
    }
    else{
        document.getElementsByClassName("right")[1].classList.add("hide");
        showing--;
    }
    if(showing>0){document.getElementsByClassName("sh")[0].innerHTML="HIDE";}
    else{document.getElementsByClassName("sh")[0].innerHTML="SHOW";}
}
function shthree(){
    if(document.getElementsByClassName("right")[2].classList.contains("hide")){
        document.getElementsByClassName("right")[2].classList.remove("hide");
        showing++;
    }
    else{
        document.getElementsByClassName("right")[2].classList.add("hide");
        showing--;
    }
    if(showing>0){document.getElementsByClassName("sh")[0].innerHTML="HIDE";}
    else{document.getElementsByClassName("sh")[0].innerHTML="SHOW";}
}
function shfour(){
    if(document.getElementsByClassName("right")[3].classList.contains("hide")){
        document.getElementsByClassName("right")[3].classList.remove("hide");
        showing++;
    }
    else{
        document.getElementsByClassName("right")[3].classList.add("hide");
        showing--;
    }
    if(showing>0){document.getElementsByClassName("sh")[0].innerHTML="HIDE";}
    else{document.getElementsByClassName("sh")[0].innerHTML="SHOW";}
}
function shfive(){
    if(document.getElementsByClassName("right")[4].classList.contains("hide")){
        document.getElementsByClassName("right")[4].classList.remove("hide");
        showing++;
    }
    else{
        document.getElementsByClassName("right")[4].classList.add("hide");
        showing--;
    }
    if(showing>0){document.getElementsByClassName("sh")[0].innerHTML="HIDE";}
    else{document.getElementsByClassName("sh")[0].innerHTML="SHOW";}
}

//removes the words divs, hides the hsnp buttons and unsets up the counter
//It also reshows the titles and the two language direction buttons

document.getElementsByClassName("home")[0].addEventListener("click", home);
function home(){
    if(entode===1){entode--;}
    //resets the words - removes the words back
    for(i=0;i<5;i++){
        var child1 = document.getElementsByClassName("left")[0];
        child1.parentNode.removeChild(child1);
        var child2 = document.getElementsByClassName("right")[0];
        child2.parentNode.removeChild(child2);
    }
    //hides the buttons on the right
    for(i=0;i<4;i++){
        document.getElementsByClassName("hsnp")[i].classList.add("hide");
    }
    document.getElementsByClassName("mobileClicker")[0].classList.add("hide");
    //resets the counter - hiding it and giving it no innerHTML
    document.getElementsByClassName("counter")[0].classList.add("hide");
    document.getElementsByClassName("counter")[0].innerHTML="";
    //resets the counter back to 1 and showing back to 0
    count=1;
    showing=0;
    //Shows the h1 and h2 tags as well as the two language directions
    document.getElementsByClassName("startPoint")[0].classList.remove("hide");
    for(i=0;i<2;i++){
        document.getElementsByClassName("langdir")[i].classList.remove("hide");
        document.getElementsByTagName("h"+(i+1))[0].classList.remove("hide");
    }
}

//sh function is a toggle button which changes the inner html of sh and shows or hides the target language

document.getElementsByClassName("sh")[0].addEventListener("click", sh);
function sh(){
    if(showing>0){
        for(i=0;i<5;i++){
            document.getElementsByClassName("right")[i].classList.add("hide");
        }
        document.getElementsByClassName("sh")[0].innerHTML="SHOW";
        showing=0;
    }
    else{
        for(i=0;i<5;i++){
            document.getElementsByClassName("right")[i].classList.remove("hide");
        }
        document.getElementsByClassName("sh")[0].innerHTML="HIDE";
        showing=5;
    }
}

//next button removes all showing divs on the right and moves the counter along by 5 and changes the input of the words

document.getElementsByClassName("next")[0].addEventListener("click", next);
window.addEventListener("keydown", function(k) {
    if(k.keyCode===39){next();}
});
function next(){
    showing = 1;//to ensure sh() gets invoked correctly
    count = mod((count+5),input.length/2);
    sh(); //hides all divs on the right and sets showing to 0
    //the for loop correctly assigns the divs on the left and right to the next batch of 10
    for(i=0;i<10;i++){
        if(entode===0){
            if(i%2===0){
                document.getElementsByClassName("left")[Math.round((i-0.1)/2)].innerHTML=input[i+count*2-2];
            }
            else{document.getElementsByClassName("right")[Math.round((i-0.1)/2)].innerHTML=input[i+count*2-2];}
        }
        else{
            if(i%2===0){
                document.getElementsByClassName("left")[Math.round((i-0.1)/2)].innerHTML=input[mapping(i+count*2-2)];
            }
            else{document.getElementsByClassName("right")[Math.round((i-0.1)/2)].innerHTML=input[mapping(i+count*2-2)];}
        }
    }
    //the next line updates the counter
    document.getElementsByClassName("counter")[0].innerHTML=count + " - " + (count + 4) + " of " + input.length/2;
}

//prev button moves the counter back by 5 and changes the input of the words
//similar to the next() function, but works in the opposite direction

document.getElementsByClassName("prev")[0].addEventListener("click", prev);
window.addEventListener("keydown", function(k) {
    if(k.keyCode===37){prev();}
});
function prev(){
    showing = 1;
    count = mod((count-5),input.length/2);
    sh();
    for(i=0;i<10;i++){
        if(entode===0){
            if(i%2===0){
                document.getElementsByClassName("left")[Math.round((i-0.1)/2)].innerHTML=input[i+count*2-2];
            }
            else{document.getElementsByClassName("right")[Math.round((i-0.1)/2)].innerHTML=input[i+count*2-2];}
        }
        else{
            if(i%2===0){
                document.getElementsByClassName("left")[Math.round((i-0.1)/2)].innerHTML=input[mapping(i+count*2-2)];
            }
            else{document.getElementsByClassName("right")[Math.round((i-0.1)/2)].innerHTML=input[mapping(i+count*2-2)];}
        }
    }
    document.getElementsByClassName("counter")[0].innerHTML=count + " - " + (count + 4) + " of " + input.length/2;
}

document.getElementsByClassName("mobileClicker")[0].addEventListener("click", mobileClicker);
window.addEventListener("keydown", function(k) {
    if(k.keyCode===32){mobileClicker();}
});
window.addEventListener("keydown", function(k) {
    if(k.keyCode===40){mobileClicker();}
});
window.addEventListener("keydown", function(k) {
    if(k.keyCode===38){mobileClicker();}
});

function mobileClicker(){
    if(showing===0){shone();}
    else if(showing===1){shtwo();}
    else if(showing===2){shthree();}
    else if(showing===3){shfour();}
    else if(showing===4){shfive();}
    else{next();}
}

//preventing the default action of arrow keys, which cause the page to scroll
window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

//For review--This function takes two arguments and returns a portion of the global variable inputs

var bar = document.getElementsByClassName("bar")[0];
var button = document.getElementsByClassName("button")[0];
var info = document.getElementsByClassName("info")[0];
var slider = document.getElementsByClassName("slider")[0];
slider.addEventListener("mousedown", start);
slider.addEventListener("mouseup", stop);
var input = 0;
var increment = 1;
info.innerHTML = input;

function start(event){
    slider.addEventListener("mousemove", move);
    move(event);
}

function move(event){
    var x = Math.round((((event.clientX - slider.offsetLeft) / slider.offsetWidth))*100/increment)*increment;
    input = x<100 ? x : 100;
	info.innerHTML = input;
	button.style.left = input + "%";
}

function stop(event){
	slider.removeEventListener('mousemove', move);
    move(event);
}

document.getElementsByClassName("plus")[0].addEventListener("click", plus);
function plus(){
    input = input<100 ? input + increment : 100;
    info.innerHTML = input;
    button.style.left = input + "%";
}

document.getElementsByClassName("minus")[0].addEventListener("click", minus);
function minus(){
    input = input>0 ? input - increment : 0;
    info.innerHTML = input;
    button.style.left = input + "%";
}
