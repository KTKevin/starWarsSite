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

	let promises = [];
	var length = data.films.length;
		if(length>0)
		{ console.log("i made it here")
		   axios.get(data.films[0]).then(function(res){
			   console.log("i made it here 2");
			   console.log(res.data.title)
			   document.getElementById("movies0").innerHTML=res.data.title;
		   })
		}
		if(length>1)
		{
			axios.get(data.films[1]).then(function(res){
				document.getElementById("movies1").innerHTML=res.data.title;
			})
		
		}
		if(length>2)
		{
			axios.get(data.films[2]).then(function(res){
				document.getElementById("movies2").innerHTML=res.data.title;
			
			})
		
		}

		 if(length>3)
                {
                        axios.get(data.films[3]).then(function(res){
                                document.getElementById("movies3").innerHTML=res.data.title;

                        })

                }
		  if(length>4)
                {
                        axios.get(data.films[4]).then(function(res){
                                document.getElementById("movies4").innerHTML=res.data.title;

                        })

                }
                 if(length>5)
                {
                        axios.get(data.films[5]).then(function(res){
                                document.getElementById("movies5").innerHTML=res.data.title;

                        })

                }

                  if(length>6)
                {
                        axios.get(data.films[6]).then(function(res){
                                document.getElementById("movies6").innerHTML=res.data.title;

                        })

                }

                    


	
	/*	for(let i = 0; i < length; i++)
		{
			promises.push(axios.get(data.films[i]));
		}
	   

		Promise.all(promises).then(function (value){
			console.log(value);
			console.log(value.length)
			moviesList=value
			console.log(moviesList)
		        document.getElementById("movies0").innerHTML =value[0].data.title	
			for(var j=0; j <value.length; j++)
			{       console.log("hello world")
				console.log("movies"+j)
				document.getElementById("movies"+j).innerHTML = value[j].data.title
			}

		}) */
	
                   
	})
	
}

