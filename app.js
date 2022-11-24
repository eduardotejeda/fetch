/* const prom = fetch('https://swapi.dev/api/planets21/').then((response) => {
    if(!response.ok) {
        //console.log("Error not status:200", response.status) 
        throw new Error(`Status Code Error: ${response.status}`);
    } else {
response.json().then((data) => { 
    for (let planet of data.results) {
        console.log(planet.name)
    }
   });
}
})
.catch((err) => {
console.log('SOMETHING WENT WRONG WITH FETCH');
console.log(err);
});  

*/

//fetch

/*
const checkStatusAndParse = (response) => {
	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

	return response.json();
};

const printPlanets = (data) => {
	console.log('Loaded 10 more planets...');
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
	return fetch(url);
};

fetchNextPlanets()
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});*/

    //Axios

    axios.get('https://api.publicapis.org/entries').then((res) => {
        console.log(res.data);
    }).catch((erro) => {
        console.log('IN CATCH CALLBACK!!')
        console.log(err);
    });