window.onload = function(){
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 5;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
let verb = document.getElementById('verb')
let adjective = document.getElementById('adjective')
let noun_other = document.getElementById('noun/other')
let result = document.getElementById('result')
let result2 = document.getElementById('result2')

minimumCharacters = 0
maximumCharacters = 0

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
	minimumCharacters = Math.round(sliderOne.value * 0.1)
    displayValOne.textContent = minimumCharacters;
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
	maximumCharacters = Math.round(sliderTwo.value * 0.1)
    displayValTwo.textContent = maximumCharacters + " Letters";
    fillColor();
}
function fillColor(){
    percent1 = ((sliderOne.value) / sliderMaxValue) * 100;
    percent2 = ((sliderTwo.value) / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

// ==== GENERATE FUNCTIONS ==== //
let wordTypes = {
	"Noun" : "", // Nouns aren't special
	"Verb" : "al", // Verbs end with 'al', e.g: 'Karal'
	"Adjective" : "ev" // Adjectives end with 'ev' 'Gharev'
}

let letterMethods = [
	['C', 'V', 'C'],
	['V', 'C', 'V'],
	['V', 'C'],
	['V', 'V', 'C']
]

let consonants = [
	"b",
	"d",
	"f",
	"g",
	"h",
	"j",
	"ch",
	"k",
	"l",
	"m",
	"n",
	"p",
	"r",
	"s",
	"sh",
	"t",
	"v",
	"kh",
	"gh",
	"z",
	"zh",
	"th",
	"dh"
]

let consonants_fbd = [
	"b",
	"d",
	"f",
	"g",
	"h",
	"j",
	"c",
	"k",
	"l",
	"m",
	"n",
	"p",
	"r",
	"s",
	"\\",
	"t",
	"v",
	"[",
	"x",
	"z",
	"Z",
	"T",
	"D"
]

let vowels = [
	"a",
	"ā",
	"ə",
	"e",
	"i",
	"o",
	"u"
]

let vowels_fbd = [
	"a",
	"A",
	"E",
	"e",
	"i",
	"o",
	"u"
]

let wordSuffix = ""
let word_fbd = ""

function generate() {
	let wordLength = Math.floor(Math.random() * (maximumCharacters - minimumCharacters)) + minimumCharacters;
	let lettersDone = 0;
	let word = "";
	word_fbd = "";

	while (lettersDone <= wordLength) {
		let letterMethod = letterMethods[Math.floor(Math.random() * letterMethods.length)];

		for (let letterType of letterMethod) {
			lettersDone++;
			if (lettersDone > wordLength)
				break;

			if (letterType === 'C') {
				let index = Math.floor(Math.random() * consonants.length);
				word += consonants[index];
				word_fbd += consonants_fbd[index]
			} 
			else if (letterType === 'V') {
				let vowel = "";
				let vowel_fbd = "";

				let index = Math.floor(Math.random() * vowels.length);
				vowel = vowels[index];
				vowel_fbd = vowels_fbd[index]
				
				word += vowel;
				word_fbd += vowel_fbd
			}
		}
	}

	word += wordSuffix;
	word_fbd += wordSuffix
	return word;
}

function generate_verb(){
	wordSuffix = "al"
	result.innerText=generate()
	result2.innerText=word_fbd
}

function generate_adjective(){
	wordSuffix = "ev"
	result.innerText=generate()
	result2.innerText=word_fbd
}

function generate_noun_other(){
	wordSuffix = ""
	result.innerText=generate()
	result2.innerText=word_fbd
}

document.addEventListener('DOMContentLoaded', () => 
{
	verb.addEventListener('click', generate_verb)
	adjective.addEventListener('click', generate_adjective)
	noun_other.addEventListener('click', generate_noun_other)
})

