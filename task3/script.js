const trafficLightEl = document.querySelectorAll('#trafficLight');
const trafficLightElFirst = document.querySelector('[data-numb = first]');
const trafficLightElSecond = document.querySelector('[data-numb = second]');
const trafficLightElThirnd = document.querySelector('[data-numb = third]');
trafficLightEl.forEach(trafficLightEl => trafficLightEl.addEventListener('click', function(){

    makeRed();
function makeRed(){
    trafficLightElThirnd.style.background = ('black');
    trafficLightElFirst.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeYellow);
}
function makeYellow(){
    trafficLightElSecond.style.background = ('Yellow');
    trafficLightElFirst.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeGreen);
}
function makeGreen() {
    trafficLightElSecond.style.background = ('black');
    trafficLightElThirnd.style.background = ('green');

    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeRed);
}

}))
