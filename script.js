   
var score = 0
var i = 1
var ans = 1
var pictures = ["http://www.cartoonbucket.com/wp-content/uploads/2016/07/Spongebob-Smiling-Face.jpg"];
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"

document.mainimage.scr="http://www.cartoonbucket.com/wp-content/uploads/2016/07/Spongebob-Smiling-Face.jpg"
document.getElementById("picture").src = pictures[score];



        score++
        
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}

else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}

else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}

else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
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
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What cartoon features a mouse protaganist? \na)MickeyMouse \nb)Gravity Falls \nc)The Loud House \nd)Spongebob";
    document.view.qans.value=""
}

else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What cartoon involves magic? \na)MickeyMouse \nb)Gravity Falls \nc)The Loud House \nd)Spongebob";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Where does Winnie The Pooh live? \na)Hogwarts \nb)Hundred Acre Wood \nc)Camp-Half-Blood \nd)Bat Cave";
    document.view.qans.value=""
}

else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What's the father of the Simpsons' first name? \na)Harry \nb)Donald \nc)Homer \nd)Ben";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is Scooby Doo's real name? \na)Scoobert Doo \nb)Donald \nc)Homer \nd)Ben";
    document.view.qans.value=""
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="When was the first Pink Panther film released? \na)1929 \nb)1969 \nc)2003 \nd)1963";
    document.view.qans.value=""
}
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is Aang's from The Last Airbender pet? \na)A flying bison \nb)a dog \nc)a lizard \nd)a pink panther";
    document.view.qans.value=""
}

else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Why is Timmy Turner's from Fairly Odd Parents hat pink? \na)The creator wanted it that way \nb)The hat is magic \nc)The creator ran out of blue ink \nd)The hat is blue";
    document.view.qans.value=""
}
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What colour are Finn from Adventure Time's eyes? \na)Blue \nb)Green \nc)Brown \nd)Blue and Green";
    document.view.qans.value=""
}

	i++; 
}