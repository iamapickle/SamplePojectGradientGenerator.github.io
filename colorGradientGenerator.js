var pick1=document.getElementById("Colourchosen1");
var pick2=document.getElementById("Colourchosen2");
var button=document.getElementById("but");
var bo=document.getElementById("mit");
var a=document.getElementById("first");
var b=document.getElementById("second");


// function detectchange()
// {
// 	console.log(pick1);
// 	console.log(pick2);
// }

pick1.addEventListener("input", function (){
	bo.style.background="linear-gradient( to right,"+pick1.value+","+pick2.value+")";
});

pick2.addEventListener("input", function (){
	bo.style.background="linear-gradient( to right,"+pick1.value+","+pick2.value+")";
});

but.addEventListener("click", function detectchange()
{
	console.log(pick1.value);
	console.log(pick2.value);
	var stri='linear-gradient('+ 'to right' + ',' + pick1 + ', ' + pick2 + ')';
	bo.style.background="linear-gradient( to right,"+pick1.value+","+pick2.value+")";
	a.innerHTML=pick1.value;
	b.innerHTML=pick2.value;
}
);


