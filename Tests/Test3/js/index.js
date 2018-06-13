document.getElementById("form1").onsubmit=function() {
       acronym = parseInt(document.querySelector('input[name = "acronym"]:checked').value);
	   abelt = parseInt(document.querySelector('input[name = "abelt"]:checked').value);
	   moon = parseInt(document.querySelector('input[name = "moon"]:checked').value);
	   rover = parseInt(document.querySelector('input[name = "rover"]:checked').value);
	   
	   
	   result = acronym + abelt + moon + rover;
	   
	document.getElementById("grade").innerHTML = result;

	if (result == 0) {result2 = "Дела плохи, попробуй изучить материал и попробовать снова."};
    if (result == 2) {result2 = "Тебе нужно потратить больше времени, попробуй ещё раз."};
    if (result == 4) {result2 = "Я верю что ты можешь лучше, попробуй ещё раз!"};
    if (result == 6) {result2 = "Очень близко, попробуй ещё раз!"};
    if (result == 8) {result2 = "Ты молодец, осталось чуть-чуть!"};
    if (result == 10) {result2 = "Ты гений!"};

    document.getElementById("grade2").innerHTML = result2;
	   
return false;
}