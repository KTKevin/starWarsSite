var name;
var data;
var planetUrl
var movieList;
var moviesList
function readName(){
	 name = document.getElementById("usrInput").value;
	axios.get('https://swapi.co/api/people/?search='+name).then(function(response){	
	data = response.data.results[0]
	document.getElementById("height").innerHTML =  data.height;
	document.getElementById("mass").innerHTML =data.mass;
	document.getElementById("hair_color").innerHTML= data.hair_color
	document.getElementById("skin_color").innerHTML=data.skin_color
	document.getElementById("gender").innerHTML=data.gender
	axios.get(data.homeworld).then(function(res){
	document.getElementById("homeworld").innerHTML=res.data.name;
	})
        axios.get(data.species).then(function(re){
	document.getElementById("species").innerHTML=re.data.name
	})

	let length = data.films.length
	let promises = [];
		for(let i = 0; i < length; i++)
		{
			promises.push(axios.get(data.films[i]));
		}

		Promise.all(promises).then(function (value){
		//	console.log(value);
		//	console.log(value.length)
			moviesList=value
			console.log(moviesList)
		        document.getElementById("movies0").innerHTML =value[0].data.title	
			for(var j=0; j <value.length; j++)
			{       console.log("hello world")
				console.log("movies"+j)
				document.getElementById("movies"+j).innerHTML = value[j].data.title
			}

		})
	
                   
	})
	
}

