function right(){
	var playerright = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
	if(playerright<450){
		document.getElementById('player').style.left=playerright+150+"px";
	}
}

function left(){
	var playerleft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
	if(playerleft>70){
		document.getElementById('player').style.left=playerleft-150+"px";
	}
}

function up(){

	move =document.getElementById('move');
	if(move.classList == 'up'){
		return;
	}
	move.classList.add("up");

	setTimeout(function(){
		move.classList.remove("up");
	},300);
}


document.addEventListener("keydown",event=>{
	if(event.key == "ArrowLeft"){
		left();
	}
	if(event.key == "ArrowRight"){
		right();
	}
	if(event.key == "ArrowUp"){
		up();
	}
	

})

var Inter =setInterval(function(){

	var random = Math.floor(Math.random()*4);
	var result = random * 150;
	document.getElementById('object').style.left=result +"px";
	
	document.getElementById('object').style.display='';
	var objecttop =  parseInt(window.getComputedStyle(object).getPropertyValue("top"));
	if(objecttop >=500){
		alert("game over your score is :"+ counter);
		location.reload();
	}

	



},1500);


var counter=0;
var Inter2 =setInterval(function(){

	var objectvalue =  parseInt(window.getComputedStyle(object).getPropertyValue("left"));
	var playervalue =  parseInt(window.getComputedStyle(player).getPropertyValue("left"));
	var objecttop =  parseInt(window.getComputedStyle(object).getPropertyValue("top"));

	var1 = document.querySelector('.up');
	var2 = window.getComputedStyle(var1);
	var3 = parseInt(var2.bottom);

	if(objecttop > 100 && var3 >500 && objectvalue == playervalue ){
		counter++;
		document.getElementById('object').style.display='none';
		document.getElementById('counter').innerHTML=counter;
	}

},100);