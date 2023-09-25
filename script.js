//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let articleLessArray =[];
let regexp= /\bThe\b|\ban\b|\ba\b/g;
for(let i=0; i<touristSpots.length; i++){
	let articleLessItem = touristSpots[i].replace(regexp,"").trim();
	articleLessArray.push(articleLessItem);
}
articleLessArray.sort();
console.log(articleLessArray);




