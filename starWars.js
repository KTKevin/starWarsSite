var name;
var data;
function readName(){
	 name = document.getElementById("usrInput").value;
	axios.get('https://swapi.co/api/people/?search='+name).then(function(response){
	console.log("hello world")	
	data = response.data.results[0]
        console.log('https://swapi.co/api/people/?search='+name)
	console.log(data)
	document.getElementById("height").innerHTML=data.height 
	document.getElementById("mass").innerHTML=data.mass;
	document.getElementById("hair_color").innerHTML=data.hair_color

})
	
}

