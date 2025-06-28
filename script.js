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
function generate_verb(){
	result.innerText="Verb"
}

function generate_adjective(){
	result.innerText="Adjective"
}

function generate_noun_other(){
	result.innerText="Noun/Other"
}

document.addEventListener('DOMContentLoaded', () => {
	verb.addEventListener('click', generate_verb)
	adjective.addEventListener('click', generate_adjective)
	noun_other.addEventListener('click', generate_noun_other)
})