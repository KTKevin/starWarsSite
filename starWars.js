var name;
var data;
var planetUrl
var movieList;
function readName(){
	 name = document.getElementById("usrInput").value;
	axios.get('https://swapi.co/api/people/?search='+name).then(function(response){
	console.log("hello world")	
	data = response.data.results[0]
        console.log('https://swapi.co/api/people/?search='+name)
	console.log(data)
	document.getElementById("height").innerHTML =  data.height;
	document.getElementById("mass").innerHTML =data.mass;
	document.getElementById("hair_color").innerHTML= data.hair_color
	axios.get(data.homeworld).then(function(res){
	document.getElementById("homeworld").innerHTML=res.data.name;
	})
        axios.get(data.species).then(function(re){
	console.log(re.data.name)
	document.getElementById("species").innerHTML=re.data.name
	})
	var length = data.films.length
	var i;
	for(i=0; i<length; i++)
		{
			axios.get(data.films[i]).then(function(res){
                        movieList = movieList + res.data.title +"\n"   
			})
			
		}
	document.getElementById("movies").innerHTML = movieList	
	
		
})
	
}

