
var right = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav');
var wrong = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/explosion_02.wav');

var score = 0
var i = 1
var ans = 1

function checkmark(){
	var checker = document.getElementById('checkmark');

	checker.style.visibility = "hidden";
}

function checkmarkenable(){
	var checker = document.getElementById('checkmark');
	
	checker.style.visibility = "visible";
}


function xmark(){
	var xmark = document.getElementById('xmark');
	
	xmark.style.visibility = "hidden";
}

function xmarkenable(){
	var xmark = document.getElementById('xmark');
	
	xmark.style.visibility = "visible";
}




function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value

if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        score++
	checkmarkenable();
	right.play()
	document.searchImage.src ="images/checkmark.png"

    }
    else {
        document.getElementById("question").value="You are wrong"
	wrong.play()
	xmarkenable();
	}
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
	right.play()
	checkmarkenable();
	document.searchImage.src ="images/smile.png"
    }
    else {
        document.getElementById("question").value="You are wrong"
        wrong.play()
	xmarkenable();
    }
    document.view.qscore.value=score
}

else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
	checkmarkenable();
	right.play()
    }
    else {
        document.getElementById("question").value="You are wrong"
        wrong.play()
	xmarkenable();
    }
    document.view.qscore.value=score
}

else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
	checkmarkenable();
	right.play()
    }
    else {
        document.getElementById("question").value="You are wrong"
	wrong.play()
	xmarkenable();
        
    }
    document.view.qscore.value=score
}
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
	checkmarkenable();
	right.play()
    }
    else {
        document.getElementById("question").value="You are wrong"
        wrong.play()
	xmarkenable();
    }
    document.view.qscore.value=score
}
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
	checkmarkenable();
	right.play()
    }
    else {
        document.getElementById("question").value="You are wrong"
        wrong.play()
	xmarkenable();
    }
    document.view.qscore.value=score
}
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
	checkmarkenable();
	right.play()
    }
    else {
        document.getElementById("question").value="You are wrong"
        wrong.play()
	xmarkenable();
    }
    document.view.qscore.value=score
}

else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
	checkmarkenable();
	right.play()
    }
    else {
        document.getElementById("question").value="You are wrong"
        wrong.play()
	xmarkenable();
    }
    document.view.qscore.value=score
}
else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
	checkmarkenable();
	right.play()
    }
    else {
        document.getElementById("question").value="You are wrong"
        wrong.play()
	xmarkenable();
    }
    document.view.qscore.value=score
}
else if (ans===10){ 
	document.getElementById("finish").style.visibility = "visible";
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
	checkmarkenable();
	right.play()
    }
    else {
        document.getElementById("question").value="You are wrong"
        wrong.play()
	xmarkenable();
    }
    document.view.qscore.value=score
}




ans++;

}



function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="What company made spongebob? \na)Universal Studios \nb)Disney XD \nc)Cartoon Network \nd)Nickelodeon";
    document.view.qans.value=""
	checkmark();
	xmark();
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What cartoon features a mouse protaganist? \na)MickeyMouse \nb)Gravity Falls \nc)The Loud House \nd)Spongebob";
    document.view.qans.value=""
	checkmark();
	xmark();
}

else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What cartoon involves magic? \na)MickeyMouse \nb)Gravity Falls \nc)The Loud House \nd)Spongebob";
    document.view.qans.value=""
	checkmark();
	xmark();
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Where does Winnie The Pooh live? \na)Hogwarts \nb)Hundred Acre Wood \nc)Camp-Half-Blood \nd)Bat Cave";
    document.view.qans.value=""
	checkmark();
	xmark();
}

else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What's the father of the Simpsons' first name? \na)Harry \nb)Donald \nc)Homer \nd)Ben";
    document.view.qans.value=""
	checkmark();
	xmark();
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is Scooby Doo's real name? \na)Scoobert Doo \nb)Donald \nc)Homer \nd)Ben";
    document.view.qans.value=""
	checkmark();
	xmark();
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="When was the first Pink Panther film released? \na)1929 \nb)1969 \nc)2003 \nd)1963";
    document.view.qans.value=""
	checkmark();
	xmark();
}
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is Aang's from The Last Airbender pet? \na)A flying bison \nb)a dog \nc)a lizard \nd)a pink panther";
    document.view.qans.value=""
	checkmark();
	xmark();
}

else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Why is Timmy Turner's from Fairly Odd Parents hat pink? \na)The creator wanted it that way \nb)The hat is magic \nc)The creator ran out of blue ink \nd)The hat is blue";
    document.view.qans.value=""
	checkmark();
	xmark();
}
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What colour are Finn from Adventure Time's eyes? \na)Blue \nb)Green \nc)Brown \nd)Blue and Green";
    document.view.qans.value=""
	checkmark();
	xmark();
    
}

	i++; 
}


var percentage= (score*10)
function calculate(){
if (percentage >=0 && percentage <= 100){
		if (percentage >= 80){
			document.write("Congragulations! You got a mark of: " + percentage)
		}
		else if (percentage <80 && percentage >= 70){
			document.write("Good job! You got a mark of: " + percentage)
			
		}
		else if (percentage <70 && percentage >= 60){
			document.write("Nice try. You got a mark of: " + percentage)
			
		}
		else if (percentage <60 && percentage >=50){
			document.write("Better luck next time. You got a mark of: " + percentage)
		
		}
		else{
			document.write("Try again? You got a mark of: " + percentage)
			
		}

}
}