var name;
var data;
var planetUrl
var movieList;
function readName(){
	 name = document.getElementById("usrInput").value;
	axios.get('https://swapi.co/api/people/?search='+name).then(function(response){	
	data = response.data.results[0]
	document.getElementById("height").innerHTML =  data.height;
	document.getElementById("mass").innerHTML =data.mass;
	document.getElementById("hair_color").innerHTML= data.hair_color
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
			console.log(value);
			console.log(value.length)
			
			for(var j=0; j <5; j++)
			{      
				console.log("movies"+j)
				document.getElementById("movies"+j).innerHTML = value[j].data.title
			}

		})
	
//	for( i=0; i<length; i++ )
//		{ 
//			console.log("im outside the axios")
//			console.log(i)
//			console.log(data.films[i])
//			axios.get(data.films[i]).then(function(res, i){
//				console.log("i made it here")
//			document.getElementById("movies"+i).innerHTML=res.data.title
//		
//			})
		
//			
//		}
                   
	



})
	
}

